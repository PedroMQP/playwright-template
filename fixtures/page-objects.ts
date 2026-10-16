import {test as base, expect} from '@playwright/test'
import { POManager } from '../page-objects/POManager'

type MyFixtures = {
    po: POManager;
}
export const test = base.extend<MyFixtures>({
    po: async ({page},use) => {
        await use (new POManager(page));
    }
});
export {expect};