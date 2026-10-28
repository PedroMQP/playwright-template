import {test as base, expect} from "@playwright/test";

export const test = base.extend({
    page: async ({browser},use) => {
        const context = await browser.newContext({storageState:'playwright/.auth/user.json'})
        const page = await context.newPage();
        await use(page);
        await context.close();
     
    }
});