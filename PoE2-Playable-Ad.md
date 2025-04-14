# PoE2 - Playable Ad

**Personal Project - Playable Ads**  
This project is a game design document for a playable advertisement based on the game *Path of Exile 2*. Created for experience and exploration of a new field.

## Basic Concept
The advertisement will be a roguelike-style game, where the main goal is to defeat monsters in a graveyard-themed map and level up the character before the ad ends.

- **Type:** Interactive Playable Ad  
- **Advertised Game:** *Path of Exile 2*  
- **Platform:** Mobile  
- **Duration:** 25–35 seconds  

---

## Objectives

- High click-through rate to the game page  
- Engage potential players  
- High game download rate  
- Clear gameplay understanding  

---

## Structure

- **Approximate total ad time:** 60–90 seconds

### Gameplay Steps

| Phase | Estimated Time | Description |
|-------|----------------|-------------|
| Character Selection | 5–7 sec | Player chooses from 3 character portraits |
| First Wave of Monsters | 10 sec | Player exits the gate and kills first monster wave |
| Sell Loot & Upgrade Weapon | 7–10 sec | Player sells loot and buys first weapon upgrade |
| Second Wave of Monsters | 10–12 sec | New monsters appear, player defeats them |
| Sell Loot & Upgrade to Level 2 | 7–10 sec | Player sells loot and upgrades weapon again |
| Third Wave & Mini-Bosses | 12–15 sec | Another monster wave including mini-bosses |
| Final Weapon Upgrade | 7–10 sec | Final upgrade of the player's weapon |
| Boss Fight & Game Page | 10–12 sec | Kill boss → Portal appears → Ad redirects to game page |

---

## Characters

### Warrior
- **Weapon:** Longsword  
- **Normal Attack:** Sword swing kills enemies in front  
- **Ability:** Shockwave on ability use

### Sorcerer
- **Weapon:** Staff  
- **Normal Attack:** Chain lightning through 4 enemies  
- **Ability:** Expanding and contracting lightning ring

### Ranger
- **Weapon:** Longbow  
- **Normal Attack:** Fires arrows forward  
- **Ability:** Fires 4 arrows instead of one

---

## UI Interaction

**Character Selection Interface:**
- Top: Character name  
- Center: Character portrait  
- Bottom: Character ability  
- Below: "Play as <<Character>>" button

---

## Map & Environment

After character selection, the player spawns in a graveyard surrounded by stone fences and objects.

### Graveyard
Basic layout showing monster spawns and player area.

### Merchant’s Shop
- Animated stall  
- "Sell" cube: walking the character there sells all loot  
- Gold animation plays

### Blacksmith’s Shop
- Animated stall with an "Upgrade" cube  
- Standing inside upgrades weapon if player has enough gold  
- Upgrade cost increases, ends with "Max" label

---

## Monsters

| Name | Type | Spawn Rate | Max Count | Behavior | Health | Look | Loot |
|------|------|------------|-----------|----------|--------|------|------|
| **Reanimated Skeleton** | Melee | every 0.25s | 20 | Crawls toward player, hits with hand | 1 hit | Half-body skeleton with glowing eyes | 1–3 Bones |
| **Bloody Imp** | Ranged | every 0.55s | 15 | Fires weak fireballs, slowly approaches | 1 hit | Small demon, jumpy movement | 1–2 Demon Horns |
| **Fallen Paladin** | Melee | every 1.1s | 8 | Moves toward player, dark glow, attacks with hammer | 4 hits or 2 abilities | Heavy armor, dark rays, big black hammer | Rusty Sword |
| **Cursed Witch** | Ranged | every 1.25s | 8 | Shoots corruption balls, leaves puddles | 4 hits or 2 abilities | Long dress, leaking corruption, glowing eyes, dark staff | Staff |

> *Fallen Paladin and Cursed Witch appear after 1st weapon upgrade.*

---

## Controls

- **Left Side:** Virtual joystick controls movement  
- **Right Side:**  
  - Sword Icon: Normal attack (can be held down)  
  - Ability Icon: Casts ability with cooldown

---

## Mini-Boss

### Necromancer

- **Spawn Rate:** Every 10s  
- **Max Count:** 2  
- **Ability:** Revives each surrounding monster x2 every 5s  
- **Appears:** After 2nd weapon upgrade  
- **Health:** 8 hits or 4 abilities  
- **Look:** Floating hooded figure with large staff  
- **Loot:** Necromancer's Ears
---

## Additional Interface Details

### Character Portrait Example

When the character selection screen is open:

- **Top of Portrait:** Character's name
- **Middle of Portrait:** Visual representation of the character
- **Bottom of Portrait:** Short description of the character’s ability
- **Below Portrait:** Button labeled “Play as <<Character>>”

---

## Graveyard Area Description

The player spawns in a small, enclosed graveyard area surrounded by stone fences. Various decorative objects populate the space, enhancing immersion.

---

## Monster Behavior Summary

Monsters enter the graveyard area from off-screen and approach or attack the player in different ways depending on type:

- **Reanimated Skeletons:** Slow crawlers, basic melee attackers.
- **Bloody Imps:** Ranged attackers using fireballs.
- **Fallen Paladins:** Heavily armored, strong melee enemies with hammers.
- **Cursed Witches:** Corruption-based ranged attackers that leave hazardous puddles.
- **Necromancer Mini-Bosses:** Summon additional enemies periodically.

---

## Upgrade and Progression System

Players earn gold by defeating enemies and can spend it at two key locations:

1. **Merchant’s Shop:**
   - Sell collected loot automatically when entering the shop area.
   - Visuals show gold transferring to the player.

2. **Blacksmith’s Shop:**
   - Stand in the upgrade cube with enough gold to level up weapon.
   - Each upgrade increases power and cost.
   - Final upgrade changes "Upgrade" label to "Max".

---

## Final Encounter

After reaching the maximum upgrade level and defeating the third monster wave and mini-bosses, the player fights the **Boss**.

- Upon defeating the boss, a **portal** appears.
- When the player tries to enter, the game redirects to the **app store page** with a prompt:  
  **"Continue Playing – Game Page"**

---

## Notes

- Interface elements are optimized for mobile touch input.
- Players use a **virtual joystick** (bottom-left) to move.
- **Attack and Ability buttons** are located bottom-right.
- All actions feature appropriate visual and audio feedback to enhance engagement during the short ad runtime.

---

**Document Last Updated:** April 14, 2025  
**Author:** Erich Shnaidman