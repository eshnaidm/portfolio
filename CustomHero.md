# Custom hero Survival Game Design Document

> Originally written in Russian, translated by Erik

## Development Rules / Foundation of the game

- Monsters should never run away from the player; they relentlessly pursue the player in all situations (exceptions may include some player abilities and items that force monsters to flee).
- All maps (arenas, duels, waiting rooms) must always be square.

## Interface
### Menu
Players will have a separate menu with various settings and information display. 

Any changes in settings are saved permanently and must be stored in the database.

**Sections**
- Profile - view personal statistics for the mode.
- Controls - bind configuration.
- Top Players - the best players in the mode, ranking.
- Settings - enable/disable chat, sounds, etc.
- Achievements

### Hotbar
**Character**

Your character's name, a brief description, and display of basic level-up characteristics:
- Damage Increase
- Health Increase
- Regeneration Increase

Display information *approximately* in the following format:

>Ninja
>
>A mysterious warrior, stealthy and fast as a shadow, skilled in the art of ninjutsu.
>
>Basic character attributes:
>
> - Damage Increase 0.6 +12.2
>
> - Health Increase 0.5 +15
>
> - Regeneration Increase 0.1 +2.3

**Level and Experience**

Current player level and the amount of experience needed for the next level; hovering displays this information in numbers:

>Level: 1
>
>Experience: 100/250

**Health and Regeneration**

Regeneration speed is always standard, seemingly 4 seconds; 

it changes depending on the level of the Regeneration effect, which needs to be considered when displaying information.

>Health: 10/52
>
>Regeneration: +0.2
>
>Regeneration Speed: 0.5 seconds

**Attributes**

Three attributes are displayed in the interface:

- Damage - your damage from a bow/sword/axe or bare hands, changes depending on what the player is holding.

- Armor - replaces the display of the standard armor indicator in Minecraft, with a maximum value of 20.

- Speed - the maximum speed can be 500 (0.5) + changes to this indicator from the speed and slowness effects.

When hovering over this interface, the player sees a description of each attribute and what it means, the current values of the player are reiterated, all icons are displayed, and descriptions of additional attributes that are not shown in the main interface are also visible.

Attributes that will be displayed in the description when hovering over the interface:

>- Damage - your damage from a bow/sword/axe or bare hands, changes depending on what the player is holding.
>
>- Armor - replaces the display of the standard armor indicator in Minecraft, with a maximum value of 20.
>
>- Speed - the maximum speed can be 500 (0.5) + changes to this indicator from the speed and slowness effects.
>
>- Resistance to Effects - the percentage reduction in the duration of applied negative effects on your character.
>
>- Damage Resistance - displays the percentage of damage blocked; this indicator can change with the Damage Resistance effect and be determined by items/characteristics of the character.
>
>- Evasion - can be 100% (in practice, due to the formula, the maximum value can be 99%).

**Shard**

Information about the presence of a shard is displayed in the bottom right corner. 

When hovering over it, information about what it gives to the player (description and name of the ability, etc.) is displayed.

## Description of Abilities

- Each passive or active ability has its unique name and detailed description. 
- All abilities are given to the player in the inventory as items with descriptions. 
- Active abilities activate when used. Passive abilities exist solely for players to understand what the character does and for easy access to necessary information.

## Game Modes
Three game modes must be implemented, each with differences primarily related to the size of the game maps, dueling stakes, and gold rewards. Details for each mode are outlined below.

>All specifications in the design document are written for the single-player variant, with exceptions mentioned in the sections below.

- Solo Mode - 1x12

In this mode, there are a total of 12 players, each forming their own team and playing individually.

- Duo Mode - 2x6

In this mode, there are a total of 12 players, forming 6 teams with 2 players in each.

- Team Mode - 6x2

This mode features 12 players, organized into 2 teams with 6 players each.

### Differences:
In Team Mode, each player has a reserve of 6 lives.

- During 6 vs 6 duels, each player from the losing team loses a life. If a player has no lives left, they receive a curse.

  If a 1 vs 1 duel concludes, players return to battling monsters if the team hasn't finished the wave.

  There are no stakes in this mode; players receive dividends if their ally wins a duel or if the team wins a duel.

The algorithm for initiating duels differs from other formats. 1 vs 1 duels start from the second wave, while 6 vs 6 duels occur every 6 waves (i.e., on waves 6, 12, 18, etc.).

## Character

Each character has an ability, either active or passive, as well as an improvement with a shard. 

A shard can enhance existing abilities, passives, or add new ones. Characters will be continually added, and their complexity can vary significantly. 

Therefore, the abstraction must be very flexible and well-thought-out in advance for all possible scenarios.

All characters can be categorized, and depending on the category, players may be offered different guaranteed items. This refers to only one guaranteed item in each selection of 11.

### Categories:

>- Warrior (melee) - guaranteed weapons will always be stone, iron, or diamond swords and axes.
>
>- Marksman (ranged) - guaranteed weapon will always be a bow.
>
>- Tank (high health/regeneration) - guaranteed armor will always be chainmail, iron, or diamond.
>
>- Summoner (summoned creatures) - no changes in the randomization of guaranteed items.

### Character Selection:
Before the game starts, each player must choose their character, and this menu cannot be closed until the role is selected. 

A green checkmark denotes the guaranteed role, which remains unchanged during rerolls. The number of rerolls depends on the privilege.

### 1. Ninja (Warrior)

**Description**

A mysterious warrior, stealthy and swift as a shadow, skilled in the art of ninjutsu.

**Characteristics**

| Characteristic | Value |
| :----------:   | :---- |
| Damage | 1.05 |
| Maximum Health | 19 |
| Speed | 200 |
| Regeneration | 0.83 |

**Attributes**
| Attribute | Growth |
| :----------:   | :---- |
| Damage Growth | 0.05 |
| Health Growth | 1.64 |
| Regeneration Growth | 0.06 |

### Standart ability
**Blade Dance [Passive]**

**Ability Description**

Type: Passive

In melee combat, gives the character a chance to deal critical damage with attacks.

Critical Hit Chance: 20%

Critical Damage: 180%

### Shard
**Healing Totem [Ability]**

**Ability Description**
Type: Usable

Summons a totem that heals all allies within its range.

- Max Health per Second: 5%
- Range: 4 blocks
- Hits to Destroy: 8
- Duration: 25 seconds
- Cooldown: 60 seconds

When the ability is used near the owner, a "Healing Totem" appears.

When the ability is used near a player, a "Healing Totem" appears that follows the player and heals the owner/allies within its range. 

The totem can be damaged by enemies, but its destruction is based on the number of hits, not the amount of damage. 

Restores 5% of the player's maximum health every second. Invulnerable to area-of-effect attacks, projectiles, effects, and similar.

| Characteristic | Value |
| :----------:   | :---- |
| Range | 4 blocks |
| Tracking Range | 3.5 blocks |
| Cooldown | 60 seconds |
| Hits to Destroy | 8 hits |
| Active for | 25 seconds |
| Health per Second | 5% |

### 2. Assassin (Warrior)

**Description**
A cold-blooded killer, masterfully wielding weapons. His goal is to complete the mission at any cost and return to the shadows.

**Characteristics**

| Characteristic | Value |
| :----------:   | :---- |
| Damage | 1.05 |
| Maximum Health | 18 |
| Speed | 203 |
| Regeneration | 0.96 |

**Attributes**
| Attribute | Growth |
| :----------:   | :---- |
| Damage Growth | 0.06 |
| Health Growth | 1.49 |
| Regeneration Growth | 0.06 |

### Standart Ability
**Blur [Passive]**

**Ability Description**

Type: Passive

The character focuses on oneself, enabling evasion from attacks.

Combines with other sources of evasion following the law of diminishing returns.

Evasion: 24%

>Any evasion mechanics work against arrows, strikes, explosions, applied effects, and similar, 
>
>so it's essential to ensure that it activates in all situations where the character might be harmed.

**Mercy Strike [Passive]**

**Ability Description**

Type: Passive

The character hones their combat skills, gaining a chance to deliver a devastating critical attack to the enemy.

- Critical Hit Chance: 15%

- Critical Damage: 350%

### Shard
**Choking Dagger [Ability]**

**Ability Description**

Type: Usable on swords

The character throws any sword with the right mouse button, slowing down the enemy's movement speed and applying effects and abilities as in melee combat.

- Slowness: Level 2

- Duration of Slowness: 2 seconds

When the right mouse button is pressed on any sword in the inventory, it is thrown in the direction the player is facing. 

Upon hitting, all passive abilities of the flying sword may activate, including the application of effects, critical damage, and the like. 

The damage will be the same as if the player had attacked with that sword.

### 3. Troll (Warrior)

**Description**
His Animal Wrath can annihilate everything in its path; he is unpredictable, and finding common ground with him is challenging.

**Characteristics**

| Characteristic | Value |
| :----------:   | :---- |
| Damage | 1.03 |
| Maximum Health | 19 |
| Speed | 193 |
| Regeneration | 0.79 |

**Attributes**
| Attribute | Growth |
| :----------:   | :---- |
| Damage Growth | 0.06 |
| Health Growth | 1.87 |
| Regeneration Growth | 0.07 |

### Standart ability
**Battle Trance [Passive]**

**Ability Description**

Type: Passive

The character enters a battle trance, granting them vampirism and resistance to effects.

- Vampirism: 8%
- Effect Resistance: 25%

### Shard
**Whirling Axes [Ability]**

**Ability Description**

Type: Usable on axes

The character can use any axe with the right mouse button to start spinning two axes in a small area around them, applying effects and abilities as in melee combat.

- Radius: 1.5 blocks

- Rotation Duration: 3 seconds

- Cooldown: 9 seconds

- When the right mouse button is pressed on any axe in the inventory, they begin to spin around the player, applying the same abilities that would occur if the player attacked with their hand. 

- During the ability, the axe is taken from the inventory. 

- If the ability is active, and the cooldown has already ended, upon activation, the previous ability is reset, the axe returns to the inventory, and the ability is activated again, this time with a different axe.

### 4. Predator (Warrior)

**Description**
A nimble and ruthless hunter, skilled in tracking and annihilating its prey with maximum efficiency.

**Characteristics**

| Characteristic | Value |
| :----------:   | :---- |
| Damage | 1.15 |
| Maximum Health | 22 |
| Speed | 200 |
| Regeneration | 0.9 |

**Attributes**
| Attribute | Growth |
| :----------:   | :---- |
| Damage Growth | 0.05 |
| Health Growth | 2.02 |
| Regeneration Growth | 0.08 |

### Standart ability
**Thirst [Passive]**

**Ability Description**

Type: Passive

The character revels in the wounds of enemies when the health of any enemy character drops below 60%.

Bonuses from different enemies stack.

- Additional damage per character: 1
- Speed per character: 1 level

### Shard
**Bloody Ritual [Ability]**

**Ability Description**

Type: Active

The hero sprinkles a selected area with holy blood. After 3 seconds, the ritual is completed, dealing damage to enemies and slowing them down.

- Action Radius: 6 blocks
- Slowness: 2 levels
- Duration of Slowness: 4 seconds

### 5. Legionnaire (Warrior)

**Description**
Disciplined and courageous, the legionnaire is a powerful warrior with a robust physique. He possesses weaponry, tactical skills, and endurance for prolonged battles.

**Characteristics**

| Characteristic | Value |
| :----------:   | :---- |
| Damage | 1.15 |
| Maximum Health | 22 |
| Speed | 220 |
| Regeneration | 0.93 |

**Attributes**
| Attribute | Growth |
| :----------:   | :---- |
| Damage Growth | 0.03 |
| Health Growth | 2.32 |
| Regeneration Growth | 0.09 |

### Standart ability
**Moment of Valor [Passive]**

**Ability Description**

Type: Passive

Can instantly respond to enemy attacks with a counterattack, accompanied by additional vampirism.

- Counterattack Chance: 25%
- Vampirism: 55%

- When taking damage with a 25% chance, a counterattack may occur. 

- The attacking hero will be struck by the player as if they were hit, and in this same strike, vampirism of 55% will take effect.

### Shard

**Duel [Passive]**

**Ability Description**

Type: Passive

Every attacked enemy character engages in a duel. If one of the attacked characters dies in battle, the winner gains a permanent damage bonus.

- Additional Damage: 3

For each killed player, the owner receives an additional 3 permanent damage until the end of the game. 

If they lose the battle, the player who defeated them receives this damage bonus. 

The duel begins only when the ability owner strikes someone (works as an anti-kill in PvP).

## 6. Wanderer (Archer)

**Description:** A wandering traveler whose experience and knowledge can help him survive in any situation.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 1     |
| Max Health             | 16    |
| Movement Speed         | 200   |
| Regeneration           | 0.63  |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.05   |
| Health Growth          | 1.42   |
| Regeneration Growth     | 0.05   |

### Abilities

- **Frost Arrows (Passive)**  
  **Type:** Passive  
  Adds a slowing effect to the character's attacks.

  - Slow Level: 1
  - Slow Duration: 1.5 sec

- **Multishot**  
  **Type:** Usable on Bows  
  Using LMB on any bow, the character fires a volley of arrows one after another.

  - Number of Waves: 3
  - Arrows per Wave: 4
  - Slow Level: 3
  - Slow Duration: 5 sec

## 7. Zeus (Archer)

**Description:** A powerful Greek god, ruler of the sky and thunder, who possesses immense strength and wisdom.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 123   |
| Max Health             | 123   |
| Movement Speed         | 123   |
| Regeneration           | 123   |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 123    |
| Health Growth          | 123    |
| Regeneration Growth     | 123    |

---

## 8. Medusa (Archer)

**Description:** A fierce gorgon with snake-like hair, cursed by the gods and a symbol of danger and horror.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 0.9   |
| Max Health             | 16    |
| Movement Speed         | 183   |
| Regeneration           | 0.57  |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.06   |
| Health Growth          | 1.12   |
| Regeneration Growth     | 0.04   |

### Abilities

- **Shield (Passive)**  
  **Type:** Passive  
  Creates a shield that absorbs 35% of incoming damage.  

  - Absorbed Damage: 35%

- **Split Shot (Passive)**  
  **Type:** Passive  
  The character magically splits their arrows, which find their targets but deal less damage.  

  - Damage: 75%
  - Additional Targets: 4  

  When shooting from the bow, 4 additional arrows fly out, automatically targeting enemies in the vicinity. Any damage from arrows is reduced by 25%, including the arrow fired by the player. Additional arrows apply the same effects as a regular arrow hit.

## 9. Alchemist (Tank)

**Description:** Possesses deep knowledge of alchemy and masterfully applies it to achieve his goals.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 1.01  |
| Max Health             | 21    |
| Movement Speed         | 196   |
| Regeneration           | 0.83  |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.02   |
| Health Growth          | 2.02   |
| Regeneration Growth     | 0.08   |

### Abilities

- **Greed (Passive)**  
  **Type:** Passive  
  Allows the synthesis of more gold from enemy creatures and characters.  

  - Additional Gold: 20%

- **Chemical Rage (Ability)**  
  **Type:** Usable  
  A special chemical mixture enrages the character, increasing health and providing regeneration.  

  - Additional Health: 10  
  - Regeneration: 1 Level  
  - Duration: 30 sec  
  - Cooldown: 60 sec  

- **Unstable Mixture (Passive)**  
  **Type:** Passive  
  Increases the level of all consumed and thrown potions by one, doubling their duration.

## 10. Butcher (Tank)

**Description:** A ruthless killer who kills for pleasure. He possesses strength and endurance, as well as mastery over weapons.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 1.4   |
| Max Health             | 22    |
| Movement Speed         | 186   |
| Regeneration           | 1.4   |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.02   |
| Health Growth          | 2.24   |
| Regeneration Growth     | 0.09   |

### Abilities

- **Heap of Flesh (Passive)**  
  **Type:** Passive  
  Blocks a portion of any damage inflicted on the owner. The ability also grants an additional 4 health points for each nearby enemy character killed or slain.

  - Damage Resistance: 5%  
  - Radius: 4.5 blocks  

  For each nearby enemy player killed or slain, the owner receives 2 additional hearts (4 health points) until the end of the game.

- **Meat Hook (Ability)**  
  **Type:** Usable on Fishing Rods  
  A hook from any fishing rod hitting an enemy character pulls them towards the owner of the ability and deals pure damage, while creatures that are not bosses die immediately.

  - Pure Damage: 4  
  - Cooldown: 12 sec  

  Upon hitting with a hook from any fishing rod (not awarded when receiving the ability), the player pulls the victim towards themselves and deals 4 pure damage, while non-boss monsters die instantly, regardless of health.

---

## 11. Spartan (Tank)

**Description:** A brave warrior trained in martial arts since childhood. He is ready to fight to the end and fears nothing in battle.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 1.01  |
| Max Health             | 21    |
| Movement Speed         | 206   |
| Regeneration           | 0.83  |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.03   |
| Health Growth          | 2.77   |
| Regeneration Growth     | 0.11   |

### Abilities

- **Bastion (Passive)**  
  **Type:** Passive  
  The character blocks a portion of physical damage from attacks coming from the front and sides.  

  - Damage Reduction from Front: 40%  
  - Damage Reduction from Sides: 20%  

  If the player is affected by damage reduction, a characteristic damage block sound is played, and a translucent shield is created in front of the player for 0.4 seconds, which is attached to the player's model.

- **God's Reproach (Ability)**  
  **Type:** Usable  
  The character strikes enemies in front with their shield, pushing them back and dealing critical damage from their attack.  

  - Critical Damage: 230%  
  - Distance: 4 blocks  
  - Slow Level: 2  
  - Slow Duration: 2.5 sec  

  The player strikes enemies in front, pushing them back and dealing 230% critical damage from their attack, applying Slow 2 for 2.5 seconds.

---

## 12. Porcupine (Tank)

**Description:** Sharp and agile, covered in spikes and capable of reflecting any attack.

### Characteristics

| Characteristic          | Value |
|------------------------|-------|
| Damage                 | 1.05  |
| Max Health             | 20    |
| Movement Speed         | 196   |
| Regeneration           | 1.06  |

### Attributes

| Attribute              | Growth |
|------------------------|--------|
| Damage Growth          | 0.03   |
| Health Growth          | 1.87   |
| Regeneration Growth     | 0.07   |

### Abilities

- **Back (Passive)**  
  **Type:** Passive  
  Reflects damage dealt by enemies back to them.  

  - Damage Reflection: 20%  

- **Perforation (Passive)**  
  **Type:** Passive  
  Increases the damage dealt by the character if enemies attack them.  

  - Damage Increase: 5%  
  - Duration: 3 sec  

  For each damage dealt, enemies receive 20% of the inflicted damage as reflected damage. This percentage can be increased through additional skills and effects.  

## 13. Berserk (Tank)

### Description
A mad and untamable warrior who enters battle with rage and cruelty, caring little for his own life.

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 | 1.09    |
| Maximum Health         | 22      |
| Movement Speed         | 210     |
| Regeneration           | 1.66    |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|
| Damage Increase          | 0.03       |
| Health Increase          | 2.09       |
| Regeneration Increase     | 0.08       |

### Standard Skills

#### Counter Spiral [Passive]

#### Ability Description
- **Type**: Passive
- The character has a chance to counterattack enemy attacks, dealing pure damage to all enemies around him.

- **Counterattack Chance**: 20%
- **Damage**: 2
- **Radius**: 1.5 blocks

Upon receiving damage, the player has a 20% chance to perform a counterattack, dealing 2 pure damage to all entities within a radius of 1.5 blocks around him.

#### Shard: Blade [Passive]

#### Ability Description
- **Type**: Passive
- If an enemy's health is below 15%, the ability owner sees a weak point on the target, making their axe attack a finishing blow. Upon killing with this ability, the character gains additional movement speed.

- **Speed**: Level 2
- **Speed Duration**: 6 sec

If an enemy player has less than 15% health, the axe strike will kill the enemy 100%, regardless of all effects and abilities they have (this mechanic pierces all defenses, even invincibility granted during revival). Works only on enemy players; upon killing with this ability, the owner receives Speed 2 for 6 seconds.

---

## 14. Gargoyle (Summoner)

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 |         |
| Maximum Health         |         |
| Movement Speed         |         |
| Regeneration           |         |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|

Every 5 seconds, the player generates one shield charge (up to a total of 3), increasing damage resistance by 8% for each charge. Upon taking damage, the player loses 1 shield charge. [Passive]

#### Ability: Summon 2 Bats

#### Ability Description
- **Type**: Ability
- Increases the number of bats by 2 and adds a 20% chance for them to stun their target.

#### Bat Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Entity                 | BAT     |
| Health                 | 8 units |
| Damage                 | 1.5 units|
| Duration               | 35 sec  |
| Cooldown               | 50 sec  |

---

## 15. Zombie (Summoner)

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 |         |
| Maximum Health         |         |
| Movement Speed         |         |
| Regeneration           |         |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|

The player instantly restores 1 health for each creature within a 5-block radius, with a 10-second cooldown. [Ability]

### Shard: Grave
- When used on a block, creates a tombstone that summons small zombies near victims. [Ability]

#### Tombstone Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Destruction Attacks     | 8       |
| Duration                | 30 sec  |
| Zombie Spawn Radius     | 6 blocks |
| Zombie Spawn Interval    | 3 sec   |
| Cooldown                | 75 sec  |

### Zombies

- Spawn next to their victim, slowing the target with their attacks. If the victim's health falls below a certain level, the zombie's attack and movement speed increase.

#### Zombie Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Entity                 | ZOMBIE (Baby) |
| Health                 | 1 unit  |
| Damage                 | 1 unit  |

---

## 16. Werewolf (Summoner)

### Description
Possesses sharp claws, strong jaws, and unparalleled endurance, allowing it to pursue its prey in the most challenging conditions.

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 |         |
| Maximum Health         |         |
| Movement Speed         |         |
| Regeneration           |         |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|

### Wild Impulse [Passive]

#### Ability Description
- **Type**: Passive
- Increases damage and health regeneration for the hero and all creatures under their control.

- **Additional Damage**: 20%
- **Health Regeneration**: 2

Increases damage by 20% and health regeneration for the player and all creatures under their control.

### Shard: Wolf Summon [Ability]

#### Ability Description
- **Type**: Passive
- Summons two wolves that will fight on the hero's side. The wolves have invisibility and a 20% chance to injure opponents with their attack.

- **Number of Wolves**: 2
- **Duration**: 50 sec
- **Wolf Damage**: 3
- **Wolf Health**: 15

Summons two wolves that possess invisibility (invisibility is disabled upon attack and reactivates after a few seconds of inactivity) and have a 20% chance to deal critical damage and apply Weakness 1 for 4 seconds.

#### Wolf Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Lifespan               | 50 sec  |
| Cooldown               | 30 sec  |
| Attack Interval        | 1.2 sec |
| Health                 | 15 units|
| Base Damage            | 3 damage|

---

## 17. Illusionist (Summoner)

### Description
A master of deception and the art of creating illusions, capable of altering reality and confusing enemies.

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 | 1.09    |
| Maximum Health         | 18      |
| Movement Speed         | 190     |
| Regeneration           | 1.3     |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|
| Damage Increase          | 0.05       |
| Health Increase          | 1.64       |
| Regeneration Increase     | 0.06       |

### Standard Skills

#### Double [Ability]

#### Ability Description
- **Type**: Usable
- The hero and all nearby illusions move to random points. Two illusions appear near the owner. Extends the lifespan of all illusions and dispels all negative effects on the hero.

- **Illusion Gathering Radius**: 6 blocks
- **Illusion Lifespan Increase**: 2 seconds

Upon activation, teleports to a random location within a radius of 6 blocks, clears all negative effects, and creates 2 illusions nearby. All other existing illusions also teleport to a random location near the player, increasing their lifespan by 2 seconds. Cooldown: 10 seconds.

### Phantom Dash [Passive]

#### Ability Description
- **Type**: Passive
- Upon attacking a target, the hero gains speed. The hero's illusions also possess this ability.

- **Speed**: Level 3
- **Speed Duration**: 2 seconds

Upon hitting an enemy, the hero gains Speed 3 for 2 seconds (illusions also inherit this speed effect, similar to item mechanics in inventory).

### Shard: Matching [Passive]

#### Ability Description
- **Type**: Passive
- With every attack, the hero can shatter their essence, creating an illusory copy of themselves. All hero illusions can also shatter.

- **Max Illusions**: 8
- **Hero Activation Chance**: 45%
- **Illusion Activation Chance**: 8%
- **Illusion Damage**: 22%
- **Damage to Illusions**: 650%

### Illusion Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Entity                 | ZOMBIE   |
| Maximum Illusions      | 8       |
| Hero Activation Chance  | 45%     |
| Illusion Activation Chance| 8%     |
| Illusion Damage        | 22%     |
| Damage to Illusions    | 650%    |

## 18. Hunter (Summoner)

### Characteristics

| Characteristic         | Value   |
|------------------------|---------|
| Damage                 |         |
| Maximum Health         |         |
| Movement Speed         |         |
| Regeneration           |         |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|

- **+16% damage to monsters** [Passive]
- **Summon Boar** [Ability]
- **Shard**: 0.9% chance to kill a monster with a hit (does not work on bosses) [Passive]

### Boar

#### Description
The player summons a helper boar. Its poisonous attacks inflict slowness, poisoning, and weakness on enemies. Each hit from the boar refreshes the duration of the inflicted effects.

#### Characteristics

| Characteristic         | Value       |
|------------------------|-------------|
| Entity                 | PIG         |
| Lifespan               | 60 seconds  |
| Cooldown               | 30 seconds  |
| Effects                | Poisoning 2, Slowness 2, Weakness 2 |
| Effect Duration        | 3 seconds   |
| Damage                 | 1 health    |

## 19. Faceless (Warrior)

### Description
A faceless warrior capable of manipulating time and space, able to temporarily stop it with a snap of his fingers.

### Characteristics

| Characteristic         | Value       |
|------------------------|-------------|
| Damage                 | 1.12        |
| Maximum Health         | 21          |
| Movement Speed         | 220         |
| Regeneration           | 0.95        |

### Attributes

| Attribute                | Increase   |
|--------------------------|------------|
| Damage Increase          | 0.06       |
| Health Increase          | 2.32       |
| Regeneration Increase     | 0.08       |

### Standard Skills

#### Time Stop [Passive]

#### Ability Description
- **Type**: Passive
- Can instantly stun an opponent for a short time and deal additional damage.

- **Stun Chance**: 18%
- **Additional Damage**: 10
- **Stun Duration**: 1 second

When attacking, the Faceless can instantly stun the opponent for a short time and deal additional damage.

### Chronosphere [Usable]

#### Ability Description
- **Type**: Usable
- Creates a sphere where time stops; all entities caught within the sphere are powerless against the Faceless.

- **Sphere Radius**: 6 blocks
- **Effect Duration**: 5 seconds
- **Cooldown**: 2 minutes

Once the Faceless activates the sphere, all entities inside cannot move or deal damage (effectively immobilized). The Faceless can move freely within the sphere and attack anyone he chooses.

### Fragment [Usable]

#### Ability Description
- **Type**: Usable
- Using this ability, the Faceless jumps 6 blocks forward, dealing damage to anyone in his path and restoring health based on damage received in the last 2 seconds.

- **Jump Distance**: 6 blocks
- **Damage**: 5 + 70% of melee damage
- **Health Restoration**: Based on damage received in the last 2 seconds
- **Cooldown**: 13 seconds

During the jump, the Faceless can restore all health lost in the last 2 seconds before using the ability. Anyone in the jump's trajectory (must be in a straight line, not an upward trajectory) receives the described damage.

# Items

## Item Selection
In the game, players will have the opportunity to select items a total of 5 times. At each selection, 10 items will be available, one of which is guaranteed (allowing players to collect a full set, including the entire armor set and sword).

- **Wave 1** - Item selection x2
- **Wave 3** - Item selection x1
- **Wave 6** - Item selection x1
- **Wave 9** - Item selection x1

## Unique Item Abilities
Item abilities cannot be purchased, dropped from monsters, or leveled up; they are only obtained through "Item Selection," where they are added with a small chance to the items. All abilities can be combined to create new unique combinations, which requires a priority system for abilities. Here’s a small example:

Suppose we have a critical damage effect on a sword and lifesteal; lifesteal restores health based on the damage dealt. To work correctly, critical damage should be applied first, followed by lifesteal to calculate the final damage. Therefore, the priorities of all abilities must be carefully planned to create the most interesting synergy.

## Sword Abilities
For further understanding, several terms will be described (it is very important to keep track of the terms in formulas, as they significantly affect the functionality of the item and yield completely different results if not specified correctly):

- **Incoming Damage**: The damage initially dealt, i.e., damage without considering resistance effects, armor, and the victim's enchantments.
- **Received Damage**: The final damage the victim takes after subtracting all resistances, armor, and enchantments.
- **Pure Damage**: The damage dealt directly, ignoring all types of protection; for example, if it states that the damage inflicts 10 health, the player/creature will lose exactly 10 health.
- **Health**: The current health of the player; for example, if a player has 16 health out of a maximum of 20, their health will be considered 16.
- **Maximum Health**: The maximum possible health of the player; for example, if a player has 16 health out of a maximum of 20, their maximum health will be considered 20.
- **Area Damage**: Damage inflicted on victims within a certain radius; usually, all effects/enchantments associated with the item are transferred to all targets attacked.

### Additional Information on Effects and Mechanics:
- **Poison and Withering Effects**: These slow down health regeneration by 60%, and lifesteal is reduced by 40%.
  
- **+10% Gold per Kill**: The gold earned for killing each creature (including players) with this sword is increased by 10%. This ability synergizes with area damage abilities.
  
  **Formula**: `received_gold_per_kill * 0.1 = additional_gold`
  
- **+30% Critical Damage Chance**: Each attack has a 30% chance to deal 225% damage.
  
  **Formula**: `incoming_damage * 2.25 = new_incoming_damage`
  
- **+70% Cleaving Damage**: Activates within a 3-block radius around the creature hit with this sword; all others receive damage equal to 70%. Cleaving damage has the lowest priority and is used after all damage changes, allowing it to transfer all enchantment effects from the sword: Fire Aspect, Knockback, etc.
  
  **Formula**: `incoming_damage_to_target * 0.7 = incoming_damage_to_entities_in_radius`
  
- **+24% Lifesteal**: Each attack restores 24% of the damage dealt to the owner. This ability has the lowest priority and should activate after all damage increases from other abilities.
  
  **Formula**: `received_damage_of_target * 0.24 = restored_health_to_owner`
  
- **+30% Lifesteal Chance**: Each attack has a 30% chance to restore 300% of the damage dealt to the owner. This ability has the lowest priority and should activate after all damage increases from other abilities.
  
  **Formula**: `received_damage_of_target * 3 = restored_health_to_owner`
  
- **+25% Stun Chance**: Each attack has a 25% chance to inflict a negative effect of -255 on jump (disables jumping) and the maximum slow effect of 255 (disables movement). Both effects last for 4 seconds, and upon re-triggering, the timer resets to 4 seconds if the previous effect's duration is less than 4 seconds. This ability synergizes with the cleaving damage ability and applies the effect to all affected entities.
  
- **+5.75% Damage from Max Health**: Each attack deals additional damage equal to 5.75% of the victim's maximum health.
  
  **Formula**: `maximum_health_of_target * 0.0575 = additional_incoming_damage`
  
- **+25% Poison Chance**: Each attack has a 25% chance to apply a Poison 2 effect for 5 seconds. If the target is already under the poison effect and its duration is less than 5 seconds, the timer will be reset to 5 seconds. If the player has cleaving damage, this effect will apply to all affected entities.
  
- **+30% Explosion Wave Chance**: Each attack has a 30% chance to trigger an explosion wave; this ability can synergize with Fire Aspect. The ground along the specified trajectory will ignite for 4 seconds, and all entities damaged by the explosion will catch fire based on the strength of the Fire Aspect.
  
- **+30% Lightning Chance**: Each attack has a 30% chance to summon a lightning strike, dealing 12 additional damage to enemies within a 3-block radius. The Fire Aspect enchantment ignites all affected entities.
  
- **+15% Item Shuffle Chance**: Each attack has a 15% chance to shuffle items in the hotbar. For monsters, this will work as disabling the item in hand for 3 seconds; for example, a skeleton will lose its bow and will not be able to shoot, while a witch will lose the potion in hand and cannot throw potions at the player.
  
- **+5 Pure Damage**: Each attack with this sword deals an additional 5 pure damage, meaning sword damage +5 pure damage.

## Armor Abilities
- **Evasion** - Has a chance to evade the incoming damage from the enemy
- **Thorns** - Has a chance to reflect the incoming damage back to the enemy

## Bow Abilities
- **Multishot**: Triple shot with chance.
- **Curse**: Weakness, blindness, poison.
- **Thunderer**: Summon lightning.

# Books

## Replacement Book
Players are given the opportunity to select an item they wish to replace with a new one. First, a menu opens where the player chooses the item to exchange (this can only be armor pieces, bows, weapons, etc.). After this, the menu closes, and the book is considered used, at which point the player is presented with a selection menu of 10 new items (in this case, there will be no guaranteed item in the menu).

### Acquisition
- Purchase: Available for **2900 gold** in the shop.
- Drops: Can drop for the worst-performing players after completing specific waves (e.g., 10, 20, 30, etc.). *(How many players?)*

## Replacement Page
When used, this page randomly removes one item (only armor, bows, weapons, etc.) and opens a menu with a selection of 10 new items (there will be no guaranteed item in this menu).

### Acquisition
- Purchase: Available for **1200 gold** in the shop.
- Drops: Can drop for the worst-performing players after completing specific waves (e.g., 10, 20, 30, etc.). *(How many players?)*

## Health Book
- **Purchase**: Available only in the shop.
- **Effect**: Grants **+2 health** for the entire game, as well as **+0.25*N** (wave) to healing potions.

## Damage Book
- **Purchase**: Available only in the shop.
- **Effect**: Grants **+1 damage** to swords and bows for the entire game.

## Regeneration Book
- **Purchase**: Available only in the shop.
- **Effect**: Increases health recovery by **0.5 hearts** and grants **+10%** regeneration from potions.

## Item Book
- **Purchase**: Available only in the shop.
- **Effect**: Allows the selection of an additional item from 10 available options.

## Life Book
- **Usage**: This book has no limit on the number of uses or purchases. When used, it adds an **additional life** to the player.
- **Cost**: Expensive and only available for purchase in the shop. If a player buys an additional life, they can purchase it again after a delay of **6 minutes**.

# Store Mechanics

## Accessing the Store
- The store can be opened using a hotkey, but purchases can only be made while in the waiting room.
- The store will have several sections.

## Store Limitations
- **Items that can be purchased an infinite number of times**.
- **Items that can be purchased once per game** (e.g., shards).
- **Items that can be purchased after N minutes of gameplay** (e.g., shards).
- **Items that have a delay on purchase** (e.g., Life Book).

## Favorites
- Players can save favorite items for quick purchases. These settings will be permanently stored in the database. A similar implementation is already present in BedWars Hype.

## Items for Sale

### Books
| Item                       | Price         | Description  |
|----------------------------|---------------|--------------|
| Replacement Book           | 2,900 gold    |              |
| Replacement Page           | 1,200 gold    |              |
| Health Book                | (?) 500 gold  |              |
| Damage Book                | (?) 500 gold  |              |
| Regeneration Book          | (?) 500 gold  |              |
| Item Book                  | (?) 13,000 gold |              |
| Life Book                  |               |              |

### Consumables
- **Instant Healing** (Golden Apple)

### Monsters
- (Details about monsters can be added here if needed)

## Item Crossing
- Items with abilities can be crossed, but they must be of the same type (e.g., Diamond Chestplate + Diamond Chestplate or Iron Sword + Iron Sword). 
- The same ability can combine and increase its percentage or chance, but it follows a specific formula. 
- Example: Critical damage chance 30% + Critical damage chance 30% = Critical damage chance 51%.
  
### Formula
\[ 
1 - (1 - A) \times (1 - B) \times (1 - C) \times \ldots \times 100\%
\]
  
**Example**: 
\[ 
1 - (1 - 0.3) \times (1 - 0.3) = 1 - (0.7 \times 0.7) = 1 - 0.49 = 0.51 = 51\%
\]

## Enchantment Table
- Place any item in a slot, and a list of enchantments available for that item will be displayed. This mechanic is already implemented in EggWars.

## Item Upgrading
- Upgrading an item allows changing its type, such as upgrading from an iron sword to a diamond sword. This applies to all armor and swords, regardless of their abilities. A similar mechanic is already implemented in WhiteCold.

## Selling Items
- Swords, armor, bows, and other items can be sold for half of their original value. If the item was purchased within the last 30 seconds, it can be sold for the full price.
- Consumables like arrows, apples, potions, and other items cannot be sold.
- The sale price considers all expenses and upgrades (enchantments, abilities, item type, etc.).

## Duels (PVP)
- The frequency of duels is tied to the number of living players:
  - When 61% to 100% of players are alive, duels occur every round (except wave 1).
  - When 60% or fewer players are alive, duels occur every other round, but if only 2 players remain, a duel occurs every 2 rounds.
  
**Note**: During a boss wave, duels cannot occur!

### Duel Duration
- Duels last for **60 seconds**. If players do not eliminate each other within this time, the winner is determined based on other conditions listed below.

### Post-Duel Effects
- After a duel, all cooldowns are reset, health is restored to maximum, and other similar effects are applied.

## Victory Conditions
There must always be a winner in a duel. The following conditions determine the winner:
1. The player who is the last survivor (eliminated the opponent or the opponent disconnected).
2. The player with a higher % of health relative to their maximum health.
3. The player with higher maximum health.
4. The player who dealt the most damage (sum of received/final damage).
5. The player with the highest duel win ratio (wins in duels / Math.max(1, losses in duels)).
6. The player with higher value (this condition applies if both players have been AFK the entire game).
7. A random player (this scenario is extremely unlikely).

# Betting Mechanics

## Overview
- Each player can bet a maximum of **50%** of their gold balance.
- Once a bet is placed, it **cannot be canceled**.
- Players do not see or know the bets of other players until the duel begins.
- Players involved in the duel do not receive information about bets until the duel concludes.

####
double[] winnerBets = new double[0];

double[] loserBets = new double[0];

double totalBetsOnWinner = 0;

for (double bet : winnerBets) {
    totalBetsOnWinner += bet;
}

double totalBetsOnLoser = 0;

for (double bet : loserBets) {
    totalBetsOnLoser += bet;
}

double totalBets = totalBetsOnWinner + totalBetsOnLoser;

double multiplier = Math.max(2.05, totalBets / totalBetsOnWinner);

for (double bet : winnerBets) {
    double reward = Math.floor(bet * multiplier);
}

## Curse Mechanic
- If there are 3 players remaining in the game, the losing player in a duel receives a curse.
- Each charge of the curse increases incoming damage by 15% and decreases outgoing damage by 15%.
- The curse does not apply during player duels.

# Monsters (PVE)

## Resurrection
- When a player dies from monsters but still has lives remaining, one life is lost, and the player becomes `ArenaGameMode.GHOST` for 5 seconds.
- After the timer expires, the player resurrects at the point of death and gains a protection effect for 15 seconds, which reduces incoming damage by 60% and increases outgoing damage by 100%. 
  - (Note: Damage from thorns is also considered outgoing damage, and this must be implemented.)
- When resurrecting, all item, ability, and other cooldowns are reset, and health is restored to maximum.
  
- If the player has no lives remaining, they lose the game. This is the only way to lose the game (dying from monsters or leaving the game).

## Empowerment
- Players have 60 seconds to clear a wave. If they fail to do so, monster empowerment begins every second.
- If the player does not exit the game during 3 minutes of monster empowerment, they automatically lose.

### Empowerment Effects:
- Attack Speed
- Damage Amount
- Movement Speed

## Wave Completion
- After completing a wave, the player is teleported to a duel (if it is still happening) or to a waiting room with a 1-second delay, allowing them to process what is happening and see the animation of the last monster's death. 
- Players can loot any items that may have dropped from monsters. 
- If the player is watching a duel, they can still open the shop menu using a hotkey.

### Rewards for Completing a Wave
- Players receive a monetary reward upon completion of a wave.
- The first player to complete a wave receives a reward of 300 gold, the second wave yields 310, and so on.

### Reward Formulas:
- **Reward for First Player**:  
  `300 + ((wave - 1) * (10 + wave / 10))`

- **Reward for Other Players**:  
  `reward_for_first - (reward_for_first / number_of_alive_players) * (order_of_completion - 1)`

- Rewards must be rounded up using `Math.ceil()`.

# Waves

## Replicator
- **Model**: Spider  
- **HP**: n  
- **Damage**: n  
- **Quantity**: n  
- **Ability**: When HP reaches 20%, it spawns 2 copies around itself with the same amount of health as the main mob, but with 75% reduced damage.

## Summoners
- **Solo**: 1 Witch + 6 Small Villagers  
- **Duo**: 2 Witches + 10 Small Villagers  
- **6x6**: 6 Witches + 18 Small Villagers  

### Witch Abilities
- **Shockwave**: The Witch creates a shockwave that deals damage to all players within an 8-block radius. (Short-Medium cooldown)
- **Dispelling**: The Witch dispels all positive effects from the player and also dispels negative effects from herself. (Long cooldown)
- **Villagers**: Simply have a stable damage output and high speed (consider giving them some menacing headgear). Witches should be made less mobile.

## Frozen
- **Solo**: 1 Lich + 4 Skeletons  
- **Duo**: 2 Liches + 8 Skeletons  
- **6x6**: 6 Liches + 16 Skeletons  

### Lich Ability
- **Freezing**: Creates a frost field within a 4-block radius of the target, applying Slowness II. Every 1.5 seconds, a damage tick occurs for all who are in the field (similar to Leshrac's shard). If all 3 ticks hit the player, they are stunned for 3 seconds. (Medium-Long cooldown)
- **Appearance**: Dressed in blue/turquoise-colored armor and holding a staff. The head can remain uncovered or adorned with something like a skull with a crown.

### Skeleton Ability
- With a chance, the skeleton will shoot a frost arrow that applies Slowness II for a short duration (like a bow from a Druid).

## Thunderers
- **Solo**: 4 Thunderers  
- **Duo**: 8 Thunderers  
- **6x6**: 16 Thunderers  

### Ability
- They do not have any melee damage. Every 4.5 seconds, they unleash a lightning strike on a random player on the map (not necessarily close) that deals n damage and applies Slowness I for 1.5 seconds.

## Trolls

### Troll Mage
- **Abilities**: Has a bow and can shoot at players, with a 45% chance to spawn web beneath the player, which disappears after 8 seconds (during this time, the player can escape; if not, it will disappear). This ability can trigger once every 15 seconds. The web does not prevent the use of abilities or attacking.

### Troll Warrior
- Zombies dealing melee damage, nothing special yet.

- **Solo**: 1 Troll Mage + 6 Troll Warriors  
- **Duo**: 2 Troll Mages + 12 Troll Warriors  
- **6x6**: 6 Troll Mages + 18 Troll Warriors  

## Centaurs
- **Centaur Raider**: Zombie horse with a zombie rider.  
- **Centaur**: Bone horse with a skeleton rider.  

> **P.S.**: The rider and the horse share total HP (if feasible; if not, just remove the rider). If one is killed, both the horse and rider die.

- **Solo**: 1 Centaur Raider + 6 Centaurs  
- **Duo**: 2 Centaur Raiders + 10 Centaurs  
- **6x6**: 6 Centaur Raiders + 16 Centaurs  

### Centaur Raider Ability
- **Centaur Stomp**: Shakes the ground and deals n damage, stunning all players within a 3-block radius for 2.5 seconds. Players cannot use abilities or items. (Short-Medium cooldown)

### Centaur
- Deals stable damage without any abilities.

## Wolves

### Alpha Wolf
- **Wolf**  
- **Abilities**:  
  - **Alpha Wolf**: Can injure the player with a 20% chance. The injury lasts for 4 seconds, applying Fatigue, Slowness, and Withering I. Cannot trigger more than once every 10 seconds.  
  - **Wolf**: Can deal 160% damage to the player with a 17% chance (releases particles like a cat's sword). No cooldown.

## Blazes
### Abilities
- Shoots a fireball that ignites a circular area with a diameter of 5 blocks (similar to dragon's breath).
