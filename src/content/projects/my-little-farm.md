---
title: "MyLittleFarm — Mobile Farming Simulator"
description: "Game design document for a mobile idle/active hybrid farming simulator featuring layered economies, dynamic event systems, seasonal content, and deep production chains."
category: "game-design"
tags: ["Game Design", "Mobile", "Systems Design", "Economy"]
date: "2023-08-01"
featured: true
order: 6
---

# MyLittleFarm — Game Design Document

**Genre:** Idle / Active Hybrid Farming Simulator  
**Platform:** Mobile (iOS / Android)  
**Target Audience:** Casual–mid-core players, ages 16–35  
**Monetization:** Free-to-play with optional cosmetic and convenience purchases

---

## Overview

MyLittleFarm is a mobile farming simulator that balances passive idle income with engaging active tasks. Players manage a farm across three sub-locations, progressing through skill trees, production chains, and a dynamic event system. The game rewards both short sessions (task-based income) and long-term planning (resource investment, seasonal events).

The core design challenge is maintaining engagement across two distinct play modes without making either feel mandatory — idle players should feel they're progressing, and active players should feel their effort is meaningfully rewarded.

---

## Core Loop

```
Passive Income (crops, animals)
        ↓
Active Tasks (mining, fishing, lumberjacking, hauling)
        ↓
Resource Processing (smelting, crafting, production buildings)
        ↓
Farm Expansion (NPC purchases, warehouse upgrades)
        ↓
Quest Progression → Story Advancement
```

---

## Economy

### Currency Layers

The economy uses three distinct value stores to prevent inflation and create meaningful trade-offs:

| Layer | Source | Primary Use |
|-------|--------|-------------|
| **Gold** | Crops, animals, task completion | NPC purchases, upgrades, market |
| **Resources** | Active tasks (ore, wood, fish) | Crafting, production buildings |
| **Premium Currency** | Optional IAP | Convenience items, cosmetics, boosters |

### Production Buildings

Processing raw materials into finished goods is the primary mid-game loop. Buildings accept ingredients from multiple sources, creating interdependencies between the farming and gathering systems.

| Building | Input → Output (Example) |
|----------|--------------------------|
| Bakery | Wheat + Butter → Bread, Croissant, Cake |
| Bar | Hops + Water → Beer; Berries → Wine |
| Café | Coffee Beans + Milk → Latte; Sugar + Eggs → Desserts |
| Factory | Ore Ingots + Wood → Furniture, Tools |
| Sewing Workshop | Cotton + Fabric → Clothing, Decor |
| Flower Shop | Seeds + Soil → Bouquets, Arrangements |

> **Design Note:** Complex recipes like *Romantic Dinner* (Wine + Rose Bouquet + French Pork) require outputs from multiple buildings, creating natural bottlenecks that encourage players to diversify their farm.

### Jewelry Crafting & Gifting

Ore ingots (smelted from 10 ore + coal, ~1 min) can be crafted into jewelry. Gifting jewelry to NPCs provides stat buffs with **diminishing returns** modeled by a geometric progression:

```
Total Buff = b₁ × (1 - qⁿ) / (1 - q)
where b₁ = base buff (1%), q = diminishing factor (0.8)
```

This design prevents players from trivially stacking buffs by making each subsequent gift less valuable, while still rewarding sustained investment.

---

## Active Task System

Five distinct task types provide active income and are the primary source of raw materials. Each has its own skill tree (max level 50), with tool upgrades unlocking at checkpoints.

### Skill Progression

| Checkpoint | Unlock |
|------------|--------|
| Level 10 | Tool Tier 2 (Upgrade time: 20 min) |
| Level 20 | Tool Tier 3 (Upgrade time: 40 min) |
| Level 30 | Tool Tier 4 (Upgrade time: 60 min) |
| Level 40 | Tool Tier 5 (Upgrade time: 90 min) |
| Level 50 | Mastery rewards |

### Task Breakdown

**Grass Breaking** — Entry-level task; simple interaction, fast gold income for new players.

**Cargo Hauling** — Reward scales with distance carried and cargo weight. Encourages players to optimize routes between farm locations.

**Lumberjacking** — Tree types unlock progressively (oak → pine → exotic). Higher-tier trees yield rarer crafting materials.

**Mining** — Ore nodes produce raw ore; smelting converts 10 ore + coal → 1 ingot in ~1 minute. Ingots feed the jewelry and factory production chains.

**Fishing** — Features a weight modifier system and a reeling mini-game. Larger fish require more precise timing; catch weight determines market value.

### Fatigue System

Active tasks are soft-capped by a fatigue mechanic to prevent burnout farming and preserve game balance:

| Fatigue Level | Effect |
|---------------|--------|
| 0–240 | No penalty |
| 240–320 | Reduced yield (–15%) |
| 320–400 | Reduced yield (–30%) |
| 400+ | Escalating penalties; rest required |

---

## Progression & Storage

**Warehouse Upgrades**

| Level | Capacity |
|-------|----------|
| 1 | 25 products |
| 2 | 50 products |
| 3 | 100 products |
| 4 | 150 products |
| 5 | 200 products |

**Daily Login Rewards:** 7-day cycle with escalating bonuses. Day 7 delivers a premium reward, resetting the cycle.

**Potion Brewing:** Ingredients drop from active tasks (0.5–5% chance). Seven potion types provide targeted buffs; only one may be active at a time (no stacking).

| Potion | Effect |
|--------|--------|
| Cleanliness | Reduces Dirty debuff by 40% |
| Fertility | +1.5× crop production |
| Endurance | Reduces fatigue accumulation |
| Fortune | +20% task gold yield |
| Focus | Extends active task window |
| Vitality | Accelerates stamina recovery |
| Clarity | Reduces event penalty duration |

---

## Dynamic Event System

The event system — comprising **18+ events** — is the primary mechanism for disrupting routine and creating memorable sessions. Events trigger based on temperature, season, and player activity, and many have counter-mechanics requiring active player response.

### Event Categories

**Environmental Events** (temperature/weather-triggered)

| Event | Trigger | Effect | Resolution |
|-------|---------|--------|------------|
| Drought | High temp + no rain | –40% crop yield | Irrigate or wait for rain |
| Flood | Heavy rain | Destroys low-lying crops | Drainage upgrade |
| Blizzard | Winter + high wind | Blocks outdoor tasks | Wait or use Indoor tasks |
| Heat Wave | Summer temp spike | Accelerates fatigue | Shade structures |

**Status Events** (player condition)

| Event | Counter-Event | Resolution |
|-------|---------------|------------|
| Dirty | Shower | Visit shower NPC |
| Drowning | Dirty (cancels) | Return to shore |
| Flu | Claustrophobia | Rest indoors |
| Hunger Strike | Bustle (cancels) | Eat from inventory |

**Special Events**

| Event | Cooldown | Details |
|-------|----------|---------|
| Taxation | 30 days | Flat gold deduction; can be reduced by upgrading farm infrastructure |
| Nightmares | Halloween only | Debuffs stack overnight; resolved at dawn |
| NPC Visit | Random | Positive buffs; enables rare dialogue and gift opportunities |

### Holiday Events (8+)

| Holiday | Key Mechanic |
|---------|-------------|
| New Year | Gift exchange; Christmas hats with unique stat effects; ornament decorator NPC |
| Maslenitsa | Seasonal pancake sale at premium prices |
| May Day Fishing | Leaderboard-based fishing competition |
| Lumberjack Day | Tiered challenge; top tier extends active buffs by 60% |
| Farm Day | All candles lit → negative events disabled; +0.05× booster per 10 candles (max 100) |

---

## Weather & Environment Systems

The weather engine runs continuously and affects task availability, crop yields, and event probability.

**Temperature Range:** –30°C to +30°C  
**Wind Range:** 0–20 m/s with directional modifiers (headwind penalty, tailwind bonus for hauling)

Weather feeds into the event probability system — for example, extended heat increases Drought likelihood, while rapid temperature drops in autumn can trigger early Blizzard events.

---

## UI Systems

**Phone/Diary Interface:** Players receive NPC contacts via a simulated phone UI. The diary logs quest progress, event history, and NPC relationships — replacing a traditional menu with a more immersive narrative framing.

**Calendar:** Tracks in-game days, active seasons, upcoming holidays, and scheduled events. Players can plan production cycles around known events.

---

## Design Pillars

1. **Layered Engagement** — Idle players and active players both progress meaningfully; neither mode is dominant.
2. **Reactive Economy** — Events, weather, and seasonal content prevent the economy from becoming static.
3. **Depth Without Complexity** — Production chains and event counters reward attention without requiring optimization.
4. **Session Flexibility** — The fatigue system naturally creates session endpoints, supporting mobile play patterns.
