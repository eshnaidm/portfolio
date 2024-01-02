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

