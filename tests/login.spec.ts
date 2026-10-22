import {test, expect} from "../fixtures/page-objects";
import { LoginPage } from "../page-objects/LoginPage.js";
test.describe('easy login suite', async () =>{
  const url = "https://www.saucedemo.com/inventory.html";
  let loginPage: LoginPage;
  test.beforeEach(async ({po}) => {
    await po.loginPage.page.goto(url);
    console.log(`Navigate to ${url}` );
  });
  test('init login', async ({po}) => {
    await po.loginPage.login("standard_user","secret_sauce");
  });
  test.afterAll(async () => {
    console.log('Test finished');
  })
});