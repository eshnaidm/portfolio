# MyLittleFarm Game design document
## Game essence
- **The essence of the MyLittleFarm mini-game** is for players to develop a farm by buying plants, animals, and structures. 

- The farm is divided into sub-locations, each with its NPC and specific active tasks. These NPCs will be unlocked as the player progresses through the questline.

- There will be a **questline** on the farm, which is essentially a **task system**.

- Tasks will **replace** achievements, providing a monetary reward for quest completion (similar to achievements).

- After completing a specific questline, a new location with a new NPC and active task will be unlocked.

- The NPC, in turn, will give the player a new questline.

- The **goal** of the game remains unchanged: to buy everything on the farm (which, by the way, will only be possible by completing the full list of quests).

- The **core mechanics** remain the same: players buy crops that generate a certain income per second, and the game still remains semi-AFK simulator.
## Active Task System
### General Principles
**List** of active tasks in the mode: grass breaking, tree cutting, mining, fishing, cargo hauling.

Tasks such as **grass breaking** and cargo **hauling will** be upgraded through a menu for a certain amount.

For other tasks, **player statistics** are introduced. The player will have the following characteristics: **tree cutting, mining, and fishing**.

At the beginning of the game, each characteristic starts at level 0. By performing the corresponding active task, the player can increase their characteristics. 

The characteristics determine the **speed of tree chopping** (for lumberjacking), the **speed of ore breaking** (for mining), and **the speed of fish catching** (for fishing). 

The maximum level for each characteristic is 50. Every 10 levels, the player takes their tool to the **workshop**, where it is upgraded for money and a certain amount of time (preventing the pumping of the characteristic to level 50 on the first day). 

If the player tries to work with the old tool after reaching the level where they need to upgrade it, they will not gain experience for the task, preventing the player's development in both experience and the appearance of acquired resources.

#### Fatigue

There will be a **fatigue mechanic**. The player will have a fatigue value, initially set to zero. Each block mined adds +1 to the fatigue value, which gradually decreases (-1 every two seconds if the player is not breaking anything). 

The value will start decreasing after 10 seconds when the player stops breaking blocks, decreasing by one unit every 2 seconds. 

When the player increases the fatigue value by breaking a block, fatigue will be added at the following values, preventing the player from breaking blocks:
- 240-260 - 1%
- 260-280 - 3%
- 300-320 - 5%
- 320-340 - 10%
- 340-360 - 15%
- 360-380 - 20%
- 380-399 - 25%
- 400 - 100%

Fatigue is relieved when the fatigue value reaches 100.

### Grass Breaking

The player has grown grass in their barn, and their sole task is to cut it. 

### Cargo Hauling

There are four warehouses from which the player carries a cargo block to a truck. For each delivered block, the player receives a certain amount of money. 

The amount depends on the weight of the cargo and the distance between the warehouse from which the cargo was carried and the truck. 

The box is randomly issued to a random warehouse and has a random weight.

For money (similar to grass), the player improves characteristics such as **cargo value** (affects the amount of money from one cargo, like a modifier) and **cargo capacity** (allows the player to move faster, i.e., reduces the slowdown coefficient).

### Lumberjacking

In the northern part of the map, there is a forest where the player can harvest wood. The player has an axe. 

When the player reaches every 10th level (10, 20, 30, 40, 50), the axe can be upgraded in the workshop for money and time. 

The lumberjacking characteristic affects the speed of tree chopping, and the appearance of the axe affects the appearance of the chopped trees.

When chopping a tree, the player obtains the appearance of that tree. The wood will be used for building structures, completing quests, and upgrading tools.

Types of trees and types of axes used to chop them:

- Oak (initial axe)
- Birch (axe with level 10)
- Spruce (axe with level 20)
- Dark Oak (axe with level 30)
- Acacia (axe with level 40)
- Tropical Tree (axe with level 50)

### Mining

Through the forest, there are five scattered mines/caves. In the mine, players extract ores that are processed in the workshop into corresponding ingots, stones, and more. 

The player has a pickaxe. When the player reaches every 10th level (10, 20, 30, 40, 50), the pickaxe can be upgraded in the workshop for money and time. 

The mining characteristic affects the speed of extracting minerals, and the appearance of the pickaxe affects the appearance of the extracted ores. 

Ores spawn in mines with a certain percentage and depending on the pickaxe level (only ores that the player can break spawn).

Additionally, ingots, alloys, stones, and more are used in constructions, quests, and jewelry making. In the workshop, from certain resources from the mine, players can create **precious jewelry** and sell them for money.

Types of ores, their smelting, and types of pickaxes used to break them:

- **Stone** (without smelting). Broken with the initial pickaxe. Used in construction.
- **Coal** (without smelting). Broken with the initial pickaxe. Used in the workshop as fuel (in smelting).
- **Iron Ore → Iron Ingot** (10 iron ore, 1 coal, 1 minute). Broken with a pickaxe at level 10. Used in construction and jewelry making.
- **Copper Ore → Copper Ingot** (10 copper ore, 1 coal, 1 minute). Broken with a pickaxe at level 10. Used in construction and jewelry making.
- **Silver Ore → Silver Ingot** (10 silver ore, 2 coal, 1 minute). Broken with a pickaxe at level 20. Used in jewelry making.
- **Quartz Ore → Quartz** (10 quartz ore, 2 coal, 1 minute). Broken with a pickaxe at level 20. Used in construction.
- **Gold Ore → Gold Ingot** (10 gold ore, 3 coal, 1 minute). Broken with a pickaxe at level 30. Used in jewelry making and construction.
- **Amethyst Ore → Amethyst** (10 amethyst ore, 3 coal, 1 minute). Broken with a pickaxe at level 30. Used in jewelry making.
- **Platinum Ore → Platinum** (10 platinum ore, 4 coal, 1 minute). Broken with a pickaxe at level 40. Used in construction and jewelry making.
- **Emerald Ore → Emerald** Broken with a pickaxe at level 40 (10 emerald ore, 4 coal, 1 minute). Used in jewelry making.
- **Titanium Ore → Titanium Ingot** (10 titanium ore, 5 coals, 1 minute). Broken with a pickaxe at level 50. Used in construction.
- **Diamond Ore → Diamond** (10 diamond ore, 5 coals, 1 minute). Broken with a pickaxe at level 50. Used in jewelry making.

### Fishing

The player has 8 types of fish that can be caught with one fishing rod. 

Fish do not differ in any parameters except for their name; their value is calculated based on a **fixed multiplier** multiplied by passive income and the **weight modifier**. 

The **weight modifier** at level 0 has a range of 0.9-1.1, with each level adding 0.01 to the boundaries (0.91-1.11 at level 1, and so on). 

That is, leveling up gives a modifier addition to weight. Upon upgrading the fishing rod, the player unlocks new 8 types of fish that are more expensive (**higher fixed multiplier**) and continues to improve the weight modifier.

Changes to the fishing mechanics: when a fish is hooked, a meter appears at the bottom (between the HP and hunger bars, above the experience bar) showing when it is best to reel it in (from green to red). 

If reeled in too early or too late, the fish will escape or the line will break. The weight of the fish should determine the difficulty and timer to catch it using this mechanism. 

The difficulty of catching depends not just on the weight but on how this weight relates to the range of your current caught weight (i.e., 1.1 with a weight range of 0.9 and 1.1 is difficult, while 1.2 with a weight range of 1.2 and 1.4 is easy). 

Also, with a low chance, the player can catch trash that will be worth nothing.

The player enters fishing through the NPC fisherman Henry on their farm, and returns home through NPC fisherman Henry at the fishing spot.

## Locations

### General Principles

On the farm, there will be three sub-locations, each with its NPCs, active tasks, and questlines. 

To access the NPCs in a new location, the player will need to complete the questline in the previous one.

Additionally, at the center of the map, there will be a stand with a farm map that players can use for orientation.

### South Part

**NPC: Grandma Lyuda**

Active Tasks: Grass cutting, Tree cutting, Mining.

Crops and productions list:

1) Wheat → Bread
2) Potato → Baked potato
3) Carrot → Carrot juice
4) Sugar cane → Sugar
5) Tea leaf → Tea
6) Onion → Onion rings
7) Grape → Wine
8) Raspberry → Raspberry jam
9) Cotton → Cotton fiber
10) Strawberry → Strawberry jam

### West Part

**NPC: Mihalych**

Active tasks: Fishing (with a dedicated NPC on this location - Fisherman Henry)

Crops and production list:

1) Tulip → Tulip Bouquet
2) Flax → Yarn
3) Corn → Corn Chips
4) Sunflower → Sunflower Oil
5) Cocoa Beans → Cocoa Powder
6) Hops → Premium Hops
7) Rose → Rose Bouquet
8) Tomato → Ketchup
9) Peony → Peony Bouquet
10) Currant → Currant Juice

### East Part

**NPC: Koryagin**

Active tasks: Cargo hauling

List of **Trees**, their Fruits (products) and productions:

**Tree** - a structure that functions like a plant. Generates passive income. 

After purchasing the eighth tree, products are delivered to the warehouse.

1) Cinnamon Tree (cinnamon) → Ground Cinnamon
2) Apple Tree (apple) + sugar + dough + egg → Apple Charlotte
3) Peach Tree (peach) + sugar + ground cinnamon + milk → Peach Smoothie
4) Pear Tree (pear) + dough + cheese + pork → Pear Pizza
5) Orange Tree (orange) + ground cinnamon + dough + sugar → Orange Cake

### North Part

The northern part will not have plants, animals, or trees.

It consists of a forest for lumberjacking and mines in the forest for mining.

Additionally, in the forest, there will be a lake where fish will appear depending on the amount of fish caught during fishing.

## Animals

Animals, much like plants, generate passive income and produce products that can be utilized later in production structures.

1) Chicken → Egg
2) Rabbit → Rabbit hide
3) Sheep → Wool
4) Pig → Pork
5) Cow → Milk
6) Mushroom cow → Mushroom
7) Bee → Honey
   
## Production recipes

1) Wheat → Dough (Bakery)
2) Potato → Baked Potato (Bakery)
3) Carrot → Carrot Juice (Bar)
4) Sugar Cane → Sugar (Factory)
5) Tea Leaf → Tea (Café)
6) Onion → Onion Rings (Bar)
7) Grape → Wine (Bar)
8) Raspberry → Raspberry Jam (Factory)
9) Cotton → Cotton Fiber (Sewing Workshop)
10) Strawberry → Strawberry Jam (Factory)
11) Tulip → Tulip Bouquet (Flower Shop)
12) Flax → Yarn (Sewing Workshop)
13) Corn → Corn Chips (Bar)
14) Sunflower → Sunflower Oil (Factory)
15) Cocoa Beans → Cocoa Powder (Factory)
16) Hops → Premium Hops (Bar)
17) Rose → Rose Bouquet (Flower Shop)
18) Tomato → Ketchup (Café)
19) Peony → Peony Bouquet (Flower Shop)
20) Currant → Currant Juice (Bar)
21) Cinnamon → Ground Cinnamon (Café)
22) Apple + Sugar + Dough + Egg → Apple Charlotte (Bakery)
23) Peach + Sugar + Ground Cinnamon + Milk → Peach Smoothie (Bar)
24) Pear + Dough + Cheese + Pork → Pear Pizza (Café)
25) Orange + Ground Cinnamon + Dough + Sugar → Orange Cake (Bakery)
26) Rose Bouquet + Tea Leaf → Hibiscus Tea (Café)
27) Milk → Cheese (Factory)
28) Sunflower Oil + Potato → Fried Potato (Bar)
29) Wheat + Premium Hops → Beer (Bar)
30) Cocoa Powder + Sugar → Chocolate (Factory)
31) Corn + Wheat → Corn Flatbread (Café)
32) Pork + Tomatoes + Baked Potato + Cheese → French-Style Pork (Café)
33) Wine + Rose Bouquet + French-Style Pork → Romantic Dinner (Café)
34) Corn Chips + Beer + Ketchup + Fried Potato → Soul of the Party (Bar)
35) Milk + Sugar → Yogurt (Factory)
36) Apple + Strawberry + Peach + Yogurt → Fruit Salad (Café)
37) Fruit Salad + Currant Juice → Fruit Delight (Café)
38) Dough + Sugar → Pancake (Bakery)
39) Dough → Bread (Bakery)
40) Bread + Raspberry Jam → Bread with Jam (Bakery)
41) Pancake + Carrot Juice + Bread with Jam → Champion's Breakfast (Café)
42) Dough + Sugar + Milk + Honey → Honey Cake (Bakery)
43) Dough + Chocolate → Chocolate Cookies (Bakery)
44) Tea + Honey Cake + Chocolate Cookies → Cozy Teatime (Bar)
45) Rabbit Hide + Cotton Fiber → Fur Coat (Sewing Workshop)
46) Wool + Yarn → Sweater (Sewing Workshop)
47) Fur Coat + Sweater → Winter Fashion (Sewing Workshop)
48) Ketchup + Tomato + Corn Flatbread + Mushroom + Pork + Onion Rings → Shawarma (Bar)
49) Mushroom → Braised Mushrooms (Factory)
50) Strawberry Jam + Dough → Bun with Jam (Bakery)
51) Egg + Milk + Sugar + Honey → Chak-Chak (Bakery)
52) Honey + Premium Hops + Ground Cinnamon → Mead (Bar)

## Jewelry recipes (Crafting in the workshop)

1) Iron Ingot → Iron Chain
2) Copper Ingot → Copper Bracelet
3) Silver Ingot → Silver Brooch
4) Silver Ingot → Silver Necklace
5) Gold Ingot → Gold Earrings
6) Gold Ingot → Gold Ring
7) Amethyst + Silver Brooch → Amethyst Brooch
8) Amethyst + Gold Ring → Amethyst Ring
9) Platinum Ingot → Platinum Pendant
10) Platinum Ingot → Platinum Ring
11) Emerald + Platinum Pendant → Emerald Pendant
12) Diamond + Platinum Ring → Diamond Ring

## Buildings

### Production Buildings

#### Warehouse (available from the beginning of the game):

A building that will be responsible for the menu that the player currently has through the inventory. 

The menu will be available only through the building itself.

Initially level 1, upgradeable to level 5.

##### Product limits per levels:
- Level 1: 25
- Level 2: 50
- Level 3: 75
- Level 4: 100
- Level 5: 200

##### Upgrade time: 
- 1→2 - 20 minutes, 
- 2→3 - 40 minutes, 
- 3→4 - 60 minutes, 
- 4→5 - 90 minutes.

#### Workshop:

A building where players buy blueprints for the construction of future buildings for money. 

Buildings and decorative structures below are built when the purchased blueprint is available, along with the necessary materials!!! 

Also, players upgrade tools there. The workshop itself is built without a blueprint; only materials from active jobs and money are needed. 

Materials for crafting: stone, oak, $5000.

### Blueprint list

**Bakery (Processing Building):**

Materials for crafting: stone, oak.

**Bar (Processing Building):**

Materials for crafting: stone, oak, iron ingot.

**Factory (Processing Building):**

Materials for crafting: iron ingot, stone, copper ingot, birch.

**Cafe (Processing Building):**

Materials for crafting: stone, iron ingot, copper ingot, birch.

**Sewing Workshop (Processing Building):**

Materials for crafting: copper ingot, quartz, stone, birch, spruce.

**Flower Shop (Processing Building):**

Materials for crafting: stone, copper ingot, quartz, spruce, dark oak.

### Decorative buildings

**Well:**

Decorative structure, gives 1.1x to income.

Materials for crafting: stone, oak.

**Golem Statue:**

Decorative structure, gives 1.2x to income.

Materials for crafting: iron ingot, stone.

**Globe:**

Decorative structure, gives 1.3x to income.

Materials for crafting: copper ingot, iron ingot.

**Eternal Flame:**

Decorative structure, gives 1.4x to income.

Materials for crafting: quartz, copper ingot.

**Golden Angel:**

Decorative structure, gives 1.5x to income.

Materials for crafting: gold ingot, quartz.

**King Arthur's Sword:**

Decorative structure, gives 1.6x to income.

Materials for crafting: platinum, gold ingot, iron ingot, stone.

**Tree of Eywa (from the movie "Avatar"):**

Decorative structure, gives 1.7x to income.

Materials for crafting: tropical wood, acacia.

**Colossus of Rhodes:**

Decorative structure, gives 1.8x to income.

Materials for crafting: titanium ingot, platinum, gold ingot.

## Visit to a friend's farm

On the map, there will be a bus with an NPC. 

When the player clicks on the NPC, a menu pops up, and the player enters the nickname of the person they want to visit. 

After that, the player is teleported onto the bus, the screen darkens, and then the player appears on the other person's farm near the bus NPC.

## Events

1) Drought (summer, autumn) - Reduces passive income from crops by 50%. To remove this effect, the player needs to provide a bucket of water to each NPC near the garden beds.
2) Morning dew (summer, spring) - Increasing grass cutting income by 25%
3) Blossoming (spring, summer) - Increasing crops passive income by 50%
4) Muck (spring, summer, autumn) -  The player becomes dirty, every NPC will refuse to engage in conversation until they immerse themselves in water and clean up.
5) Drowned (spring, summer, autumn) -  If the player stays in the water for too long, they become drowned. To remedy this, they need to spend some time out of the water.
6) Bustle (spring, summer) - Animals producing products in x2 speed, increasing their passive income by 50%.
7) Famine (year-round) - Animals become hungry, ceasing product production and reducing passive income by 50%. To rectify this, the player needs to provide a bowl of food to every NPC near them.
8) Flu (winter) - if the player is outdoors, there is a chance of getting the Flu event (formula with muck, NPCs don't interact with the player). To remove: enter the house, spend 4 in-game hours in the house (10 minutes real-time). 
9) Claustrophobia works the same way as the flu, but if the player is indoors. To remove, stand outside for 4 in-game hours.
10) Hoarfrost (winter) - grass gives x3 money. Can drop from 4 a.m. to 12 p.m. in real life (same as morning dew, but in winter).
11) Malfunction (year-round) - a random production branch breaks, the event does not stack. Completely stops a specific production. The debuff is fixed if the player takes a wrench from the granny and clicks on the NPC.
12) Taxation (year-round) - once every 30 hours of online play, 40% of the balance will be deducted from the player.
13) Hour of Reckoning (year-round) - The player needs to pay 10x of his passive income to continue playing.
14) Productivity (year-round) - increases processing speed and plant production speed by 20%.
15) Strike (year-round) - reduces processing and plant production speed by 50%. To get rid of the event, talk to NPCs in a randomly set order. 

(Trying to talk to an NPC out of turn will make them send you away, for example: "I don't want to talk to you until you settle things with others.")

## Items

**Axe (Tree cutting)** - issued immediately.

**Pickaxe (mining)** - issued immediately.

**Fishing rod (fishing)** - Need to be purchased from the workshop

**Phone** - opens a contact list, in which the player selects the desired NPC, and after selection, the corresponding menu opens.

**Farmer's Diary** - 

- A book that stores information about plants, buildings, and animals. 

- All of this is revealed during the game. 

- All information about a crop appears only when the player has acquired that crop. Functions as a mini-wiki.

**Calendar** - Show the date and season

## Holidays

### Winter

#### New Year 

(lasts 8 days, from December 31 to January 7) - a Christmas tree appears in the square. 

Individually for each player, 12 gifts will be placed on their farm. 

From the gifts, three hats can drop, which can be obtained and worn only during this holiday (cannot be repeated), as well as passive income ranging from 3 to 10 minutes in the form of a monetary amount.

NPCs on the farm will wear Christmas hats.

**Christmas hats from gifts:**

**Santa's Hat** (works only on New Year's, i.e., the hat will not work outside of the holiday) - immunity to the flu + flight + Christmas hat.

**Grinch Mask** (works only on New Year's) - after wearing it, 3 more gifts spawn on the farm (was 12 in total, becomes 15).

**Ice Crown** (works only on New Year's) - the "Blizzard" event avoids the player, the chance of hoarfrost increases by 1.5 times.

From one of the 12 gifts, a player will randomly receive a Christmas ornament, which they can place in the gift block under the tree. 

Ornaments will provide a global booster during this event: every 10 ornaments increase the global income booster by 0.1x (1.1x booster at 10 ornaments, 1.2x at 20, etc.), global production speed increases by +2%, and global crop export speed increases by +2%. 

The maximum number of ornaments that can be placed in the gift block is 100.

#### Valentine's Day 

(February 14, three days) - a big heart appears in the square <3. 

Players can give three Valentines, write something cute <333.

If you give someone a Valentine, and they give it back to you, you can earn income for your farm by being on the "lover's" farm during the holiday.

#### Maslenitsa 

(February 25 - March 3) - a scarecrow appears in the square. Players will receive 1.2x income, and production speed will increase by +10% if the player is in the square. 

Pancakes from their farm will be sold for twice the price.

Pancakes will also be sold in the square. The cost of one pancake is 45 minutes of passive income for the player. 

The maximum number of pancakes a player can buy is 5. The player can give a pancake to an NPC with plants/trees, an NPC with an animal, or an NPC on a building on their farm. 

If the player gives a pancake to an NPC with a plant/tree, the income from the crop will double; 

if the pancake is received by an NPC with an animal, the production speed will increase by 1.25 times; if the player gives a pancake to an NPC with a building, +25% to the speed of exporting crops and processing. 

During the holiday, it is also not possible to sell meat products (pork, pear pizza, French-style pork, romantic dinner, shawarma).

### Spring

#### May Day 

(May 1, three days) - while the player is actively working, flowering occurs (flowering fades if the player is not actively working for 1 minute). 

Cargo transfer, grass, and fishing give 1.5 times more income. 

An NPC with barbecues appears in the square, which can speed up the production of meat production by 2 times

(click on the barbecue, and a menu appears where you can make meat production (pear pizza, French-style pork, romantic dinner, shawarma) for the time that is twice less in a building on the farm).

During the holiday, introduce temporary leaderboards for the caught fish (fishing), carried cargoes (cargo hauling), and broken grass (grass). 

According to these three leaderboards, boosters will be given on the next day after the holiday (May 4, 1 real hour) as follows:
- Top-1 - x3 to caught fish (fishing top), x3 to cargo (cargo hauling top), x3 to grass (grass top).
- Top-2 - x2 to fish, cargo, and grass (similarly).
- Top-3 - x1.5 to fish, cargo, and grass (similarly).

### Summer

#### Farm Day 

A big cake appears in the square. During this holiday, negative events will not be imposed on players.

The processing speed of products, the export of crops, and the production of animal products increase by 20%.

Honey cake will be sold for 1.5 times the price.

NPCs on the farm will wear festive hats.

During mining and logging, players have a chance to receive a **gift**. 

They must bring this **gift** to the cake in the square and click on it with the gift. After clicking with the gift on the cake, one candle appears. 

The maximum number of candles on the cake can be 100. Every 10 candles add +0.05x to the global booster (1.05x for 10 candles, 1.1x for 20, 1.5x for 100).

Players can wear hats of a certain color through an NPC in the square (opens a menu with hats of different colors, the player chooses their own).

### Autumn

Halloween 

(October 31, seven days) - a large pumpkin appears in the square.
The "Nightmares" event may occur, which resets income, stops production, processing, and export. 

It can be removed by "playing dead" and getting a drowned event, and then removing it.

Players receive 10 candies and a basket in their inventory. 

Players can poke another player once with a candy to give 1 candy (if you try to poke a player with candy again, they will refuse) into the basket of another player, and the basket will count the number of candies. 

From this, players will receive a local boost +0.1x from every 10th candy in their basket (1.1x booster with 10 candies, 1.2x with 20, etc.), local production speed increases by +2%, and local crop export speed increases by +2%. 

The maximum number of candies a player can collect in the basket is 100. When a player gives a candy, they get +2% to the processing speed (give all 10 candies - get +20% to the speed).

## Square

Square - a place where players can gather. In winter, there will be a hockey rink on the square, and the rest of the time, there will be a football field instead. 

Players can play hockey/football. There will be benches where players can sit (two at a time). There will be mini-games to pass the time for fun.

### List of games on the square:

1) Checkers 1vs1
2) Whack-a-Mole (Leaderboard for moles per game)
3) Parkour (Leaderboard by time, disables fly in the area)
4) Dropper (Disables fly in the area)
5) Races around the square (for 4 players)
6) Tic-Tac-Toe

## Daily Login

- Day 1 - Active tasks modifier 1.25x for 1 hour
- Day 2 - Amount of money thats equals to the passsive income for 5 minutes
- Day 3 - Haste for digging for 1 hour +10%
- Day 4 - Plant production speed booster for 1 hour +25%
- Day 5 - Amount of money thats equals to the passsive income for 20 minutes
- Day 6 - Blossoming event for 30 minutes
- Day 7 - Production speed booster for 1 hour +50%

## Visual and Sound effects

### Visual effects

- Smoke
- Falling leaves
- Lying leaves (on blocks near trees)
- Glowing particles from ores (regular ore-colored particles)
- Snow (falling)
- Footprints in the snow (when walked upon with a certain chance)
- Fish animation (swimming in the player's farm lake)
- Swaying grass
- Butterflies (flying across the map except in winter)
- Bus exhaust fumes
- Dew on the grass
- Frost on windows
- Grass in frost
- Tree falling animation
- Conveyor animation at the factory (conveyor moves products when production is active at the factory)
- Light from the Christmas tree (glowing star on the Christmas tree)

### Sound effects

- Sound of a positive event
- Sound of a negative event
- Sound of lifting and lowering cargo (creaking)
- Musical themes for each location
- Musical theme for each holiday (plays only in the square)
- Splash of water when casting and retracting the fishing rod, and when interacting with water, as well as when drawing water from the well
- Campfire crackling sound (also used in the bakery and cafe)
- Chicken clucking near the chickens
- Crickets at night
- Bleating near the sheep
- Mooing near the cows (including mushroom cows)
- Buzzing of bees
- Oinking near the pigs
- Sound of hitting metal in the workshop
- Sound of the conveyor at the factory
- Sound of glasses clinking every 10 seconds in the bar
- Sound of a sewing machine in the sewing workshop
- Bus horn when approaching it
- Bus engine after the player has chosen whom to visit
- Phone beeps when opening the phone
- Sound of a falling tree
- Echo in the mine (breaking blocks, footsteps)
- Sound of flipping pages in the diary
- Sound of an overflowing backpack when the backpack is full
- SMS sound (randomly when an active quest is ongoing)
- Sound of feeding an animal
- Coughing during the flu

## NPC Dialogs

