---
title: "Solo Leveling — PvP Ranking Simulator"
description: "GDD for a PvP/PvE hybrid ranking simulator with 19 rebirth tiers, three-layered currency economy, daily quest cycles, and a live event rotation — inspired by the Solo Leveling IP."
category: "game-design"
tags: ["Game Design", "PvP", "Progression", "Economy"]
date: "2023-07-20"
featured: false
order: 8
---

# Solo Leveling — PvP Ranking Simulator

**Genre:** PvP/PvE Ranking Simulator with Rebirth Progression  
**Platform:** Minecraft (Java Edition, custom server)  
**Mode:** Massively multiplayer open-world server  
**IP Inspiration:** Solo Leveling (manhwa / anime)

---

## Overview

Solo Leveling is an open-world simulator where players grind from rank F to the game's highest tier, SSSS+, through 19 rebirths. The design blends idle-style power accumulation with active PvP competition and a daily quest cycle that gates progression behind consistent engagement.

The central design challenge is making **rebirth feel rewarding rather than punishing** — players lose their items and gold on each rebirth, but retain level, accumulated power, and stat distribution rights, ensuring that experienced players always feel stronger than their current rank suggests.

---

## Core Loop

```
Select location (rank-matched) → Kill mobs / players → Accumulate power & gold
        ↓
Distribute stat points → Reach final dungeon → Complete dungeon
        ↓
Rebirth (rank up) → Scale to next difficulty tier → Repeat
```

---

## Progression: Rebirth System

Players advance through 19 rank tiers, each requiring a rebirth:

**F → F+ → E → E+ → D → D+ → C → C+ → B → B+ → A → A+ → S → S+ → SS → SS+ → SSS → SSS+ → SSSS → SSSS+**

### Rebirth Requirements

To trigger a rebirth, players must simultaneously meet three thresholds:

| Requirement | Description |
|-------------|-------------|
| **Gold** | Minimum gold accumulated [value scales per rank] |
| **Power** | Minimum accumulated damage power |
| **Dungeon** | Final location dungeon completed |

### On Rebirth

| Retained | Lost |
|----------|------|
| Level | All items |
| Accumulated power | All gold |
| Damage stat | Equipped gear |

Players may fully redistribute stat points on each rebirth, allowing build pivots at each new rank without penalty.

> **Design Note:** Retaining level and accumulated power means each rebirth starts players stronger than the equivalent new player at that rank — this reinforces the "you are the main character" fantasy central to the Solo Leveling IP.

---

## Stat System

Players start with **10 freely distributable stat points** and earn 1 per level. Three core stats govern all build expressions:

### Strength

| Effect | Value |
|--------|-------|
| Damage per point | +0.5% |
| Every 10 points | +20% critical damage |
| Critical damage cap | 500% (×5) |

### Agility

| Effect | Value |
|--------|-------|
| Speed per point | +1% |
| Every 10 points | +0.5% evasion chance |
| Evasion cap | 10% |

### Survivability

| Effect | Value |
|--------|-------|
| Health per point | +5% |
| Every 10 points | +0.8% vampirism activation + 1.5% recovery |
| Vampirism activation cap | 10% |
| Vampirism recovery cap | 30% |

---

## Economy

The game uses a **three-tier currency system** to create distinct purchasing decisions and prevent any single currency from becoming a catch-all.

### 1. Damage Power

The primary progression metric. Accumulates passively while playing and scales multiplicatively with gear and buffs.

**Power Combo** (manual-click bonus, resets after 15 sec idle):

| Active Duration | Power Multiplier |
|-----------------|-----------------|
| 1 minute | ×1.1 |
| 5 minutes | ×1.2 |
| 10 minutes | ×1.3 |
| 15 minutes | ×1.4 |
| 20 minutes | ×1.5 |
| 30 minutes | ×2.0 |

Power is displayed in large-number notation (quintillion → quadrillion → decillion), with a design target cap of 1 decillion (10³⁰) at max rank.

### 2. Gold

Dropped from mob kills, quest completions, and bosses. Used for stat upgrades, trading between players, and store purchases. A daily cap prevents runaway wealth accumulation.

### 3. Accumulated Damage

Derived stat used for rebirth gating and location access:

```
Accumulated Damage = Accumulated Power × (buff multipliers)
```

---

## Loot System

### Loot Categories

| Category | Notes |
|----------|-------|
| **Armor** | Set-based; full set grants built-in buff + rune slot |
| **Weapons** | Power stat (damage per click) + buff slots |
| **Shards** | 30 shards convert to 1 rune at the NPC forge |

### Inventory

| Slot Type | Base Slots | Scaling |
|-----------|-----------|---------|
| Weapons | 10 | +5 every 5 levels |
| Equipment | 10 | +5 every 5 levels |
| Consumables | 20 | +8 every 5 levels |

---

## Consumables

All consumables have daily use limits gated behind rebirth rank. Higher-tier consumables unlock at higher ranks.

| Consumable | Effect | Daily Limit | Unlock |
|------------|--------|-------------|--------|
| Constricting Potion | AoE stun | 10/day | F |
| Instant Heal I–IV | 20%–50% HP recovery | 5–25/day | F–B |
| Regeneration I–III | 2.5%–10% HP/sec (10–20 sec) | 5–15/day | F–A |
| Strength I–V | +10%–60% damage (25 sec–1 min) | 5–25/day | F–SSS |
| Speed I–III | +40%–110% speed (20 sec–1 min) | 5–15/day | F–S |
| Fortification I–III | +15%–40% defense (1–2 min) | 5–15/day | F–A |
| Totem of Immortality | Second life on death | 1/day | C+ |

---

## Daily Quest System

The quest system is the primary driver of consistent daily engagement. Quests run on a **14-day cycle** with escalating rewards.

### Mandatory Quests (failure resets cycle)

- Kill **100 mobs**
- Kill **10 players**

Both must be completed each day to maintain cycle progress. Missing either resets the player back to Day 1.

### Optional Bonus Quests (5× harder, no penalty)

Higher-tier versions of the mandatory quests (e.g., kill 500 mobs). Completing them awards significantly greater rewards without endangering the main cycle.

> **Design Rationale:** The reset penalty on mandatory quests creates meaningful stakes around daily engagement without being punishing to casual players, since the base requirements are achievable in a short session.

---

## Location System

Locations are rank-matched farming zones. Players must be at the appropriate rank to access each tier, preventing lower-rank players from skipping progression.

### Fighting Pit (General Location)

A round arena divided into concentric zones — mobs, loot quality, and danger all scale toward the center.

**Live Event Rotation (every 30 minutes):**

| Event | Duration | Win Condition |
|-------|----------|---------------|
| King of the Hill | 10 min | Control the center; top 3 rewarded |
| Double Drop | 10 min | All loot rates doubled |
| Gold Rush | 10 min | Increased gold from all kills |
| Team Deathmatch | 15 min | Two teams; highest eliminations wins |
| Mystical Chest | 5 min | First player to find the chest wins |
| Giant | Variable | Deal the most damage to the Giant |
| Parkour | Variable | First 3 players to complete win |

### Contracts

Players can accept assassination contracts targeting other players for a gold reward. Targets are unaware they have been marked. Contracts can be rerolled with gold if the assigned target is unfavorable.

**PvP Rating:** +3 per kill, –1 per death. Rating determines matchmaking and ranking visibility.

---

## Premium Store (Monetization)

The store is designed around **power-adjacent convenience items** — players can progress faster but not bypass core mechanics.

| Category | Items |
|----------|-------|
| **Boosters** (1.5–2× multipliers) | Damage, gold, XP, mob damage, speed |
| **Retention Items** | Philosopher's Stone (keep 2 items through rebirth), Luck Potion (+15% rare item, 30 min), Event Forecast (preview next 3 events) |
| **Convenience** | Infinite Backpack, Autoclicker, Mannequin (6-hr offline farm at 30% rates) |
| **Cosmetic/Utility** | Illusion (2 decoy copies, 25 sec / 2 min cooldown), Personal Boss Room, Magic Torch (spawn random event) |

> **Monetization Philosophy:** No item in the store provides a stat that cannot be reached through play. The store compresses time, not gates content.

---

## Design Pillars

1. **Identity Through Rank** — The 19-tier progression ladder gives players a clear external signal of investment and achievement, reinforcing the IP's themes of rising from the bottom.
2. **Build Ownership** — Full stat redistribution on rebirth means each new rank is also a new build opportunity.
3. **Layered Engagement** — Daily quests, live events, contracts, and PvP rating give players multiple concurrent goals rather than a single grind track.
4. **Ethical Monetization** — The store accelerates progression without removing the satisfaction of earning rank through play.
