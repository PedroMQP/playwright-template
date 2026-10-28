import {test as base, expect} from '@playwright/test'

type MockController = {
    setResponse: (data: object, code?: number) => Promise<void>;
    setFailure: (data: object, code?: number) => Promise<void>;
}
export const test = base.extend<MockController>({
    setResponse: async ({page}, use) => {
       const fn = async(data: object, code: number = 200): Promise<void> => {
            await page.route("/mock", async(route) => {
                await route.fulfill({
                    status:code,
                    body:JSON.stringify(data)
                })
            })
       } 
       await use(fn);
    },
     setFailure: async ({page}, use) => {
       const fn = async(data: object = {}, code: number = 404): Promise<void> => {
            await page.route("/mock", async(route) => {
                await route.fulfill({
                    status:code,
                    body:JSON.stringify(data)
                })
            })
       } 
       await use(fn);
    }
});
export {expect};