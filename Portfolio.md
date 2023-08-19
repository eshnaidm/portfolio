 # Test plan

#### Test planner: Erik, Test executor: Erik

- Enviroment: Windows 10
- Project: Steam launcher version 1690583737
- Date: 09.08.2023

> General preconditions: Steam launcher is installed and operational, valid steam account is logged in.

## Test cases

### 1. TC001 Functional

Listing for sale and then removing an item for under 3.00$ on the Steam Community Market.

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