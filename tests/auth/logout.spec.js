
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Logout Tests', () => {

    test('Verify user can logout successfully', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login(
            'anishakumari95045@gmail.com',
            'Anisha@700'
        );

        await expect(
            page.locator('text=Logged in as')
        ).toBeVisible();

        // Logout using POM method
        await loginPage.logout();

        await expect(page).toHaveURL(
            'https://automationexercise.com/login'
        );

    });

    // test.skip('Skipped logout test example', async ({ page }) => {
        test('test name', async () => {})

    });

    test.fixme('Future logout validation test', async ({ page }) => {

    });

    test('Slow logout test example', async ({ page }) => {

        test.slow();

        await page.goto('https://automationexercise.com');

    });

// });
test('Verify logout button is visible after successful login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'anishakumari95045@gmail.com',
        'Anisha@700'
    );

    await expect(
        page.locator('a[href="/logout"]')
    ).toBeVisible();

});