const { test, expect } = require('@playwright/test');

const { ProfilePage } =
require('../../pages/ProfilePage');

const testData = [

  {
    name: 'Verify login page opens',

    testFunction: async (profile, page) => {

      await profile.openLoginPage();

      await expect(page.url())
        .toContain('login');

    }
  },

  {
    name: 'Verify email field visible',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.emailField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify password field visible',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.passwordField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify login button visible',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.loginSubmitBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify email field enabled',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.emailField)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify password field enabled',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.passwordField)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify login button enabled',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await expect(profile.loginSubmitBtn)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify login form accepts data',

    testFunction: async (profile) => {

      await profile.openLoginPage();

      await profile.emailField.fill(
        'test@gmail.com'
      );

      await expect(profile.emailField)
        .toHaveValue('test@gmail.com');

    }
  },

  {
    name: 'Verify logout button locator exists',

    testFunction: async (profile) => {

      await expect(profile.logoutBtn)
        .toBeHidden();

    }
  },

  {
    name: 'Verify page loaded successfully',

    testFunction: async (profile) => {

      await expect(profile.body)
        .toBeVisible();

    }
  }

];

test.describe('User Profile Module', () => {

  test.beforeEach(async ({ page }) => {

    await page.goto(
      'https://automationexercise.com',
      {
        waitUntil: 'domcontentloaded'
      }
    );

  });

  testData.forEach(({ name, testFunction }) => {

    test(name, async ({ page }) => {

      const profile =
        new ProfilePage(page);

      await testFunction(profile, page);

    });

  });

});