import { Page, Locator, expect } from '@playwright/test';
 
export class LoginPage {
 
  readonly page: Page;
 
  readonly loginIcon: Locator;

  readonly loginTitle: Locator;

  readonly emailIcon: Locator;

  readonly emailInput: Locator;

  readonly passwordInput: Locator;

  readonly submitButton: Locator;
 
  constructor(page: Page) {

    this.page = page;
 
    this.loginIcon = page.locator('svg.lucide-log-in');

    this.loginTitle = page.getByTestId('login-title');

    this.emailIcon = page.locator('svg.lucide-mail');

    this.emailInput = page.getByTestId('login-email-input');

    this.passwordInput = page.getByTestId('login-password-input');

    this.submitButton = page.getByTestId('login-submit-button');

  }
 
  async open() {

    await this.page.goto('/');

  }
 
  async checkLoginIcon() {

    await expect(this.loginIcon).toBeVisible();

    await expect(this.loginIcon).toHaveAttribute('width', '24');

    await expect(this.loginIcon).toHaveAttribute('height', '24');

  }
 
  async checkTitle() {

    await expect(this.loginTitle).toBeVisible();

    await expect(this.loginTitle).toContainText('Вхід до системи');

  }
 
  async checkEmailIcon() {

    await expect(this.emailIcon).toBeVisible();

    await expect(this.emailIcon).toHaveAttribute('width', '24');

    await expect(this.emailIcon).toHaveAttribute('height', '24');

  }
 
  async fillEmail(email: string) {

    await expect(this.emailInput).toBeVisible();

    await expect(this.emailInput).toHaveAttribute('placeholder', 'your@email.com');

    await this.emailInput.fill(email);

    await expect(this.emailInput).toHaveValue(email);

  }
 
  async fillPassword(password: string) {

    await this.passwordInput.fill(password);

    await expect(this.passwordInput).toHaveValue(password);

  }
 
  async clickSubmit() {

    await expect(this.submitButton).toBeEnabled();

    await this.submitButton.click();

  }
 
  async login(email: string, password: string) {

    await this.fillEmail(email);

    await this.fillPassword(password);

    await this.clickSubmit();

  }
 
}

 