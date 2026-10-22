import {test, expect} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage";

const authFile = 'playwright/.auth/user.json';
test('Authenticate as basic user', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.page.goto('https://www.saucedemo.com/');
    await loginPage.login('standard_user', 'secret_sauce' );
    await expect(page).toHaveURL(/inventory/);
    await page.context().storageState({path:authFile});
}) ;