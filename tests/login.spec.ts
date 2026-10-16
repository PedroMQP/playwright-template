import {test} from "@playwright/test";
import { LoginPage } from "../page-objects/LoginPage.js";
test.describe('easy login suite', async () =>{
  const url = "https://www.saucedemo.com/";
  let loginPage: LoginPage;
  test.beforeEach(async ({page}) => {
    loginPage = new LoginPage(page);
    await page.goto(url);
    console.log(`Navigate to ${url}` );
  });
  test('init login', async ({page}) => {
    await loginPage.login("standard_user","secret_sauce");
  });
  test.afterAll(async () => {
    console.log('Test finished');
  })
});