import { Locator, Page } from "@playwright/test";

export class InventoryPage{
    private readonly inventoryItem: Locator;
    private readonly shopinCartCount: Locator;
    private readonly cartButton: Locator;

    constructor(readonly page:Page){ 
        this.inventoryItem = this.page.getByTestId('inventory-item');
        this.shopinCartCount = this.page.getByTestId('shopping-cart-badge');
        this.cartButton =  this.page.getByTestId('shopping-cart-link')
    }

    async clickElementLinkByTitle(title: string):Promise<void>{
        await this.inventoryItem.filter({hasText:title}).getByRole('link').click();
    }

    async addElementToCartByIndex(index: number = 0):Promise<void>{
        await this.inventoryItem.nth(index).getByRole('button',{name:'Add to cart'}).click()
    }
    
    async getItemsAddedToCart():Promise<number>{
        return Number(
            await this.shopinCartCount.textContent()
        );
    }

    async clickCartButton():Promise<void>{
        await this.cartButton.click();
    }
}