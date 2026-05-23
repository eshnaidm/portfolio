---
title: "R.S.M Repair Management System"
description: "Full-stack web CRM for a computer repair shop — order tracking, customer management, analytics, and PDF invoicing with Hebrew RTL interface."
category: "development"
tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"]
date: "2026-05-22"
featured: true
order: 2
---

# R.S.M Repair Management System

> Built with AI-assisted development using Claude Code

## Overview

An internal repair tracking system for a computer repair shop in Kfar Saba, Israel. Replaces paper intake forms with a full web-based workflow accessible from multiple PCs on the shop's LAN. The UI is fully in Hebrew (RTL) with a purple-branded design.

## Tech Stack

- **Next.js 15 (App Router)** — Full-stack React framework with TypeScript
- **PostgreSQL 16** — Relational database for repairs, customers, and devices
- **Prisma ORM** — Type-safe database access and migrations
- **NextAuth.js v5** — Authentication with role-based access (Admin / Technician)
- **Docker Compose** — One-command deployment for the shop's server
- **Radix UI** — Accessible component primitives
- **React PDF** — Invoice and intake form generation

## Features

| Feature | Description |
|---------|-------------|
| **Repair Intake** | Full device intake form with customer details, device info, and problem description |
| **Order Tracking** | Status pipeline: Received → Diagnosed → In Progress → Ready → Delivered |
| **Customer Management** | Customer profiles with full repair history and device records |
| **Lab View** | Active repairs grouped by status — the technician's daily workspace |
| **Analytics Dashboard** | Revenue stats, repair counts, Excel export |
| **PDF Generation** | Printable intake forms and invoices |
| **Multi-user** | Admin and Technician roles with different permissions |
| **Search** | Global search across repairs, customers, and ticket numbers |

## Architecture

```
Next.js App Router (TypeScript)
├── (auth)/login           — Public login page
├── (dashboard)/           — All authenticated pages
│   ├── dashboard/         — Stats overview
│   ├── repairs/           — List, intake form, detail pages
│   ├── customers/         — List with repair history
│   ├── analytics/         — Revenue/repair stats
│   ├── lab/               — Active repairs board
│   └── settings/          — User management (Admin only)
└── api/                   — RESTful API routes
```

## Deployment

The system runs via Docker Compose on the shop's server PC:
- One `docker compose up -d` spins up both the app and PostgreSQL
- Any PC on the LAN can access the system via the server's IP
- Automated backups with volume persistence

## Development Approach

This full-stack application was built using AI-assisted development with Claude Code. It demonstrates ability to architect a production system handling real business requirements — from database schema design to deployment containerization — while supporting Hebrew RTL localization throughout.
