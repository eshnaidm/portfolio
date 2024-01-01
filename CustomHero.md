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

During 6 vs 6 duels, each player from the losing team loses a life. If a player has no lives left, they receive a curse.

If a 1 vs 1 duel concludes, players return to battling monsters if the team hasn't finished the wave.
There are no stakes in this mode; players receive dividends if their ally wins a duel or if the team wins a duel.

The algorithm for initiating duels differs from other formats. 1 vs 1 duels start from the second wave, while 6 vs 6 duels occur every 6 waves (i.e., on waves 6, 12, 18, etc.).