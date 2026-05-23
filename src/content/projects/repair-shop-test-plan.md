---
title: "R.S.M Repair Shop — Bug Test Plan"
description: "Regression test plan covering auth, Docker, data sync, pricing, analytics, printing, and WhatsApp integration bugs found during CRM development."
category: "qa"
tags: ["QA", "Bug Testing", "Web App", "Next.js"]
date: "2026-05-22"
featured: true
order: 5
---
# RSM Repair Shop — Bug-Driven Test Plan

This file documents bugs discovered during development (from conversation history) and converts them into regression test cases to verify before each deployment.

---

## 1. Authentication & Multi-PC Access

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| A1 | Login redirects correctly on client PCs | From a second PC on LAN, go to `http://<server-ip>:<port>` | Redirected to `/login`, can log in, lands on dashboard | `NEXTAUTH_URL=localhost` caused auth redirects to send clients to their own machine instead of the server |
| A2 | Server is reachable from other PCs | From a second PC, open `http://<server-ip>:3001` | Page loads (not `ERR_CONNECTION_REFUSED`) | Docker port was bound to `127.0.0.1` instead of `0.0.0.0`, blocking LAN access |
| A3 | App does not crash on startup with `UntrustedHost` | Start containers with `docker compose up -d`, check logs | No `UntrustedHost` error, app starts cleanly | Missing `AUTH_TRUST_HOST=true` in Docker env caused crash loop |

---

## 2. Docker & Prisma CLI

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| B1 | `db push` uses correct Prisma version | Run `docker compose exec app node_modules/.bin/prisma db push --skip-generate` | Completes without version mismatch errors | Running `npx prisma db push` silently fetched Prisma 7.8.0, mismatching the 6.19.3 client in the image |
| B2 | App starts after `db push` | After running `db push`, visit the app | App responds normally, no `Cannot find module 'effect'` error | Prisma 7 introduced `effect` as a required dependency not present in the runner image |
| B3 | `bcryptjs` is available in production image | Log in as admin after building and deploying image | Login succeeds, no `Cannot find module 'bcryptjs/umd/index.js'` | `bcryptjs` was not copied into the standalone Docker image |

---

## 3. Data Sync Between PCs

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| C1 | Repairs list refreshes automatically | On PC-A, create a repair. On PC-B, wait up to 5 seconds | New repair appears on PC-B without manual refresh | SWR polling was set to 30s for repairs (was reduced to 5s) |
| C2 | Repair detail refreshes after status change | On PC-A, change repair status. On PC-B, view the same repair | Status updates within 5 seconds | Same polling issue as C1 |

---

## 4. Repair Detail — Price & Cost Fields

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| D1 | Old repairs with `finalCost` still show their price | Open a repair created before the labor/parts split was introduced | Sidebar shows "מחיר סופי (ישן)" with the correct amount | After adding `laborCost`/`partsCost`, old repairs with only `finalCost` showed ₪0 because `totalCost` was computed from the new fields only |
| D2 | Price of ₪0 shows as ₪0, not "טרם נקבע" | Set labor cost to 0 on a repair | Displays "₪0", not "טרם נקבע" | `Decimal(0)` is truthy in JavaScript, was initially at risk of showing wrong label |
| D3 | Decimal prices display correctly | Set labor cost to ₪1500.50 | Displays "₪1500.5", not `[object Object]` | Prisma returns `Decimal` objects; `String(Decimal)` works correctly but needed verification |
| D4 | Total cost = labor + parts | Set עלות עבודה to ₪200, עלות חלקים to ₪150 | Total shows ₪350 | Computed client-side — verify the addition is correct |

---

## 5. Analytics & Excel Export

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| E1 | Analytics page loads without TypeScript errors | Open `/analytics` page | Page loads, no console errors | After adding `technicianName` to schema, Prisma client types were stale — 14 TypeScript errors referencing `technicianName` didn't exist on the type |
| E2 | Analytics revenue counts old `finalCost` repairs | View analytics with date range covering old repairs | Total revenue includes old repairs (those with `finalCost` only) | Analytics used only `laborCost+partsCost` initially, missing revenue from repairs created before the split |
| E3 | Excel export contains "עלות עבודה" and "עלות חלקים" columns | Export to Excel from analytics page | Each row has separate labor and parts columns | Original export had a single "מחיר" column using `finalCost` |
| E4 | Excel export for technician totals separates labor/parts | Open exported file, check "לפי טכנאי" sheet | Columns: טכנאי, כמות תיקונים, הכנסות עבודה, הכנסות חלקים | Technician sheet originally had a single revenue column |

---

## 6. Print Page

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| F1 | Print page fits on one A4 page | Open `/print/<id>`, press Ctrl+P | Single page, no content cut off, no blank second page | Adding `overflow: hidden` or fixed `height: 297mm` caused content to clip and produce a blank second page |
| F2 | Print page shows correct OS install price | Open any repair print page, check item 15 in the terms | Shows "300 ₪" not "250 ₪" | Old T&Cs had outdated 250₪ price |
| F3 | Warranty shows only chosen option | Open print page for a warranty repair | Shows "אחריות" only — not both "אחריות / תשלום" | Original print showed both options with a circle-one instruction |

---

## 7. WhatsApp Messages

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| G1 | Phone number formatted correctly for Israeli numbers | Trigger WhatsApp on a repair with phone `052-1234567` | URL uses `972521234567` (no leading 0, with country code) | Phone formatting needed explicit handling of the leading `0` → `972` conversion |
| G2 | Phone with `+972` prefix formats correctly | Phone stored as `+972-52-1234567` | URL uses `972521234567` (no double country code) | `+` and `-` stripped by `replace(/\D/g, "")`, then no `0` prefix so country code is kept as-is |
| G3 | WhatsApp message shows correct total price | Set labor ₪200 + parts ₪150, click WhatsApp button | Message says "עלות התיקון הינו 350 ש״ח" | After cost split, `handleWhatsApp` initially still used the old `finalCost` field |
| G4 | Review message opens on COMPLETED status | Change repair status to "הושלם" | WhatsApp opens with Google review link message | Feature was implemented but emoji (`😊`) in the message showed as `◆` replacement character on the recipient's phone |
| G5 | Review message has no broken characters | Send review WhatsApp to a test number | Message received correctly with no `◆` or replacement characters | Emoji in source file was corrupted by Windows file encoding — fixed by removing emoji entirely |

---

## 8. Repair Edit Mode

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| H1 | Editing customer name reflects in customer list | Open a repair, click ערוך, change first/last name, save | Customer list page shows the updated name | Customer record is updated via `PATCH /api/customers/:id` in parallel with repair/device updates |
| H2 | Edit mode cancel reverts all fields | Open edit mode, change several fields, click בטל | All fields revert to previous values, nothing saved | Edit state is initialized from `repair` data — cancel just discards local state |
| H3 | Device type change saves correctly | In edit mode, change device type from LAPTOP to DESKTOP, save | Saved device type shows DESKTOP | Required new `PATCH /api/devices/:id` endpoint which didn't exist before |

---

## 9. Seeding & First-Run Setup

| # | Test Case | Steps | Expected | Bug That Led to This |
|---|-----------|-------|----------|----------------------|
| I1 | Seed command works in PowerShell | Run seed script via PowerShell heredoc | Admin user created, login works | PowerShell broke heredoc quotes in the seed command, causing `SyntaxError: Invalid or unexpected token` |
| I2 | App recovers after unexpected downtime | Container shows "Up" in `docker ps` but app is unresponsive | `docker compose restart app` restores service | Container process crashed inside Docker (memory issue) while Docker reported the container as running — no healthcheck was in place to auto-restart |

---

## Pre-Deployment Checklist

Before building and pushing a new Docker image, verify:

- [ ] `npx tsc --noEmit` → zero errors
- [ ] `npm run lint` → zero errors  
- [ ] `npm run build` → builds successfully
- [ ] After `db push` on work PC: login works, repairs list loads, analytics loads
- [ ] Test WhatsApp button on a repair (check phone format and message content)
- [ ] Test print page: single A4, terms visible, warranty shows correct option
- [ ] Test from a second PC on the LAN: can log in, sees live data
