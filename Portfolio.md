 # Steam Test plan

#### Test planner: Erik, Test executor: Erik

- Enviroment: Windows 10
- Project: Steam launcher version 1690583737
- Date: 09.08.2023

> General preconditions: Steam launcher is installed and operational, valid steam account is logged in.

## Test cases

### 1. TC001 Functional

**Listing for sale and then removing an item for under 3.00$ on the Steam Community Market.**

#### **Test objective**

Verify that users can effectively navigate and succesfully execute the process of listing an item for sale, and remove it on the Steam Community Market.

#### **Test Preconditions**

Steam guard on user's mobile steam app is linked for more then 7 days, the user have at least one tradable item in the inventory.	

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app |   The steam app launches and library page show up | As expected | Pass | - |
| Hover over the "Community" section and navigate to Steam community market | Community market page shows up | As expected | Pass | - |
| Press on the "Sell an item" button | User inventory shows up asking to chose an item | As expected | Pass | - | 
| Choose the tradable item you wish to sell and click the "Sell" button below the item description | Menu shows up, displaying a graph of recent sales and the median price. Located in the bottom of the screen there is a checkbox with URL to "Steam Subscripition Terms" | As expected | Pass | - |
| Enter 2$ in the provided box where it asks your selling price. Then, check the box confirming your agreement to the terms and click on the 'Ok, put it up for sale' button located at the bottom of the menu. | A confirmation menu appears displaying the amount you will receive from the sale and the amount the buyer will pay. Two buttons labeled 'Ok' and 'Back' are located at the bottom of the menu. | As expected | Pass | - |
| On the confirmation screen click on the "Ok" button located at the bottom of the screen | The user directed back to his inventory to select another item for sale. Upon closing the inventory, in the upper section of the main market page, in the 'My Sell Listings' category appears your listed item, its listed price, the date of listing, and a 'Remove' button | As expected | Pass | - |
| Click on the 'Remove' button located on the right side of the listed price. | A confirmation menu appears with 2 options: 'Yes remove my listing' and 'Back' | As expected | Pass | - |
| Click 'Yes remove my listing' in the confirmation menu. | The item disapears from the 'My Sell Listings' category and return to the user's inventory. | As expected | Pass | - |

### 2. TC002 Functional

**Creating a Game Collection and adding there games in the Steam Library**

#### **Test objective**

Verify the successful creation of a collection in the Steam Library, ensuring that users can organize and manage their games effectively by grouping them into collections for easy access and categorization.

#### **Test Preconditions**

The user have at least one game in the Steam library

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Hover over the 'Library' section and click 'Collections' | Page appears displaying 'Your Collections' along with a button labeled 'Create a New Collection'. | As expected | Pass | - |
| Click on the 'Create a new collection' button | A menu appears prompting you to name your collection and select between a regular collection and a dynamic collection. | As expected | Pass | - |
| In the field where the collection name is required, enter "Erik Collection 1" and then click on the 'Create Collection' button. | The user is redirected to their collection, and the page displays the message "Drag games here to build this collection. | As expected | Pass | - |
| Right-click on the game in your library, then hover over 'Add to,' and finally, click on 'Erik Collection 1.' | Game appears in the collection page | As expected | Pass | - |

### 3. TC003 Negative

**Installing game from the library with insufficient disk space**

#### **Test objective**

Verify the behavior of the Steam client when attempting to download a game with insufficient disk space.

#### **Test Preconditions**

The user has 10 gigabytes of available space on their 'C:' disk. The user have game in their library that requires 30 gigabytes of space but currently not installed on their device

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Left click on the game that you have in the library | The game page appears with an 'Install' button. | As expected | Pass | - |
| Click on the 'Install button' | A pop-up menu appears with installation options, including checkboxes for 'Create desktop shortcut' and 'Create start menu shortcut,' as well as options to select the installation disk for the game. | As expected | Pass | - |
| Choose the 'C:' disk and click install | Under the disk selection options, an inscription appears that says "Not enough space." Additionally, a warning symbol appears next to the 'C:' disk option in the menu and the 'install' button is unclickable. | As expected | Pass | - |

### 4. TC004 Functional

**Filtering mature content from the Steam store and Steam community**

#### **Test objective**

Validate the effectiveness of the mature content filter feature within the Steam platform, ensuring that it accurately filters out and prevents the display of mature or inappropriate content to users who have the filter enabled

#### **Test Preconditions**

The user does not have any filters activated at the moment.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Left click on 'Manage account' in the upper right side of the Steam page | The account options pop up with the following selections: 'View My Profile,' 'Account Details,' 'Store Preferences,' 'View My Wallet,' 'Change Account,' and 'Sign Out of Account.' | As expected | Pass | - |
| Click on 'Store preferences' | The Preferences settings page appears, with the "Mature Content Filtering" option positioned at the top. All of the checkboxes are checked. | As expected | Pass | - |
| Uncheck the 'General Mature Content' checkbox in both the 'Community' and 'Store' sections. | All of the checkboxes in the 'Store' and 'Community' sections are unchecked. | As expected | Pass | - |
| Navigate to the Steam Store and conduct a search for 'GTA V' as an example of a mature game. | Upon clicking the search button, the game 'GTA V' does not appear in the search results. Instead, an inscription appears indicating how many titles were excluded based on your preferences. | As expected | Pass | - |
| Navigate to the 'Community' tab and in the 'Find hubs' search bar conduct a search of 'Red dead redemption 2' as an example of a mature game. | A warning menu pops up, displaying the message: "This game contains content you have asked not to see, General mature content." The menu offers two options: "View the Community Hub" or "Go back to the main 'Community' tab page." | As expected | Pass | - |

### 5. TC005 Negative

**Attempting to Purchase an Item Bundle from the Point Shop with Insufficient Points**

#### **Test objective**

Verify the behavior of the Steam Point Shop when a user attempts to purchase an item bundle without having the required number of points, ensuring that the user is notified of the insufficient points and that the transaction is appropriately declined.

#### **Test Preconditions**

The user's point balance is 10,000 points, and the Point Shop contains an item bundle with a cost higher than the user's available point balance.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Hover over the 'Store' tab and click on 'Points shop' option | The Points shop page shows up on the screen | As expected | Pass | - |
| In the selection menu on the left, choose and click on the 'Item bundle' option | A page appears, displaying all available for purchase item bundles. | As expected | Pass | - |
| Scroll until the end of the page and select "Dota 2 complete item bundle" | The Item Bundle page appears, displaying the bundle price and listing all the items included in the bundle. | As expected | Pass | - |
| Click on the button that displays price of the bundle | A menu pops up, showcasing the contents of the bundle. At the bottom of the menu, it shows the additional points needed by the user to purchase the bundle. Below that, there are two buttons: 'How to Get Points' and 'Go Back.' | As expected | Pass | - |

### 6. TC006 Security

**Brute Force attempt to log into account without knowing the password**

#### **Test objective**

Verify the security measures in place to prevent unauthorized access through brute force attempts, ensuring that the Steam platform safeguards user accounts against malicious login attempts.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Log out from your account | The login interface appears, featuring boxes for entering the username and password, along with a "Sign In" button. | As expected | Pass | - |
| Enter valid username and a wrong password | Red inscription appears "Please check your password and account name and try again" | As expected | Pass | - |
| Repeat step 2 15 times | An error message appears, displaying the text: "Something went wrong while attempting to sign you in. Please try again later."  | As expected | Pass | - |
| Repeat step 2 one more time | The error message consistently appears after every attempted login, imposing a 1-minute cooldown period between login attempts. | As expected | Pass | - |

### 7. TC007 Portability

**Checking if Text Message Sent to a Friend on the Launcher Appears on the Steam Website**

#### **Test objective**

Verify the synchronization and consistency of text messages sent to a friend through the Steam launcher, ensuring that messages sent on the launcher also appear accurately on the Steam website.

#### **Test Preconditions**

The Steam website is accessible and operational, the user have at least one friend on the steam account, and the user is logged into the same Steam account on the website as in the launcher.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Click on 'Friends' tab in the upper left side of the app | A selection appears that allows you to view your friends list, your status, and edit your profile name or avatar. | As expected | Pass | - |
| Click on 'View friends list' | A new tab displaying your friends list appears. | As expected | Pass | - |
| Right click on one of the friends from the list | Options for interacting with the friend you clicked on appear. | As expected | Pass | - |
| Click on the 'Send message' option | A new tab opens, displaying the chat conversation between the user and the friend. | As expected | Pass | - |
| Write in the chat "Hello" to the friend and press Enter | The message sent and appears in the chat conversation | As expected | Pass | - |
| Open the web browser and navigate to Steam website | The Steam website is opened, and it is displaying the store page | As expected | Pass | - |
| Click on 'Chat' tab on the main page | Steam chat opens and on the left side is your friend list | As expected | Pass | - |
| Double left-click in the friend list on the friend to whom you wrote a message. | The chat conversation appears, displaying the message "Hello" that the user sent from the Steam launcher. | As expected | Pass | - |

### 8. TC008 Configuration

**Enabling Steam Launcher to Run on Computer Startup**

#### **Test objective**

Verify the functionality of the option to enable the Steam launcher to run automatically when the computer starts up, ensuring that the Steam launcher successfully launches upon computer boot.

#### **Test Preconditions**

The user has turned off the option to run Steam on startup.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Click on the 'Steam' button in the left corner of the screen | A selection menu appears, offering the option to navigate to the settings. | As expected | Pass | - |
| Click on 'Settings' option | A new tab opens, displaying the Steam launcher settings menu. | As expected | Pass | - |
| Navigate to 'Interface' section and click on the gray button near the option 'Run steam when my computer starts' to turn it on. | The button that the user clicked on turns blue, indicating that the option is now turned on. | As expected | Pass | - |
| Shut down the steam launcher | The Steam launcher shuts down and is not an active. | As expected | Pass | - |
| Restart your computer | Upon computer startup, the Steam launcher successfully launches and opens as expected showing the library page. | As expected | Pass | - |

### 9. TC009 Localization 

**Changing Time Format When Switching Interface Languages on Steam Client**

#### **Test objective**

Verify that the time format displayed on the Steam client changes accordingly when switching between different interface languages, ensuring that the time format remains consistent with the selected language.

#### **Test Preconditions**

User's Steam client interface language is English, the user understand Russian language, the user have at least one friend on Steam

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Click on 'Friends' tab in the upper left side of the app | A selection appears that allows you to view your friends list, your status, and edit your profile name or avatar. | As expected | Pass | - |
| Click on 'View friends list' | A new tab displaying your friends list appears. | As expected | Pass | - |
| Right click on one of the friends from the list | Options for interacting with the friend you clicked on appear. | As expected | Pass | - |
| Click on the 'Send message' option | A new tab opens, displaying the chat conversation between the user and the friend. | As expected | Pass | - |
| Write in the chat "123" to the friend and press Enter | The sent message appears in the chat conversation, and above the message, the time stamp displays the current time in a 12-hour format, with "am" or "pm" indicating the time of day. | As expected | Pass | - |
| Click on the 'Steam' button in the left corner of the screen | A selection menu appears, offering the option to navigate to the settings. | As expected | Pass | - |
| Navigate to 'Interface' section and click on 'Steam client language' | A selection menu appears, offering a choice of languages to select from. | As expected | Pass | - |
| Click on 'Russian' | A pop-up message appears, indicating that a restart of the Steam client is required. The message provides two options: "Restart Now" or "Restart Later." | As expected | Pass | - |
| Click on 'Restart now' option | The Steam client restarts, and the main Steam page is now displayed in the Russian language. | As expected | Pass | - |
| Repeat steps 2-5 | When the chat conversation tab pops up, the time stamp on the message now displays in 24-hour format. | As expected | Pass | - |

### 10. TC010 Negative

**Launching the steam launcher, opening the store, and trying to install game without an active internet connection**

#### **Test objective**

Explore the behavior of launching the Steam client without an active internet connection.

#### **Test Preconditions**

The user have at least one not installed game in the library.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Disable your internet connection and launch steam launcher | The Steam launcher launches in windowed mode, displaying the Library page. At the bottom of the screen, a message appears indicating "No connection." | As expected | Pass | - |
| Navigate to the 'Store' tab | An error message appears: "Unable to connect to the server. The server may be offline, or you may not be connected to the internet." | As expected | Pass | - |
| Navigate back to the library page and choose one not installed game. | The game page appears, but the news and updates for the game fail to load on the page. | As expected | Pass | - |
| Click the blue 'Install' button on the game page | An error message pops up, stating: "An error occurred while installing *game name*: No internet connection." | As expected | Pass | - |

### 11. TC011 Fail and recovery

**Resuming Game Installation After Disconnecting and Reconnecting Internet**

#### **Test objective**

Verify the behavior of the Steam launcher when a game installation is started, the internet connection is disconnected, and then reconnected to resume the installation, ensuring that the installation process handles interruptions and recovery correctly.

#### **Test Preconditions**

The user have at least one not installed game in the library, the user have enough space on the disk to install the game.

### Execution

| Steps                 | Expected result | Actual result | Pass/Fail | Details
| :-------------------- | :------ | :----: | :----: | :----: |
| Launch the steam app | The steam app launches and library page shows up | As expected | Pass | - |
| Navigate to the library page and choose one not installed game. | The game page appears with an blue 'Install' button in the center. | As expected | Pass | - |
| Click 'Install' | A menu pops up, displaying installation options such as selecting the disk on which the user wants to install the game and choosing shortcut options. | As expected | Pass | - |
| Select your disk and click 'Install' button on the bottom of the menu | The user is directed back to the main game page. The "Install" button switches to a "Pause" button, and next to it, the installation progress of the game is displayed. | As expected | Pass | - |
| Disconnect your internet connection | The progress of the installation stops, and the interface indicating the amount of data that has been downloaded remains stuck at a single number. | As expected | Pass | - |
| Connect back to the internet | The installation progress resumes smoothly without any interruptions. | As expected | Pass | - |