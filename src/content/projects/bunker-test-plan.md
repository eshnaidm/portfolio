---
title: "Bunker App — Bug Test Plan"
description: "24 bug test cases across crashes, gameplay logic, localization, UI, multiplayer sync, and security found during development of the Bunker Android game."
category: "qa"
tags: ["QA", "Bug Testing", "Android", "Mobile"]
date: "2026-05-22"
featured: true
order: 4
---
# Bunker App — Bug Test Plan

All test cases sourced from this development session. Each entry maps to a real bug that was either
reported by the user, discovered during implementation, or found in the code review.

Status legend: 🟢 Fixed & Verified | 🟡 Fixed, not re-tested live | 🔴 Known, not fixed

---

## 1. Crashes & Stability

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| C-01 | Grid/table icon crash | Start a game → tap the grid icon (📊) in the top bar on any phase | Player cards table opens | App hard-crashes with `IllegalStateException: infinity height constraints` | `LazyColumn` nested inside `Column(Modifier.verticalScroll())` — two competing scroll containers | 🟢 Fixed |
| C-02 | Game loading screen crash | Host starts game from lobby (6+ players) | Loading spinner, then game starts | App crashes instantly on loading screen | `NullPointerException` or uninitialized state in `GameViewModel` on first Firebase snapshot | 🟢 Fixed |

---

## 2. Gameplay Logic

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| G-01 | **[P0] Infinite tie revote loop** | Get a tie vote (two players with equal votes) → observe what happens | Game goes to re-debate → re-vote once → if still tied, no elimination → continue | Game loops ACCUSATION → DEFENSE → VOTING → ACCUSATION forever | `revoteCount` never incremented when transitioning to ACCUSATION; old votes only cleared when `revoteCount > 0`, so same tied votes auto-re-trigger the tie path | 🟢 Fixed |
| G-02 | **[P1] Reveal phase becomes no-op after round 1** | Play to round 2 → wait for your reveal turn | Round 2 shows buttons to reveal 1–2 attributes | "Done" state shown immediately, no reveal buttons appear | `hasRevealedEnough` compared `revealedAttributes.size` (cumulative) against `roundSlots[currentRound]` (per-round delta, e.g. 2). After revealing 3 in round 1, size=3 ≥ 2, so always "done" | 🟢 Fixed |
| G-03 | **[P1] Non-host player can advance phase** | Join as non-host player → reach your PLAYER_TURN reveal → tap "Done" | Only host should advance phase/timer | Current player (non-host) writes `currentPhase`, `timerEndEpochMs`, `currentTurnPlayerUid` to Firebase | `onDoneTurn()` only checks `isMyTurn`, not `isHost`; calls `advancePhase()` directly | 🟡 Known by design, not changed |
| G-04 | **Start Game button non-functional** | Host creates lobby → 6 players join → host taps Start Game | Game starts for all players | Button tap does nothing on physical device | Firebase write from Start Game failed silently; likely auth token or permission issue | 🟢 Fixed |
| G-05 | **Special abilities not executing** | Player uses an ability during Discussion or Reveal phase | Ability effect applies (e.g. swap an attribute, reveal another's card) | Nothing happens — game state unchanged | Ability system required host-manual handling; automatic execution was not implemented | 🟢 Fixed (redesigned as host-panel manual flow) |

---

## 3. Localization & Language

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| L-01 | **Mixed language display (CRITICAL)** | Host device is in Russian → guest device is in English → start game → guest opens catastrophe reveal screen | Guest sees English text throughout | Guest sees Russian catastrophe name, Russian bunker description, Russian amenities — mixed with English labels | Host wrote locale-specific text strings to Firebase. Guests read host's language text because there was no index system yet | 🟢 Fixed (index-based localization) |
| L-02 | **Russian gender agreement wrong** | Play with a female character in Russian locale → open character sheet | "Молодая", "Атлетическая" (feminine forms) | "Молодой", "Атлетический" (masculine forms used for all) | Enum `stringResId` had only one form; no feminine `stringResIdF` variant existed | 🟢 Fixed |
| L-03 | **Untranslated lobby & in-game UI** | Switch device to Russian → go through lobby creation, join, and in-game screens | All UI text in Russian | Mix: some screens Russian, others still English ("Creating game…", "Enter code", phase names, accusation/defense/voting screens, "Paused", "Body type", "KG") | Hardcoded English strings in Compose composables instead of `stringResource()` calls | 🟢 Fixed |
| L-04 | **"Paused" text hardcoded English** | Activate any ability as host (causes game pause overlay) → observe on Russian device | "Пауза" | "Paused" | `PendingAbilityOverlay.kt` used a hardcoded English string | 🟢 Fixed |
| L-05 | **Hebrew files contained Russian text** | Switch to Hebrew locale → view character sheet or catastrophe screen | Hebrew text | Russian text displayed | Hebrew JSON files were written with Russian content from a prior copy-paste error | 🟢 Fixed |

---

## 4. UI Display

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| D-01 | **Bunker condition emoji always red** | Start a game where the bunker condition is "Excellent" or "Good" → view catastrophe reveal | Green ✅ icon | Red 🔴 icon regardless of actual condition | Display code matched condition by comparing English string prefixes. Russian locale strings never matched → fell to `else → BunkerRed` | 🟢 Fixed (use `conditionIndex`, not text) |
| D-02 | **Survival time display broken** | View catastrophe reveal on any device → read survival time row | "You need to survive in the bunker for 2 years" formatted correctly | Text appeared garbled / spacing wrong (e.g. "2years" or trailing space eaten) | Android strips trailing spaces from `strings.xml` resources; space was part of the string resource | 🟢 Fixed (`buildAnnotatedString` with hardcoded spaces in Kotlin) |
| D-03 | **Wrong survival time wording** | View catastrophe reveal screen | "You need to survive in the bunker for X" | "You have X to reach the bunker" | Incorrect copy — implies travelling to bunker instead of surviving inside | 🟢 Fixed |
| D-04 | **Attribute card display order wrong** | Open character sheet → observe card order | Sex → Age → Body type → Trait → Profession → Health → Hobby → Phobia → Inventory → Backpack → Extra info | Different order (e.g. Profession first, Sex last) | Hardcoded column order in `CharacterSheet.kt` and `PlayerCardsTable.kt` not matching spec | 🟢 Fixed |
| D-05 | **Health displayed without severity** | Open character sheet → see health card | "Brain cancer (Severe)" | "Brain cancer" with no severity shown | Severity was stored but not appended to the display string | 🟢 Fixed |

---

## 5. Host Panel & Ability Overlay

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| H-01 | **"Open Host Panel" dismisses ability overlay** | Player uses ability → `PendingAbilityOverlay` appears → host taps "Open Host Panel" | Panel opens but overlay stays; game remains paused | Overlay is dismissed when "Open Host Panel" is tapped — game resumes prematurely before host has handled the ability | `"Open Host Panel"` button called `onDismiss()` which cleared `pendingAbility` in Firebase | 🟢 Fixed (only "✓ Done, Resume" calls `onDismiss`) |
| H-02 | **[P2] Host randomize breaks localization** | Host opens host panel → randomizes a player's profession, hobby, phobia, inventory, backpack, health, or extra info → Russian/Hebrew player views the card | Player sees new value in their own language | Player sees old value (old index still points to old profession) or sees host's language text | `onRandomizeAttribute()` wrote only text fields to Firebase, not the corresponding `*Index` fields. Display resolves by index first, so old index persisted | 🟢 Fixed |

---

## 6. Multiplayer & Sync

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| M-01 | **"Join Game" button unresponsive** | Launch app → tap "Join Game" → enter a valid 6-char code | Button activates (turns green), tap proceeds to lobby | Button remains inactive, tap does nothing | Input validation not wired to button enabled state; or `onValueChange` not triggering recomposition | 🟢 Fixed |
| M-02 | **Phase transition delay on 3+ devices** | Host + 2 guests on same Firebase → host advances phase | All devices switch phase simultaneously (< 1s) | Guests update several seconds late; only with 3 devices not 2 | Android Studio emulator network throttling; physical-only testing showed normal sync | 🟡 Not a bug (Android Studio issue) |

---

## 7. Security

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| S-01 | **[P1] Firebase rules allow any auth user full write access** | Have any Firebase-authenticated account → write to `/games/{any-code}/currentPhase` directly via REST or Firebase console | Write rejected (only host can change phase) | Write succeeds — any signed-in account can modify any game's phase, timer, players, or delete the game | `database.rules.json` had `.write: "auth != null"` on all paths with no player/host checks | 🟢 Fixed |
| S-02 | **[P1] Non-host player writes phase on their turn** | Non-host player is on `PLAYER_TURN` → taps "Done" | Only host should write phase/timer to Firebase | Non-host player successfully writes `currentPhase`, `timerEndEpochMs`, `currentTurnPlayerUid` | `onDoneTurn()` checks `isMyTurn` (not `isHost`) before calling `advancePhase()` which does a full Firebase phase write | 🟡 Architectural issue, not changed |

---

## 8. Host Disconnect / Abandonment

| # | Test Case | Steps to Reproduce | Expected | Actual (Bug) | Root Cause | Status |
|---|---|---|---|---|---|---|
| X-01 | **Host checking another app ends the game** | Host is in active game → host switches to messages app or home screen for 30–60 seconds → returns | Game continues normally | Game ends immediately for all players (ABANDONED phase triggered) | `onDisconnect()` Firebase hook fires when Android pauses the app after ~60s background; any notification check could end the game | 🟢 Fixed (replaced with 10-minute heartbeat system) |

---

## Summary

| Category | Total | Fixed | Not Fixed / By Design |
|---|---|---|---|
| Crashes & Stability | 2 | 2 | 0 |
| Gameplay Logic | 5 | 4 | 1 (non-host writes — by design) |
| Localization & Language | 5 | 5 | 0 |
| UI Display | 5 | 5 | 0 |
| Host Panel & Abilities | 2 | 2 | 0 |
| Multiplayer & Sync | 2 | 1 | 1 (Android Studio issue) |
| Security | 2 | 1 | 1 (architectural) |
| Host Disconnect | 1 | 1 | 0 |
| **Total** | **24** | **21** | **3** |

---

## Regression Checklist (Run Before Each Release)

These are the most likely areas to regress when adding new features:

- [ ] Start a game with a Russian host + English guest — verify all text on guest is in English (index-based localization)
- [ ] Play to a tie vote twice — verify the game reaches ROUND_RESULT with no elimination (not infinite loop)
- [ ] Play to round 2 — verify reveal buttons appear (cumulative reveal counter)
- [ ] Use an ability → tap "Open Host Panel" → verify game is still paused
- [ ] Host randomizes a player's profession → Russian guest checks the character sheet → verify new profession is in Russian
- [ ] Switch to Russian → open lobby, join screen, accusation phase, defense phase, voting phase — verify all text translated
- [ ] Host backgrounds the app for 30 seconds → verify game does NOT end
- [ ] Host backgrounds the app for 11 minutes → verify guests see ABANDONED screen
