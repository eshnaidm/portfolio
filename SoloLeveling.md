# Solo Leveling Game

## Essence of the Game
The game combines a simulator with PvP elements and epic boss fights. In short, it's a mix of *Katana Simulator*, *Sword Master*, and *Epic Boss Fight*.

The game will take place in a post-apocalyptic setting with elements of futurism. The setting and narrative will closely resemble the manhwa and anime *Solo Leveling*.

## Objective of the Game
To surpass everyone in the number of rebirths and total damage dealt to opponents and to conquer the top spot.

## Narrative
The narrative will be based on the series of the manhwa and anime *Solo Leveling*. In the anime, events unfold like a "video game" where the main character must level up from a complete novice to the strongest through quests provided by a system. I draw inspiration from this popular anime.

### Description of the Anime
It is said that what doesn't kill you makes you stronger. Unfortunately, for the weakest hunter in Korea, Sung Jin-Woo, things are quite the opposite. One day, along with his companions, he finds himself in a dangerous high-rank dungeon, and when he leaves, he is a completely different person—now he possesses a System, a program that only he can see and that somehow levels him up. Now Jin-Woo is determined to uncover the secret of this new mysterious power and where dungeons come from...

The ranking system for rebirths will be partially borrowed from the anime and partially from another source.

## Structure of the Game
When a player enters the game, they spawn in a kind of lobby where they can begin their training. From this lobby, they will have access to teleportation to various locations suited to their level. All players start at rank "F," which will be displayed next to their name; the more rebirths they achieve, the higher their rank. The maximum rank is "SSS+"; after reaching this rank and undergoing one more rebirth, a star icon will be added to their rank. Rebirth can be achieved by reaching the maximum level and completing the final location. There will be several public locations where players can obtain loot more efficiently and gain more experience and currency, but PvP will be enabled there.

### Main Mechanic - The System
The "System" will be the main menu for the game, where players can receive quests to kill mobs and other players, for which they can earn currency, improve their stats, and gain various buffs, effects, potions, and consumables.

The "System" will also feature the player's main menu, including options for donations, teleportation between locations, and teleportation to public locations, among others.

### Menu Functionality
The menu will have practical functionality, proceeding in order:

- **Opening the Menu:** The menu opens using a hotkey (for example, "M") or through an item in the hotbar.
  
- **HP Display:** Shows the amount of health on a bar, similar to the example below.
  
- **Stats Display:** Shows all stat points on the main screen (also illustrated below), along with how many points are available for spending. Next to each stat, there will be a "+" icon if there are available points; if not, the icon will be hidden. The player can invest one or more stat points at a time, and when they finish distributing points, a line will appear saying "Distribute Points." After clicking it, all points will be distributed.
  
- **Settings Icon:** In one corner of the screen, there should be a settings icon (gear) that opens a popup with the settings described below; upon closing the popup, all settings should be saved.
  
- **Daily Quests:** The main screen will also display daily and additional quests. It should appear as a checklist, with progress displayed as "Kill 100 mobs [0/100]." When a daily quest is completed, it will be checked off and marked with a tick in the checklist.
  
- **Backpack:** The menu will include a "Backpack" button that opens the backpack directly from the menu; additionally, the backpack can be opened using a hotkey (see below).
  
- **Donations:** Pressing the donation button will open the donation menu.
  
- **Navigator:** The menu will feature a special button that opens the navigator; more about the navigator's functionality will be provided later. It can also be opened using a hotkey.

# Character Stats

In the game, players will have 3 different characteristics: **Strength (Damage)**, **Agility (Speed and Evasion)**, and **Survivability (HP)**. Players can earn these stat points by completing quests and special dungeons and then allocate them as they choose.

Each additional stat has its own limit. When reaching the limit and attempting to upgrade stats beyond it, a warning popup will appear, indicating that a certain additional stat (e.g., critical chance) has reached its maximum. In such cases, the player must confirm their investment in points a second time. There are no limits for the basic stats. By default, each characteristic starts at 0, but players begin with 10 points to distribute.

## Strength
- Strength increases the player's damage as a percentage of their accumulated damage. Every 10 points will increase the percentage of critical damage.
- Damage increases as a percentage of the player's accumulated damage; with each upgrade to the characteristic, this percentage will rise. For example, if a player has 1000 accumulated damage and the characteristic increases damage by 5%, the player will deal 1050 damage.
- Each stat point gives a 0.5% increase in damage, and this stacks with external factors.
  
### Critical Damage
- By default, the player has a 5% chance of landing a critical hit. Critical damage starts at 110% (1.1x), and the chance of a critical hit does not increase with the characteristic but can be influenced by external factors (e.g., armor set).
- Every 10 points in the characteristic grants a 20% increase in critical damage (130, 150, 170, 190, 210, 230, etc.), and this stacks with external factors.
- When a critical hit occurs, a visual effect similar to that in EggWars and LuckyWars will be displayed (red particles around the player), and a message will appear in the corner of the screen stating, "You dealt a critical hit x."
- The cap for critical damage is 500% (x5).

## Agility
- Agility increases the player's speed. Every 10 points will increase the percentage of evasion from mob attacks.
  
### Speed
- The player's speed increases by 1% for each point in Agility.
  
### Evasion
- When a mob hits the player, there is a default 0.5% chance to evade the attack. Evasion works in such a way that the hit will connect, but the damage will be 0 (similar to CSS). 
- When an evasion occurs, a message will display in the corner of the screen stating, "You evaded the attack x."
- Every 10 points in Agility increases the evasion chance by 0.5%. The cap for Agility is 10%.

## Survivability
- Survivability increases the player's health. Every 10 points will increase the percentage of life steal from hits.
  
### Health
- The amount of health increases by 5% for each point in the characteristic.

### Vampirism
Vampirism will operate similarly to the system used in other games. 

### Characteristics
- Every 10 points in the Survivability characteristic increases the hidden chance of vampirism activation by 0.8% and boosts the recovery from vampirism by 1.5%.

### Chance of Activation
- The player has a hidden chance of activating vampirism, which starts at 3% by default. When vampirism is activated, the player recovers a certain percentage of their health.
- The cap for this stat is 10%.

### Recovery from Vampirism
- The recovery from vampirism is based on the percentage chance mentioned above and allows players to regain 10% of their maximum health.
- The cap for this stat is 30%.

## Level
Each level grants the player 1 characteristic point, which they can allocate as they wish. Additionally, upon completing tasks from the system, there is a chance to earn more characteristic points.

- There is no level cap, and characteristic points and levels are not reset upon rebirth. The economy is designed such that the maximum level at the last rebirth will be around 300.

- Upon reaching a new level, a title notification will pop up, stating: “New Level X! Gained 1 characteristic point.”

### Experience Sources
Experience for leveling up can be obtained from several sources:
- Daily tasks
- Killing mobs
- Completing dungeons
- Killing players
- Defeating bosses
- Events

### Visual Representation
The visual representation of the level will be a bar under the health bar, showing the player's skin head instead with a number indicating their level.

## Settings
Settings are displayed in a pop-up menu through the system, following a similar principle to the farm. The menu has a list and toggles. Settings are saved until the player changes them. By default, everything is enabled.

### Options Include:
- Disable player visibility
- Enable/Disable music
- Hide notifications for power, gold, and damage dealt
- Hide animations
- Hide hints

## Inventory (Backpack)
The inventory will be a custom menu that can be accessed from the main menu or via a hotkey (E, replacing the default inventory).

### Categories
The inventory has 3 categories, each with different slot limits.

- The right side of the inventory menu will have slots for armor, allowing players to equip items. There are also hotbar slots. Players can transfer items from the inventory to the hotbar by clicking on the item in the inventory and then selecting a slot in the hotbar. If an item already occupies that slot, it will be replaced.

- Players can increase their slots through level progression, with an additional 5 slots granted for each category every 5 levels.

- Only 5 closed slots will be shown, dimmed, with a message stating “Unlocks at level n.”

- If a player purchases an infinite backpack, closed slots will not be displayed, and an infinity symbol will appear. A new slot will be created for each new item received.

- If the menu exceeds the boundary, players can scroll using the mouse wheel, and a scrollbar will appear that can be navigated with the left mouse button.

### Interaction with Inventory
- During combat, players cannot change weapons or armor; they can only use consumables.

- Active items in the hotbar/armor slots will be displayed in green in the inventory, while other slots will have a dark gray background. Active items also occupy slots in the inventory until consumed/sold/discarded.

### Equipment Usage
- Weapons: When a player selects and uses a weapon, it is displayed in the player's hotbar, where they can remove or change it through the inventory if not in combat. Active weapons appear in green in the inventory.

- Armor: Works the same way as weapons; players store parts in a custom inventory, and when used, they are equipped in specific slots. Hovering over an armor slot will show detailed information about the item.

### Consumable Usage
- Players can transfer consumables (potions/buffs/other items) to the hotbar slots for usage. If a consumable is single-use, it disappears from the inventory. If it is infinite, the slot appears active with a green background.

### Item Interaction
- **Right-Click (RMB)**: When right-clicking an item, a mini-menu pops up with three options:
  - **Sell**: Immediately sells the item.
  - **Select Item**: Groups the item with others, changing the item's background to yellow.

- If two or more items are grouped, right-clicking one of them opens a new menu with options to “Sell All,” “Pin All,” “Cancel Selection,” and “Destroy All.”
  - **Destroy Item**: Discards and destroys the item.

### Item Locking
- Players can lock items in each category. Right-clicking an item presents the option to “Pin and Lock.” The locked item appears at the top of the category with a blue background. Locked items cannot be sold through auto-selling or other bulk selling or destroying methods. There is no limit on locked items.

### Inventory Tabs
The custom inventory has tabs organized as follows:

1. **Weapons**: All dropped weapons from mobs are stored here. Initially, there will be 10 slots.
   - Every 5 levels, an additional 5 slots will be added.

2. **Equipment**: All armor dropped from mobs is stored here. Initially, there will be 10 slots.
   - Every 5 levels, an additional 5 slots will be added.

3. **Consumables**: All potions, resources, and other drops from mobs will be here. Initially, there will be 20 slots.
   - Every 5 levels, an additional 8 slots will be added.

## Consumables Shop
The system will also feature a consumables shop. Each consumable item has a purchase limit, meaning players can only buy a specific quantity of an item per day. Stock can be replenished through a donation feature.

After purchasing a consumable, it is sent to the backpack. If the backpack is full, an error message will display: “Your backpack is full! Please try to buy later.”

Some levels of consumables are restricted by rebirths; their slots in the menu should be hidden behind a lock, with the message “Available from rebirth X.”

Consumables will be provided in the backpack in the form of explosive potions or regular ones.

### Shop Slots:

1. **Constricting Potion (Explosive)** - Potion that stops all of the enemies in its radius, making them immobile and stunned.
   - 10 pieces per day

2. **Binding Potion (Explosive)** - Potion that binds all of the enemies in its radius, passing the incoming damage to all of the binded enemies
   - 10 pieces per day

3. **Instant Heal Potion I/II/III/IV (Explosive)**:
   - **Level I**: 25 pieces per day. Heals 20% of max health.
   - **Level II**: 15 pieces per day. Heals 30% of max health.
   - **Level III**: 10 pieces per day. Available from rebirth B. Heals 40% of max health.
   - **Level IV**: 5 pieces per day. Available from rebirth S. Heals 50% of max health.

4. **Regeneration Potion I/II/III (Drink required)**:
   - **Level I**: 15 pieces per day. Duration: 20 seconds. Restores 2.5% max health per second.
   - **Level II**: 10 pieces per day. Duration: 10 seconds. Restores 7% max health per second.
   - **Level III**: 5 pieces per day. Available from rebirth A. Duration: 10 seconds. Restores 10% health per second.

5. **Strength Potion I/II/III/IV/V (Drink required)**:
   - **Level I**: 25 pieces per day. Increases damage by 10%. Duration: 1 minute.
   - **Level II**: 20 pieces per day. Increases damage by 20%. Duration: 40 seconds.
   - **Level III**: 15 pieces per day. Increases damage by 30%. Duration: 30 seconds. Available from rebirth D.
   - **Level IV**: 10 pieces per day. Increases damage by 40%. Duration: 25 seconds. Available from rebirth B.
   - **Level V**: 5 pieces per day. Increases damage by 60%. Duration: 25 seconds. Available from rebirth S.

6. **Speed Potion I/II/III (Drink required)**:
   - **Level I**: 15 pieces per day. Duration: 1 minute. Increases speed by 40%.
   - **Level II**: 10 pieces per day. Duration: 30 seconds. Increases speed by 90%.
   - **Level III**: 5 pieces per day. Available from rebirth A. Duration: 20 seconds. Increases speed by 110%.

7. **Fortification Potion I/II/III (Drink required)**:
   - **Level I**: 15 pieces per day. Duration: 2 minutes. Increases defense by 15%.
   - **Level II**: 10 pieces per day. Duration: 1.5 minutes. Increases defense by 25%.
   - **Level III**: 5 pieces per day. Available from rebirth A. Duration: 1 minute. Increases defense by 40%.

8. **Totem of Immortality (very expensive)**:
   - Provides a second life - 1 piece per day. Available from rebirth C.
   - Must be in the hotbar to activate.
   - Activates when the player’s health drops below 0.
   - When activated, displays the totem effect as in the newer versions.

**Buffs from consumables are displayed above the hotbar**

## Daily Quests
Daily quests are one of the main progression systems in the mode and serve as motivation for players to log in and play every day. All daily quests are quotas that must be completed. Here are examples of quests that players might encounter:

- Kill **n** players.
- Kill **n** mobs.
  - A random mob will spawn in the most open location.
- Complete **n** waves in a dungeon.
  - From the maximum available.
- Kill **n** bosses.
  - From the available ones.
- Obtain **n** swords.
- Obtain **n** armor pieces.
- ...

The cycle of daily quests will last **14 days**, with the goal for players to log in for **14 consecutive days** and complete daily quests. Each day, the rewards will improve.

Visually, daily quests will be displayed in the menu as illustrated above. Upon completing a daily quest, a title will appear indicating its completion, along with the rewards received.

### Types of Quests
Quests will be divided into two types:

1. **Mandatory Quests**:
   - These are essential for continuing the daily quest cycle and will include a fixed task. For example, kill 100 mobs (randomly selected from available ones) and kill 10 players.
   - If mandatory quests are not completed, the daily quest cycle resets to the first day, and the player must start earning rewards from the beginning.

2. **Additional Quests**:
   - These quests are optional but are five times more challenging than regular ones. For example, if the task is to kill 100 mobs, the additional quest will require killing 500 mobs.
   - The rewards for these quests are greater, providing more experience.
   - There are no penalties for failing additional quests, and the cycle continues. However, the rewards are significantly higher than for regular quests.

## Navigator
The Navigator is a menu that opens when the player clicks on the icon for the current location in the main menu.

In the Navigator, all farming locations will be displayed with images. 

When a location is clicked, an information menu about it will appear, along with a “Teleportation” button.

**Teleportation during combat is not possible.**

At the top of the Navigator menu, there will be a large teleport button to the general location.

On the right side of the menu, clicking on a location will show brief information about it:

- Presence of mobs.
- Average health of mobs.
- Possible loot.
- A lore-related text.
- An image.

## Currencies

### Donations
- **Boosters**:
  - **Global/Local Damage Booster x1.5, x2.0**:
    - Increases damage accumulation, works on top of all other buffs.
  - **Global/Local Gold Booster x1.5, x2.0**:
    - Increases the amount of gold dropped by players and mobs, works on top of all other buffs.
  - **Global/Local Experience Booster x1.5, x2.0**:
    - Increases experience gained from mobs and players, works on top of all other buffs.
  - **Global/Local Damage to Mobs Booster x1.5, x2.0**:
    - Increases damage dealt to mobs, works on top of all other buffs.
  - **Global/Local Speed Booster x1.5, x2.5**:
    - Increases speed, works on top of all other buffs. Does not stack with stat levels.
  - Boosters are displayed in the top left corner of the screen with a timer.

### Other Items
- **Philosopher's Stone**: When used on an item, allows it to be retained for the next rebirth. Limit of 2 items per rebirth.
- **Infinite Binding Potion**: Provides an infinite binding potion with a cooldown of 1.5 minutes.
- **Infinite Link Potion**: Provides an infinite link potion with a cooldown of 1.5 minutes.
- **Magic Torch**: Allows spawning a random event in the general location.
- **Reroll**: Allows rerolling one daily quest in the system.
- **Personal Boss Room**: Allows creating a personal boss room that can be entered solo or with a party to attempt to defeat the boss. If all players die, no items are returned.
- **Autoclicker**: Self-explanatory.
- **Illusion**: Creates 2 illusions around the player that run and attack mobs, with a cooldown of 2 minutes. Use the mechanics fully from CSS.
  - **Illusion** looks the same as the player.
  - Obtained as a hotkey or in the hotbar.
  - Receives 600% damage and has the same health as the player.
  - Deals 45% of the player's damage.
  - Accumulates 30% of the experience as if the player had killed the mob.
  - Brings the player 50% of the accumulated power after the effect ends.
  - Has 150% of the player's speed.
  - Disappears 25 seconds after activation.
- **Fast Respawn of Mobs**: Mobs respawn 4 times faster than usual.
- **Mannequin**: When activated, works for 6 hours, remains in one place, and attacks mobs in a 5x5 radius in one of the locations where the player places it (offline income mechanic).
  - Right-clicking on the mannequin opens a simple menu showing all that the mannequin has collected over the past 6 hours or since the last collection. A "Collect All" button will appear, allowing the player to collect all loot described below. If the player does not collect loot within 6 hours, a chest will remain at the mannequin's location, which will collect the loot when clicked.
    - 30% of accumulated coins.
    - 30% of accumulated experience.
    - 30% of accumulated power.
  - The mannequin has a storage limit of 20 items; upon collection, it resets to 0.
  - The mannequin deals 30% of the player's damage to mobs, but it cannot be destroyed. If possible, the player can break the mannequin, but it cannot be retrieved.
  - Mannequins can only be placed in personal locations.
  - Only one mannequin can be active at a time.
  - A hologram with a timer will hover over the mannequin.
  - The mannequin is an NPC with the player's skin that stands in place and attacks the air.
- **Luck Potion**: Increases the chance of obtaining rare items by 15% for half an hour.
- **Infinite Backpack**.
- **Event Forecast**: Allows viewing the next 3 events in the general location.
- **Reset Stats**: Resets all stat points.
- **Additional Rune Slot in Armor**.
- **Magic Tool**: Allows extracting a rune from armor as an item.
- **Autovend**: Sells all obtained items except blocked ones.
- **Shop Restocking**: Can be used only once a day.

### Damage Power
Damage power is a currency earned per click. The power earned will mainly depend on your weapon and additional external modifiers, such as bonuses from armor sets, pets, etc.

When there is an excessive amount of power, it will be displayed in shortened numeric names (e.g., quintillion, quadrillion, decillion, etc.). Power has no cap, but the goal is to ensure it reaches a MAXIMUM of decillion (30 zeros).

Power will be obtained in several ways:
- By clicking.
- Rewards for quests.
- Rewards for completing dungeons and bosses.

Visually, power accumulation will be displayed around the crosshair on the screen, with numbers popping up and circling in the close radius around the crosshair.

Accumulated power and current damage will be displayed next to the hotbar.

### Damage
Damage is accumulated power and fully depends on it. Each click, buff, etc., that affects power accumulates and results in damage. Buffs that influence damage affect it after the entire power has been accumulated.

Damage will also be displayed in the menu as described above.

### Difference Between Power and Damage
- **Power**: Accumulated currency of the player, which can be used for rebirth and increases damage. It accounts for all player hits and clicks that contribute to this stat. Buffs only affect its accumulation.
- **Damage**: Accumulated power converted into damage; any buffs affecting damage apply on top of the accumulated power. For example, if there is a buff for 10% damage, it will be calculated as Accumulated Power x 1.1.

### Power Combo
A mechanic that activates during an uninterrupted series of hits when the player continues clicking for an extended time.

> **Note**: Donor autoclickers do not work with this mechanic; only if the player clicks manually.

- **1 Minute**: Power multiplier x1.1
- **5 Minutes**: Power multiplier x1.2
- **10 Minutes**: Power multiplier x1.3
- **15 Minutes**: Power multiplier x1.4
- **20 Minutes**: Power multiplier x1.5
- **30 Minutes**: Power multiplier x2

The combo disappears after 15 seconds of inactivity.

The current combo will be displayed in one of the screen corners, along with a progress bar to the next level. If the player fails the combo, the progress bar resets.

### Gold
Gold is the primary currency for in-game purchases, store transactions, trading between players, and upgrading stats.

Gold will be displayed next to the hotbar, as shown in the screenshots above or as in prison mode.

Gold will be obtained through:
- Killing mobs, bosses, and players.
  - After killing, the visual drop appears in front of the screen at the death location.
  - Next to the amount of gold in the hotbar, the text “+n” will appear with the obtained amount.
- Rewards for quests.
  - The text “+n” will also appear next to the amount in the hotbar.
- Rewards for completing quests, locations, and dungeons.
  - The text “+n” will again appear next to the amount in the hotbar.

### Rebirths
Rebirths will be available after completing the maximum location dungeon.

An NPC will be located at the spawn point that players can approach if they wish to rebirth. Clicking on this NPC opens a menu with requirements.

If all requirements are not met, the “Rebirth Stronger” button will be grayed out. Clicking it will display the message, “You have not met all the requirements for rebirth!”

Upon meeting the requirements, the rebirth occurs. Visually, the player will be teleported back to spawn, where they will lose all items.

- Accumulated Gold [x/y]
- Accumulated Power [x/y]
- Last dungeon completion [Yes/No]

Upon rebirth, all items and gold are lost, but some things and stats remain:
- Items purchased via donations.
- Damage.
- Power.
- Player level.
- Stats - Partially. All player stats are reset, and they can redistribute all points.

Rebirth requires a certain amount of gold and a specific amount of accumulated power.

After rebirth, all mobs in local worlds become more challenging.

Mobs will be adjusted to be more difficult than the power accumulated by the player before rebirth.

Before the first rebirth, the player rank is **F**. After each rebirth, it changes as follows:
- 1 Rebirth - **F+**
- 2 Rebirths - **E**
- 3 Rebirths - **E+**
- 4 Rebirths - **D**
- 5 Rebirths - **D+**
- 6 Rebirths - **C**
- 7 Rebirths - **C+**
- 9 Rebirths - **B**
- 10 Rebirths - **B+**
- 11 Rebirths - **A**
- 12 Rebirths - **A+**
- 13 Rebirths - **S**
- 14 Rebirths - **S+**
- 15 Rebirths - **SS**
- 16 Rebirths - **SS+**
- 17 Rebirths - **SSS**
- 18 Rebirths - **SSS+**
- 19 Rebirths - **SSSS**
- 20 Rebirths - **SSSS+**

Above SSS, there will be no ranks, but the player will still progress by earning achievements and increased stats. Players can reach the rank **SSS+** through rebirths.

# Game walkthrough - Local Worlds

## Overview
The mode will consist of local locations that players will gradually progress through, farming damage (similar to SAO). 

After every five locations, players will encounter a special dungeon where they must defeat waves of mobs and a boss to advance to the next location. In the game, it will appear as if there are 5 locations, followed by a 5*. In the special location, there will be enhanced mobs from the previous location. Initially, I plan to create around 40 locations. Upon completing the 40th location, players will have the option to rebirth, after which all mobs will be stronger.

## Loot from Mobs
Loot will be divided into three categories:
1. Armor
2. Weapons
3. Shards

### Armor
Armor will work on a set system. Gear will drop from each location, but to gain any special effect, players must collect a full set. Each piece provides its own defense stat and includes a built-in buff. This buff only activates when all four armor pieces are equipped.

For example, there is a set that grants +2 strength points. If a player collects the entire set, they receive this buff. Armor will be divided by rarity, with each rarity offering stronger effects than the previous one.

By default, each piece of armor has 1 buff slot. However, if players craft runes from shards (see below) and purchase an additional rune slot from the donation shop, they can gain a second buff for their armor set. The main stat for armor will be defense, and runes can provide custom buffs.

**Defense Formula**: I will write the formula later.

### Loot Table
| Set Name         | Rarity   | Drops in Locations | Drop Chance (out of 100%) | Built-in Rune     | Buff                             |
|------------------|----------|--------------------|----------------------------|--------------------|----------------------------------|
| Speed Armor      | Common   | 1-5*               | 82.7%                      | Speed Rune         | Increases speed by 10%           |
| Life Armor       | Common   | 1-5*               | 82.7%                      | Life Rune          | Increases HP by 5%               |

### Weapons
Weapons will drop in the same manner as armor, from mobs, with a chance to have a buff.

- **Buffs**: To be determined later.
- The main stat for weapons will be power, which indicates the damage dealt when hitting (clicking).

### Shards
Shards are a small mechanic borrowed from MMORPGs. With each kill of any mob or boss, there is a chance to drop a shard. Shards can be crafted into runes.

### Runes
Runes are made from 30 shards at a special NPC at spawn. Each piece of armor and weapon will have one slot for a rune.

- There may be exceptions for very rare items, which may have two slots.
- **Exception**: Donation items.

## Locations
### Lobby

### Leaderboards
The leaderboards will be structured as follows:

On the main location (Lobby), the leaderboards will display rankings for:

- **Rebirths**: If players have the same number of rebirths, the stats described below will be considered as well. If all players have exactly the same stats (which will never happen), the leaderboard will decide the order.
- **Accumulated Power**
- **Levels**

### NPCs
- **Donation NPC**: Opens the donation shop upon interaction.
- **Rebirth NPC**: Facilitates the rebirth process as described above.
- **Training NPC**: Training mechanics will be detailed elsewhere.
- **Teleportation NPC**: Opens the navigation menu as an alternative.
- **Blacksmith NPC**:
  - Converts 30 shards into one rune.
  - Allows players to break a rune into 20 shards.
  - Allows rune removal from an item (if done without donation, the rune will not be returned, leaving just the item).
  - Enables players to insert a rune into either armor or weapons.

# Mob Locations

To progress through each location, players must complete all kill quests given by the NPCs present.

## NPC Mechanics
When players right-click on an NPC, a dialogue window will appear, explaining the task at hand, with two options to choose from:

- **Accept Quest**: Players accept the quest and begin the kill mission for a specific number of mobs in the location.
  
- **Leave**: The dialogue closes, allowing players to approach the NPC at any other time to take the quest.

**Example**: 
> **NPC Desertor**: "Greetings, warrior! There’s a small group of pirates further down the road looking for me. Go deal with them, and I promise you a valuable reward!"

Upon completing the task, players receive their reward immediately. To take the next task, players must approach the NPC again.

After completing all the tasks from the NPC, players can continue to the next location.

## Thematic Locations
Every five locations leading to the dungeon will have the same theme and NPC but different enemies. If there are 40 locations in total, there will be 8 different themes.

Mobs will be spread throughout the locations, similar to how they are in SAO.

## Dungeons

Entrances to the dungeons will be located at the end of every 5th location, appearing as a door or portal.

In the dungeons, players will face waves of all mobs from previous locations, but they will be stronger.

These dungeons are designed exclusively for solo content.

### Dungeon Progression
Dungeons will follow this principle:

1. The battle starts with the first wave, and the player's objective is to kill all the mobs.
2. After defeating the first wave, a loot chest will spawn. The chest will contain currency, experience, and loot from the mobs.
3. Players have a choice:
   - **Continue Fighting**: If they choose to continue, the second wave will spawn. If they die during this fight, they will lose the loot from the chest.
   - **Take Loot and Leave**: If players decide to leave, they will receive the loot and return to the entrance of the location, having the option to retry the dungeon.

Completing the dungeon unlocks access to the next thematic area. Players can run dungeons an infinite number of times.

## Description of Farming Locations

### Location 1 - Beach
- **Friendly NPC**: Desertor
- **Possible Enemies**: Pirate Recruit, Sailor
- **Respawn Time for Each Enemy**: 5 seconds

### Location 2 - Pirate Camp
- **Friendly NPC**: Desertor
- **Possible Enemies**: Pirate Raider, Gunner
- **Respawn Time for Each Enemy**: 10 seconds

### Location 3 - Coastal Village
- **Friendly NPC**: Desertor
- **Possible Enemies**: Smuggler, Navigator
- **Respawn Time for Each Enemy**: 15 seconds

### Location 4 - Sunken Ship
- **Friendly NPC**: Desertor
- **Possible Enemies**: Bosun, Quartermaster
- **Respawn Time for Each Enemy**: 20 seconds

### Location 5 - Pirate Ship
- **Friendly NPC**: Desertor
- **Possible Enemies**: Navigator, First Mate, Boarder
- **Respawn Time for Each Enemy**: 25 seconds

### Location 5* - Cabin of the Broken Bone
- **Friendly NPC**: None
- **Wave 1**: Enhanced Pirate Recruits, Sailors
- **Wave 2**: Enhanced Pirate Raiders, Gunners
- **Wave 3**: Enhanced Smugglers, Navigators
- **Wave 4**: Enhanced Bosuns, Quartermasters
- **Wave 5**: Enhanced Navigators, First Mates, Boarders
- **Boss**: Pirate Chief "Broken Bone"

# General Location - Fighting Pit

The **Fighting Pit** will feature a large **ROUND arena** designated as a PvP zone.

The location will be barrier-free and divided into different zones; the further players move from the center, the stronger the mobs and bosses become. Consequently, the loot quality will also increase.

Upon entering each new zone, a warning will display the recommended rebirth level for that area.

In each zone, there will be one boss, different mob levels, and various activities.

## Activities in the Fighting Pit

- **Special Mobs**
- **Events**
- **Boss Fights**
- **Contracts**
- **PvP**

### Special Mobs
The Fighting Pit will feature enhanced mobs randomly selected from all local locations. The further players venture from the center, the stronger the mobs will be.

Mobs will be randomly positioned, remain stationary, and only move toward the player who attacks them.

### Events
Events will spawn randomly every **30 minutes** (the timer starts from the end of the previous event), and each event will offer specific rewards. The number of winners depends on the event.

Event locations are already mapped out, and a timer displaying the time until the next event will appear at the top of the screen.

- **King of the Hill**: Active for 10 minutes. Players must climb to a platform on the hill. Players earn points for every second they stay on the platform. At the end of the event, the top three players with the highest points receive rewards.
  
- **Double Drop**: Activates for 10 minutes, doubling the drop rate from mobs.
  
- **Gold Rush**: Players earn double gold for killing mobs and other players. Active for 10 minutes.
  
- **Team Deathmatch**: Players in the pit are split into two teams. The team with the most kills in 15 minutes wins a reward.
  
- **Mystical Chest**: A mystical chest with rare loot spawns somewhere on the map. The chest is active for 5 minutes.
  
- **Giant**: A giant spawns in the center of the arena with a massive amount of health. Players who deal the most damage receive rewards. All participants will also receive smaller rewards.
  
- **Parkour**: A parkour challenge activates in a designated area on the map. The first three players to complete it receive rewards. The event ends once three players finish or after 30 minutes, whichever comes first.

### Bosses
Each circular zone will contain at least one boss. The further from the center, the more difficult the boss will be.

### Contracts
Players can receive a contract from an NPC in the Fighting Pit once an hour for a random player. If they successfully eliminate the target, they will earn gold and rare items.

Players should have approximately equal rebirth levels and ratings compared to the target of the contract.

If the player exits the game, the contract is canceled.

The target player must remain unaware of the contract.

Contract rerolls can be purchased with in-game currency.

### PvP
#### Rating System
A rating system will be implemented for player kills. The exact mechanics are yet to be defined, but it will likely award **3 points for kills** and **-1 point for deaths**.
