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

#### Decorative buildings

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