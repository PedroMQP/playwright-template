import { expect, test } from "../fixtures/page-objects";

test.describe('Add element to cart with user in local storage from a fixture', async () => {
     const url = "https://www.saucedemo.com/inventory.html";
    test('Add to cart and remove elemetns with local storage', async ({po}) =>{
        await po.page.goto(url);
        await po.inventoryPage.addElementToCartByIndex(1);
        await po.inventoryPage.addElementToCartByIndex(0);
        expect(await po.inventoryPage.getItemsAddedToCart(), 'The items were not added correctly to the cart in the Inventory Page')
            .toBe(2);
        await po.inventoryPage.clickCartButton();
        await po.cartPage.waitForPageLoaded();
        expect(await po.cartPage.getItemPriceByTitle('Sauce Labs Backpack'), "The second items price added isn't correct").toBe(29.99);
        await po.cartPage.removeItemByTitle('Sauce Labs Bike Light');
        expect(await po.cartPage.getItemsAddedToCart(), 'The number of items in the cart is not correct after removing an item').toBe(1);
    });

})

