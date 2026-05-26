const { test, expect } = require('@playwright/test');

const { ShippingPage } =
require('../../pages/ShippingPage');

const testData = [

  {
    name: 'Verify cart page opens',

    testFunction: async (shipping, page) => {

      await shipping.openCartPage();

      await expect(page.url())
        .toContain('view_cart');

    }
  },

  {
    name: 'Verify products page opens',

    testFunction: async (shipping, page) => {

      await shipping.openProductsPage();

      await expect(page.url())
        .toContain('products');

    }
  },
{
  name: 'Verify cart page body visible',

  testFunction: async (shipping) => {

    await shipping.openCartPage();

    await expect(shipping.body)
      .toBeVisible();

  }
},

  {
    name: 'Verify delivery address section locator created',

    testFunction: async (shipping) => {

      await expect(shipping.deliveryAddress)
        .toBeHidden();

    }
  },

  {
    name: 'Verify billing address section locator created',

    testFunction: async (shipping) => {

      await expect(shipping.billingAddress)
        .toBeHidden();

    }
  },

  {
    name: 'Verify comment box locator created',

    testFunction: async (shipping) => {

      await expect(shipping.commentBox)
        .toBeHidden();

    }
  },

  {
    name: 'Verify place order button locator created',

    testFunction: async (shipping) => {

      await expect(shipping.placeOrderBtn)
        .toBeHidden();

    }
  },

  {
    name: 'Verify review order section locator created',

    testFunction: async (shipping) => {

      await expect(shipping.reviewOrderSection)
        .toBeHidden();

    }
  },

  {
    name: 'Verify body visible',

    testFunction: async (shipping) => {

      await expect(shipping.body)
        .toBeVisible();

    }
  },

  {
    name: 'Verify shipping flow navigation',

    testFunction: async (shipping, page) => {

      await shipping.openProductsPage();

      await shipping.openCartPage();

      await expect(page.url())
        .toContain('view_cart');

    }
  }

];

test.describe('Shipping Address Module', () => {

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

      const shipping =
        new ShippingPage(page);

      await testFunction(shipping, page);

    });

  });

});