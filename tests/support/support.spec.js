const { test, expect } = require('@playwright/test');

const { SupportPage } =
require('../../pages/SupportPage');

const testData = [

  {
    name: 'Verify contact page opens',

    testFunction: async (support, page) => {

      await support.openContactPage();

      await expect(page.url())
        .toContain('contact_us');

    }
  },

  {
    name: 'Verify name field visible',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.nameField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify email field visible',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.emailField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify subject field visible',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.subjectField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify message field visible',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.messageField)
        .toBeVisible();

    }
  },

  {
    name: 'Verify submit button visible',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.submitBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify form fields enabled',

    testFunction: async (support) => {

      await support.openContactPage();

      await expect(support.nameField)
        .toBeEnabled();

      await expect(support.emailField)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify contact form accepts data',

    testFunction: async (support) => {

      await support.openContactPage();

      await support.fillContactForm();

      await expect(support.nameField)
        .toHaveValue('Anisha');

    }
  },

  {
    name: 'Verify footer visible',

    testFunction: async (support) => {

      await expect(support.footer)
        .toBeVisible();

    }
  },

  {
    name: 'Verify page loaded successfully',

    testFunction: async (support) => {

      await expect(support.body)
        .toBeVisible();

    }
  }

];

test.describe('Customer Support Module', () => {

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

      const support =
        new SupportPage(page);

      await testFunction(support, page);

    });

  });

});