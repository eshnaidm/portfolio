---
title: "Path of Exile 2 — Playable Ad Design"
description: "Design document for a 60–90 second roguelike mobile playable advertisement for Path of Exile 2, covering gameplay flow, encounter design, upgrade pacing, and conversion funnel."
category: "game-design"
tags: ["Game Design", "Mobile", "User Acquisition", "Ad Design"]
date: "2023-08-05"
featured: false
order: 9
---

# Path of Exile 2 — Playable Advertisement Design

**Format:** Mobile Playable Ad (Roguelike)  
**Target Runtime:** 60–90 seconds  
**Platform:** iOS / Android (interstitial ad placement)  
**Objective:** Maximize time-in-ad engagement; convert at boss defeat via App Store CTA

---

## Overview

This document outlines the design of a self-contained playable advertisement for *Path of Exile 2*. The ad format is a condensed roguelike loop that communicates PoE2's core identity — dark fantasy aesthetic, weapon upgrades, and escalating combat — within a strict 90-second window.

The primary design constraint is that **players cannot lose**. The ad must feel exciting and empowering without the frustration of failure, which means all difficulty tuning targets spectacle over challenge.

---

## Design Goals

| Goal | Approach |
|------|----------|
| Communicate PoE2's aesthetic | Graveyard setting; undead enemy archetypes; gothic weapon names |
| Demonstrate core fantasy | Visible power spikes via weapon upgrades; satisfying ability effects |
| Maximize completion rate | No death state; enemy density calibrated for constant action |
| Drive installs | Portal CTA fires at peak engagement — immediately after boss defeat |

---

## Gameplay Flow

The ad is divided into **7 timed phases**, each with a defined objective and transition trigger:

| Phase | Duration | Objective | Transition |
|-------|----------|-----------|------------|
| 1. Character Select | 5–7 sec | Choose Warrior, Sorcerer, or Ranger | Auto-advances or player tap |
| 2. First Wave | 10 sec | Clear initial skeleton/imp spawn | All enemies defeated |
| 3. Merchant + Upgrade | 7–10 sec | Auto-sell loot; upgrade weapon at Blacksmith | Player taps upgrade |
| 4. Second Wave | 10–12 sec | Heavier spawn including Fallen Paladins and Witches | All enemies defeated |
| 5. Merchant + Upgrade | 7–10 sec | Second weapon upgrade | Player taps upgrade |
| 6. Third Wave + Mini-Boss | 12–15 sec | Wave with Necromancer mini-boss | Necromancer defeated |
| 7. Final Upgrade + Boss | 7–10 sec + 10–12 sec | Upgrade to Max tier; defeat Grave Tyrant; portal spawns | CTA: "Continue Playing" |

**Total:** 58–84 seconds (fits within 90-second max)

---

## Characters

Three archetypes cover the primary PoE2 playstyle pillars:

| Character | Weapon | Primary Attack | Special Ability |
|-----------|--------|---------------|-----------------|
| **Warrior** | Longsword | Frontal sword swing (cone AoE) | Shockwave (ground slam, AoE stun) |
| **Sorcerer** | Staff | Chain lightning (hits 4 enemies) | Expanding/contracting lightning ring |
| **Ranger** | Longbow | Arrow spray (wide spread) | 4-arrow volley burst |

> **Design Note:** All three characters feel meaningfully different in the ad's ~60 seconds. The Warrior's melee pushes players toward enemies; the Ranger's ranged attack encourages kiting; the Sorcerer's chain lightning rewards grouping enemies. This variety increases replayability and time-in-ad if players want to try a second class.

---

## Enemy Roster

### Standard Enemies

| Enemy | Type | Spawn Rate | Max Count | HP | Behavior | Loot |
|-------|------|-----------|-----------|-----|----------|------|
| Reanimated Skeleton | Melee | Every 0.25 sec | 20 | 1 hit | Crawls toward player | 1–3 Bones |
| Bloody Imp | Ranged | Every 0.55 sec | 15 | 1 hit | Slow fireball arc | 1–2 Demon Horns |
| Fallen Paladin | Melee | Every 1.1 sec | 8 | 4 hits / 2 abilities | Hammer approach | Rusty Sword |
| Cursed Witch | Ranged | Every 1.25 sec | 8 | 4 hits / 2 abilities | Corruption balls; puddle zones | Staff |

### Mini-Boss: Necromancer

| Property | Value |
|----------|-------|
| Spawn Rate | Every 10 sec |
| Max Count | 2 |
| HP | 8 hits + 4 abilities |
| Behavior | Revives each surrounding mob ×2 every 5 seconds |
| Loot | Necromancer's Ears |

The Necromancer's revival mechanic is the ad's first moment of escalated difficulty — it briefly overwhelms the player with revived enemies before they clear it, creating a satisfying reversal.

### Final Boss: Grave Tyrant

| Property | Value |
|----------|-------|
| HP | 16 hits + 8 abilities |
| Behavior | Pursues player; alternates melee strikes with Soul Chains (root effect) |
| Loot | Tyrant's Crown |
| On Defeat | Portal spawns → CTA fires |

The Grave Tyrant is designed as a **spectacle moment**: it's visually imposing, it telegraphs clearly readable attacks, and defeating it triggers the conversion CTA at peak emotional satisfaction.

---

## Weapon Upgrade System

Three upgrade tiers, each with a visible power increase and cost escalation:

| Upgrade | Cost | Effect |
|---------|------|--------|
| Upgrade 1 | Low | Moderate damage increase |
| Upgrade 2 | Medium | Significant damage increase + visual FX change |
| Max | High | Maximum damage; weapon name and appearance change |

> The upgrade UI fires automatically when players enter the merchant zone (auto-sell on entry) to minimize friction. Players experience the Blacksmith interaction as a reward beat, not a menu.

---

## Map Design

**Environment:** Graveyard surrounded by stone fences  
**Layout:** Compact and enclosed — prevents players from losing enemies off-screen  
**Key Zones:**
- Open spawn area (initial waves)
- Merchant hut + Blacksmith (between-wave upgrade zone)
- Boss arena entrance (final phase)

The enclosed layout ensures enemy density remains high without complex AI pathing requirements, and keeps the player's attention naturally centered.

---

## Controls

| Input | Function |
|-------|----------|
| Left virtual joystick | Movement |
| Right attack button (holdable) | Primary attack |
| Right ability button (with cooldown indicator) | Special ability |

Controls are intentionally minimal. The ad targets players with no existing PoE2 familiarity — the two-button combat layout communicates the game's depth of feel without requiring any tutorial.

---

## Conversion Funnel

The CTA fires at the single highest-engagement moment in the ad — the frame immediately after the boss defeat animation completes. At this point:

- The player has just experienced visible power growth (3 upgrades)
- The most visually impressive enemy is defeated
- Emotional satisfaction from the fight is at peak

**CTA:** "Continue Playing — Visit Game Page →"  
**Action:** Redirects to App Store listing

A secondary passive CTA ("Skip to Game Page") is available throughout but de-emphasized to avoid pulling players out of the experience prematurely.

---

## Design Pillars

1. **Empowerment Over Challenge** — Players must always feel powerful. Enemies are plentiful but not threatening; the upgrade system ensures visible progression within 90 seconds.
2. **IP Authenticity** — Dark aesthetic, gothic enemy names, and escalating boss design reflect PoE2's identity without requiring franchise knowledge to enjoy.
3. **Frictionless Conversion** — The CTA fires at maximum emotional peak; all upgrade interactions are streamlined to maintain flow state.
4. **Replayability** — Three distinct character archetypes invite a second play, increasing time-in-ad metrics.
