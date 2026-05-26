
const { test, expect } = require('@playwright/test');
const LoginPage = require('../../pages/LoginPage');

test.describe('Login Tests', () => {

    test('Verify user can login with valid credentials', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.gotoLoginPage();

        await loginPage.login(
            'anishakumari95045@gmail.com',
            'Anisha@700'
        );

        await page.waitForTimeout(3000);

        await expect(
            page.locator('text=Logged in as')
        ).toBeVisible();

    });

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
test('Verify login fails with invalid email format', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await loginPage.login(
        'invalidemail',
        'Anisha@700'
    );

    await expect(page).toHaveURL(
        'https://automationexercise.com/login'
    );

});
test('Verify login email field visible', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(
        page.locator('input[data-qa="login-email"]')
    ).toBeVisible();

});

test('Verify login password field visible', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();

    await expect(
        page.locator('input[data-qa="login-password"]')
    ).toBeVisible();

});