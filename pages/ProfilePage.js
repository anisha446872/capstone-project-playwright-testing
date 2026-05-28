class ProfilePage {

  constructor(page) {

    this.page = page;

    // Navigation
    this.loginBtn =
      page.locator("a[href='/login']").first();

    this.logoutBtn =
      page.locator("a[href='/logout']").first();

    this.deleteAccountBtn =
      page.locator("a[href='/delete_account']").first();

    this.homeBtn =
      page.locator("a[href='/']").first();

    // Login
    this.emailField =
      page.locator("input[data-qa='login-email']");

    this.passwordField =
      page.locator("input[data-qa='login-password']");

    this.loginSubmitBtn =
      page.locator("button[data-qa='login-button']");

    // Profile
    this.loggedInText =
      page.locator("a:has-text('Logged in as')");

    this.body =
      page.locator('body');

  }

  async openLoginPage() {

    await this.loginBtn.click();

  }

  async loginUser() {

    await this.emailField.fill(
      'testuser@gmail.com'
    );

    await this.passwordField.fill(
      'test123'
    );

    await this.loginSubmitBtn.click();

  }

  async logoutUser() {

    await this.logoutBtn.click();

  }

}

module.exports = { ProfilePage };