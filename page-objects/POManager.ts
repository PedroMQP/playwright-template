import {type Page} from '@playwright/test'
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';

export class POManager{
    private _loginPage?: LoginPage;
    private _cartPage?: CartPage;
    private _inventoryPage?: InventoryPage;

    constructor(readonly page: Page){}

    get loginPage(): LoginPage{
        return(this._loginPage ??= new LoginPage(this.page));
    }

    get inventoryPage(): InventoryPage{
        return(this._inventoryPage ??= new InventoryPage(this.page));
    }

    get cartPage(): CartPage{
        return(this._cartPage ??= new CartPage(this.page));
    }
}