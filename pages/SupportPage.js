class SupportPage {

  constructor(page) {

    this.page = page;

    // Navigation
    this.contactBtn =
      page.locator("a[href='/contact_us']").first();

    this.homeBtn =
      page.locator("a[href='/']").first();

    // Contact Form
    this.nameField =
      page.locator("input[name='name']");

    this.emailField =
      page.locator("input[name='email']");

    this.subjectField =
      page.locator("input[name='subject']");

    this.messageField =
      page.locator("#message");

    this.submitBtn =
      page.locator("input[name='submit']");

    // Common Elements
    this.body =
      page.locator('body');

    this.footer =
      page.locator('footer');

  }

  async openContactPage() {

    await this.contactBtn.click();

  }

  async openHomePage() {

    await this.homeBtn.click();

  }

  async fillContactForm() {

    await this.nameField.fill('Anisha');

    await this.emailField.fill('anisha@test.com');

    await this.subjectField.fill('Testing');

    await this.messageField.fill(
      'Automation Testing Message'
    );

  }

}

module.exports = { SupportPage };