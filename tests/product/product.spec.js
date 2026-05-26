// const { test, expect } = require('@playwright/test');
// const ProductPage = require('../../pages/ProductPage');

// test.describe('Product Module Tests', () => {

//     test.beforeEach(async ({ page }) => {

//         const productPage = new ProductPage(page);

//         await productPage.gotoProductsPage();

//     });

//     // TC01
//     test('Verify products page opens', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('All Products');

//     });

//     // TC02
//     test('Verify search input visible', async ({ page }) => {

//         await expect(page.locator('#search_product'))
//             .toBeVisible();

//     });

//     // TC03
//     test('Verify search for Blue Top', async ({ page }) => {

//         await page.fill('#search_product', 'Blue Top');

//         await page.click('#submit_search');

//         await expect(page.locator('body'))
//             .toContainText('Blue Top');

//     });

//     // TC04
//     test('Verify search for Men Tshirt', async ({ page }) => {

//         await page.fill('#search_product', 'Men Tshirt');

//         await page.click('#submit_search');

//         await expect(page.locator('body'))
//             .toContainText('Men Tshirt');

//     });

//     // TC05
//     test('Verify search for Sleeveless Dress', async ({ page }) => {

//         await page.fill('#search_product', 'Sleeveless Dress');

//         await page.click('#submit_search');

//         await expect(page.locator('body'))
//             .toContainText('Sleeveless Dress');

//     });

//     // TC06
//     test('Verify women category visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Women');

//     });

//     // TC07
//     test('Verify men category visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Men');

//     });

//     // TC08
//     test('Verify kids category visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Kids');

//     });

//     // TC09
//     test('Verify brands section visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Brands');

//     });

//     // TC10
//     test('Verify first product visible', async ({ page }) => {

//         await expect(
//             page.locator('.product-image-wrapper').first()
//         ).toBeVisible();

//     });

//     // TC11
//     test('Verify product details page opens', async ({ page }) => {

//         await page.locator(
//             'a[href*="/product_details/"]'
//         ).first().click({ force: true });

//         await expect(page.locator('body'))
//             .toContainText('Availability');

//     });

//     // TC12
//     test('Verify product name visible', async ({ page }) => {

//         await page.locator(
//             'a[href*="/product_details/"]'
//         ).first().click({ force: true });

//         await expect(page.locator('body'))
//             .toContainText('Category');

//     });

//     // TC13
//     test('Verify product price visible', async ({ page }) => {

//         await page.locator(
//             'a[href*="/product_details/"]'
//         ).first().click({ force: true });

//         await expect(page.locator('body'))
//             .toContainText('Rs.');

//     });

//     // TC14
//     test('Verify add to cart button visible', async ({ page }) => {

//         await expect(
//             page.locator('.add-to-cart').first()
//         ).toBeVisible();

//     });

//     // TC15
//     test('Verify user can add product to cart', async ({ page }) => {

//         await page.locator('.add-to-cart')
//             .first()
//             .click({ force: true });

//         await expect(page.locator('body'))
//             .toContainText('Added!');

//     });

//     // TC16
//     test('Verify continue shopping visible', async ({ page }) => {

//         await page.locator('.add-to-cart')
//             .first()
//             .click({ force: true });

//         await expect(page.locator('.modal-content'))
//             .toContainText('Continue Shopping');

//     });

//     // TC17
//     test('Verify view cart visible', async ({ page }) => {

//         await page.locator('.add-to-cart')
//             .first()
//             .click({ force: true });

//         await expect(page.locator('.modal-content'))
//             .toContainText('View Cart');

//     });

//     // TC18
//     test('Verify modal visible', async ({ page }) => {

//         await page.locator('.add-to-cart')
//             .first()
//             .click({ force: true });

//         await expect(page.locator('.modal-content'))
//             .toBeVisible();

//     });

//     // TC19
//     test('Verify all products visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('All Products');

//     });

//     // TC20
//     test('Verify category visible', async ({ page }) => {

//         await expect(page.locator('body'))
//             .toContainText('Category');

//     });

// });





const { test, expect } = require('@playwright/test');
const ProductPage = require('../../pages/ProductPage');

test.describe('Product Module Tests', () => {

    test.beforeEach(async ({ page }) => {

        const productPage = new ProductPage(page);

        await productPage.gotoProductsPage();

    });

    // TC01
    test('Verify products page opens', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('All Products');

    });

    // TC02
    test('Verify search input visible', async ({ page }) => {

        await expect(page.locator('#search_product'))
            .toBeVisible();

    });

    // PARAMETERIZED TEST CASES (TC03 - TC05)

    const searchProducts = [

        'Blue Top',

        'Men Tshirt',

        'Sleeveless Dress'

    ];

    for (const product of searchProducts) {

        test(`Verify search for ${product}`, async ({ page }) => {

            await page.fill('#search_product', product);

            await page.click('#submit_search');

            await expect(page.locator('body'))
                .toContainText(product);

        });

    }

    // TC06
    test('Verify women category visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Women');

    });

    // TC07
    test('Verify men category visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Men');

    });

    // TC08
    test('Verify kids category visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Kids');

    });

    // TC09
    test('Verify brands section visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Brands');

    });

    // TC10
    test('Verify first product visible', async ({ page }) => {

        await expect(
            page.locator('.product-image-wrapper').first()
        ).toBeVisible();

    });

    // TC11
    test('Verify product details page opens', async ({ page }) => {

        await page.locator(
            'a[href*="/product_details/"]'
        ).first().click({ force: true });

        await expect(page.locator('body'))
            .toContainText('Availability');

    });

    // TC12
    test('Verify product name visible', async ({ page }) => {

        await page.locator(
            'a[href*="/product_details/"]'
        ).first().click({ force: true });

        await expect(page.locator('body'))
            .toContainText('Category');

    });

    // TC13
    test('Verify product price visible', async ({ page }) => {

        await page.locator(
            'a[href*="/product_details/"]'
        ).first().click({ force: true });

        await expect(page.locator('body'))
            .toContainText('Rs.');

    });

    // TC14
    test('Verify add to cart button visible', async ({ page }) => {

        await expect(
            page.locator('.add-to-cart').first()
        ).toBeVisible();

    });

    // TC15
    test('Verify user can add product to cart', async ({ page }) => {

        await page.locator('.add-to-cart')
            .first()
            .click({ force: true });

        await expect(page.locator('body'))
            .toContainText('Added!');

    });

    // TC16
    test('Verify continue shopping visible', async ({ page }) => {

        await page.locator('.add-to-cart')
            .first()
            .click({ force: true });

        await expect(page.locator('.modal-content'))
            .toContainText('Continue Shopping');

    });

    // TC17
    test('Verify view cart visible', async ({ page }) => {

        await page.locator('.add-to-cart')
            .first()
            .click({ force: true });

        await expect(page.locator('.modal-content'))
            .toContainText('View Cart');

    });

    // TC18
    test.skip('Verify modal visible', async ({ page }) => {

        await page.locator('.add-to-cart')
            .first()
            .click({ force: true });

        await expect(page.locator('.modal-content'))
            .toBeVisible();

    });

    // TC19
    test.skip('Verify all products visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('All Products');

    });

    // TC20
    test('Verify category visible', async ({ page }) => {

        await expect(page.locator('body'))
            .toContainText('Category');

    });

});