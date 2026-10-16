import {type Page} from '@playwright/test'
import { LoginPage } from './LoginPage';

export class POManager{
    private _loginPage?: LoginPage;

    constructor(readonly page: Page){}

    get loginPage(): LoginPage{
        return(this._loginPage ??= new LoginPage(this.page));
    }
    


}