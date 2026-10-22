import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    testIdAttribute: 'data-test'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium with auth tests',
      testMatch:/.*\.setup\.ts/, 
    },
    {
      name: 'auth-tests',
      testMatch:/^(?!.*unauth).*\.spec\.ts$/,
      use:{
        storageState:'playwright/.auth/user.json'
      },
      dependencies:['chromium with auth tests']
    },
    {
      name:'unauth-tests',
      testMatch:/unauth.*\.spec\.ts/,
      use:{storageState:{cookies:[],origins:[]}}
    }
  ]
});
