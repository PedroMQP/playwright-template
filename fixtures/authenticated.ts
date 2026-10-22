import {test as base, expect} from "@playwright/test";
import { POManager } from "../page-objects/POManager";

type POFixture = {
    po:POManager;
}
export const test = base.extend<POFixture>({
    po: async ({browser},use) => {
        const context = await browser.newContext({storageState:'playwright/.auth/user.json'})
        const page = await context.newPage();
        await use( new POManager(page));
        await context.close();
    }
});
export  {expect};
