const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Validation Tests', () => {

    test('Verify login fails with invalid password', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login(
            'anishakumari95045@gmail.com',
            'wrongpassword'
        );

        await expect(
            page.locator('text=Your email or password is incorrect!')
        ).toBeVisible();

    });

    test('Verify login fails with empty credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login('', '');

        await expect(
            page.locator('input[data-qa="login-email"]')
        ).toBeVisible();

    });

});

test.describe('Forgot Password Tests', () => {

    test('Verify login page is visible', async ({ page }) => {

        await page.goto('https://automationexercise.com/login');

        await expect(
            page.locator('text=Login to your account')
        ).toBeVisible();

    });

});