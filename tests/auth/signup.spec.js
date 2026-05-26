// @ts-check
const { test, expect } = require('@playwright/test');
const SignupPage = require('../../pages/SignupPage.js');

test.describe('Signup Tests', () => {

    test('Verify user can open signup page', async ({ page }) => {

        const signupPage = new SignupPage(page);

        await signupPage.gotoSignupPage();

        await signupPage.signup(
            'Anisha',
            'anisha' + Date.now() + '@gmail.com'
        );

        await expect(
            page.locator('text=Enter Account Information')
        ).toBeVisible();

    });

});