const { test, expect } = require('@playwright/test');

const { CheckoutPage } =
require('../../pages/CheckoutPage');

const testData = [

  {
    name: 'Verify products page opens',

    testFunction: async (checkout, page) => {

      await checkout.goToProductsPage();

      await expect(page)
        .toHaveURL(/products/);

    }
  },

  {
    name: 'Verify cart page opens',

    testFunction: async (checkout, page) => {

      await checkout.openCart();

      await expect(page)
        .toHaveURL(/view_cart/);

    }
  },

  {
    name: 'Verify body visible on cart page',

    testFunction: async (checkout, page) => {

      await checkout.openCart();

      await expect(checkout.body)
        .toBeVisible();

    }
  },

  {
    name: 'Verify cart page contains cart text',

    testFunction: async (checkout) => {

      await checkout.openCart();

      await expect(checkout.body)
        .toContainText('Cart');

    }
  },

  {
    name: 'Verify products page body visible',

    testFunction: async (checkout) => {

      await checkout.goToProductsPage();

      await expect(checkout.body)
        .toBeVisible();

    }
  },

  {
    name: 'Verify products button visible',

    testFunction: async (checkout) => {

      await expect(checkout.productsBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify cart button visible',

    testFunction: async (checkout) => {

      await expect(checkout.cartBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify products button enabled',

    testFunction: async (checkout) => {

      await expect(checkout.productsBtn)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify cart button enabled',

    testFunction: async (checkout) => {

      await expect(checkout.cartBtn)
        .toBeEnabled();

    }
  },

  {
    name: 'Verify home button visible',

    testFunction: async (checkout) => {

      await expect(checkout.homeBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify contact button visible',

    testFunction: async (checkout) => {

      await expect(checkout.contactBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify login button visible',

    testFunction: async (checkout) => {

      await expect(checkout.loginBtn)
        .toBeVisible();

    }
  },

  {
    name: 'Verify home page navigation',

    testFunction: async (checkout, page) => {

      await checkout.openHomePage();

      await expect(page.url())
        .toContain('automationexercise');

    }
  },

  {
    name: 'Verify contact page navigation',

    testFunction: async (checkout, page) => {

      await checkout.openContactPage();

      await expect(page.url())
        .toContain('contact_us');

    }
  },

  {
    name: 'Verify login page navigation',

    testFunction: async (checkout, page) => {

      await checkout.openLoginPage();

      await expect(page.url())
        .toContain('login');

    }
  },

  {
    name: 'Verify page title contains automation',

    testFunction: async (checkout, page) => {

      await expect(page)
        .toHaveTitle(/Automation/);

    }
  },

  {
    name: 'Verify current url contains automation exercise',

    testFunction: async (checkout, page) => {

      await expect(page.url())
        .toContain('automationexercise');

    }
  },

  {
    name: 'Verify footer visible',

    testFunction: async (checkout) => {

      await expect(checkout.footer)
        .toBeVisible();

    }
  },

  {
    name: 'Verify subscription text available',

    testFunction: async (checkout) => {

      await expect(checkout.subscriptionText)
        .toContainText('Subscription');

    }
  },

  {
    name: 'Verify page loaded successfully',

    testFunction: async (checkout) => {

      await expect(checkout.body)
        .toBeVisible();

    }
  }

];

test.describe('Checkout And Order Module', () => {

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

      const checkout =
        new CheckoutPage(page);

      await testFunction(checkout, page);

    });

  });

});