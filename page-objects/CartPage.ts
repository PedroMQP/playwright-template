import { Locator, Page } from "@playwright/test";

export class CartPage{

    private readonly items: Locator;
    private readonly pageTittleElement: Locator;
    
    constructor(readonly page:Page){
        this.items = this.page.getByTestId('inventory-item');
        this. pageTittleElement = this.page.getByText('Your Cart');
    }

    async getItemPriceByTitle(title: string): Promise<number>{
        return  Number(
            (await this.items.filter({hasText: title}).getByTestId('inventory-item-price').textContent())
            ?.replace('$','')
        );
    }

    async removeItemByTitle(title: string): Promise<void>{
            await this.items.filter({hasText: title}).getByRole('button', {name: "Remove"}).click();
    }

    async getItemsAddedToCart(): Promise<number>{
        return await this.items.count();
    }

    async waitForPageLoaded(): Promise<void>{
        this.pageTittleElement.waitFor({state:'visible'})
    }
}