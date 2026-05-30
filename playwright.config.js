


// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  // Disable full parallel execution
  fullyParallel: false,

  // Global timeout
  timeout: 60000,

  forbidOnly: !!process.env.CI,

  retries: process.env.CI ? 2 : 0,

  // Run one worker only
  workers: 1,

  reporter: [
    ['html'],
    ['allure-playwright', { resultsDir: 'allure-results' }]
  ],

  use: {

    // Browser launch
  headless: true,

    // Navigation timeout
    navigationTimeout: 60000,

    // Action timeout
    actionTimeout: 30000,

    // Trace for failed tests
    trace: 'on-first-retry',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Video on retry
    video: 'retain-on-failure',
  },

  projects: [

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Comment these temporarily
    
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    
  ],

});