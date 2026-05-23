---
title: "Custom Hero Survival — Game Design Document"
description: "GDD for a Minecraft-based PvE/PvP hybrid featuring 19 hero classes, a wave-based combat system, probabilistic item combining, and a live betting duel system."
category: "game-design"
tags: ["Game Design", "PvE/PvP", "Systems Design", "Balance"]
date: "2023-07-15"
featured: false
order: 7
---

# Custom Hero Survival — Game Design Document

**Genre:** PvE Wave Survival with PvP Duel System  
**Platform:** Minecraft (Java Edition, custom server)  
**Mode:** 1–12 players (solo / team)  
**Session Length:** ~25–45 minutes per run

---

## Overview

Custom Hero Survival is a class-based wave defense game built on Minecraft. Players select a hero from 19 classes across four archetypes — Warriors, Archers, Tanks, and Summoners — then survive escalating monster waves while competing in mid-run PvP duels for gold and ranking.

The design centers on **meaningful class differentiation**: each hero has a unique stat baseline, growth curve, and two abilities, making team composition and individual item selection feel distinct between runs. A probabilistic item-combining system adds depth without requiring perfect information.

---

## Core Loop

```
Hero Selection → Wave Combat → Item Selection → Duel
        ↑                                          ↓
    Gold Spend ← ← ← ← ← ← ← ← ← ← ← ← ← ← Betting
```

Players receive **5 item selection opportunities** during a run (waves 1×2, 3, 6, 9), each offering 10 options. Items combine probabilistically — players can stack effects but must account for diminishing returns and caps.

---

## Hero Roster

### Archetypes & Classes

| Archetype | Classes |
|-----------|---------|
| **Warriors** | Ninja, Assassin, Troll, Predator, Legionnaire, Faceless |
| **Archers** | Wanderer, Zeus, Medusa |
| **Tanks** | Alchemist, Butcher, Spartan, Porcupine, Berserk |
| **Summoners** | Gargoyle, Zombie, Werewolf, Illusionist, Hunter |

### Stat System

Each hero has four base stats and unique per-level growth rates, creating different power curves across a run.

| Stat | Per Point | Cap |
|------|-----------|-----|
| **Damage** | +0.5% | — |
| **Speed** | +1.0% | — |
| **Health** | +5.0% | — |
| **Critical Damage** | +% (item) | 500% (×5) |
| **Evasion** | +% (item) | 10% |
| **Vampirism** | +% (item) | 30% |

> **Design Note:** Caps on secondary stats prevent degenerate one-stat builds while keeping those stats meaningful investments. Warriors and Assassins can realistically reach the crit cap; Tanks typically max evasion instead.

---

## Item System

### Item Combining Formula

When two items with the same effect are stacked, diminishing returns apply using a combining formula:

```
Combined% = 1 - (1 - A) × (1 - B) × ... × (1 - N)
```

**Example:** 30% crit + 30% crit = `1 - (0.7 × 0.7)` = **51% crit**, not 60%.

This formula naturally disincentivizes stacking identical effects while keeping multi-item builds viable — players are rewarded for diversifying item selections.

### Sword Abilities

| Ability | Effect |
|---------|--------|
| Critical Strike | +30% chance for 225% damage hit |
| Cleave | +70% damage to all enemies within 3 blocks |
| Lifesteal | +24% HP recovery on hit |
| Colossus | +5.75% damage based on max health |
| Venom | +25% chance to apply Poison II (5 sec) |
| Thunder | +30% chance for 12-damage AoE lightning (3-block radius) |

### Bow & Armor Abilities

| Type | Ability | Effect |
|------|---------|--------|
| Bow | Multishot | Fires additional arrows per shot |
| Bow | Curse | Applies stacking debuff on target |
| Bow | Thunderer | Triggers lightning on hit |
| Armor | Evasion | % chance to dodge incoming hit |
| Armor | Thorns | Returns a portion of damage to attacker |

---

## Wave Design

### Enemy Wave Types

Each wave type introduces a thematic enemy set with distinct behaviors, forcing players to adapt positioning and item priorities mid-run.

| Wave | Notable Enemies | Primary Threat |
|------|----------------|----------------|
| **Summoners** | Witches (Shockwave, Dispel), Villagers | Ability disruption |
| **Frozen** | Liches (frost fields), Skeleton Archers (frost arrows) | Area denial |
| **Thunderers** | Ranged-only, AoE lightning every 4.5 sec | Spread pressure |
| **Trolls** | Mage Trolls (web traps), Warrior Trolls | Mobility control |
| **Centaurs** | Mounted ranged/melee, Stomp AoE | High burst damage |
| **Wolves** | Alpha (injury debuff), Pack (160% damage proc) | Sustain drain |
| **Blazes** | Fireball barrage | Ranged poke |

### Boss Scaling

Boss health and damage scale linearly with player count:

```
Boss HP = Base_HP × playerCount
```

This keeps challenge consistent across solo, duo, and full-lobby runs without requiring separate tuning passes.

### Empowerment Mechanic

If a wave persists beyond **60 seconds**, surviving enemies begin gaining stacking buffs (attack speed, move speed, damage) every 10 seconds. At the **3-minute mark**, all remaining players are eliminated — creating consistent time pressure without hard countdown timers visible to the player.

---

## Duel System

Duels fire between waves based on how many players remain alive:

| Alive % | Frequency |
|---------|-----------|
| 61–100% | Every round |
| ≤60% | Every other round |

**Duration:** 60 seconds. Tiebreaker resolution order (if no elimination):

1. Survivor → 2. Health % → 3. Max health → 4. Damage dealt → 5. Duel win ratio → 6. Item value → 7. Random

### Betting System

Players may wager up to 50% of their gold on any duel:

```
Payout multiplier = max(2.05, totalBets / winnerBets)
```

The 2.05 floor guarantees a minimum return on correct predictions, while the formula rewards backing underdog picks. This creates a persistent social and economic meta-layer on top of the combat loop.

### Curse Mechanic (Endgame)

When only 3 players remain in a team game, each receives a Curse charge:

- **–15% outgoing damage** per charge
- **+15% incoming damage** per charge

Curses stack on further eliminations, creating a rubber-band mechanic that keeps trailing teams competitive through the final waves.

---

## Shop & Economy

**Wave Completion Reward:**

```
Reward = 300 + ((wave - 1) × (10 + wave / 10))
```

**Shop Rules:**
- Weapons upgrade through tiers: Iron → Diamond → Enchanted
- Items sell for 50% value; **100% refund** within 30 seconds of purchase
- Consumables (Golden Apples, stat potions) available each round
- Favorites system lets players pin preferred items for fast repurchase

---

## Respawn System

On death: **5-second ghost phase** → respawn with a 15-second protection window:

- **Incoming damage:** –60%
- **Outgoing damage:** +100%

The asymmetry rewards aggressive respawns while preventing spawn-camping, and incentivizes immediate re-engagement with the wave.

---

## UI & Menus

**Hotbar Layout:**

| Slot | Content |
|------|---------|
| 1 | Base stats (damage, health, regen growth) |
| 2 | Level + XP bar |
| 3 | Current health + regen rate |
| 4 | Damage / armor / speed |
| 5–7 | Shard ability slots (hero-specific) |

**Menus:** Profile · Top Players · Achievements · Settings

---

## Design Pillars

1. **Class Identity** — 19 heroes feel distinct through stat curves and ability kits, not just aesthetic differences.
2. **Informed Risk** — The combining formula and betting system reward players who understand the math.
3. **Escalating Pressure** — Empowerment timers and the Curse mechanic ensure tension escalates naturally toward run completion.
4. **Accessible Depth** — Core mechanics are immediately legible; optimization layers reveal themselves over multiple sessions.
