import {Locator, Page} from '@playwright/test'

export class LoginPage{
    readonly userInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(readonly page: Page){
        this.userInput = this.page.getByTestId('username');
        this.passwordInput = this.page.getByPlaceholder('Password');
        this.loginButton = this.page.getByRole('button', {'name':"Login"});
    }

    async login(user: string, password: string){
        await this.userInput.fill(user);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

}