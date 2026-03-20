import { Page, Locator, expect } from '@playwright/test';

export class RegistrationPage {

  readonly page: Page;

  readonly nameInput: Locator;

  readonly emailInput: Locator;

  readonly passwordInput: Locator;

  readonly confirmPasswordInput: Locator;

  readonly currencySelect: Locator;

  readonly submitButton: Locator;

  readonly switchToRegisterButton: Locator;

  constructor(page: Page) {

    this.page = page;

    this.switchToRegisterButton = page.getByTestId('switch-to-register-button');

    this.nameInput = page.getByTestId('register-name-input');

    this.emailInput = page.getByTestId('register-email-input');

    this.passwordInput = page.getByTestId('register-password-input');

    this.confirmPasswordInput = page.getByTestId('register-confirm-password-input');

    this.currencySelect = page.getByTestId('register-currency-select');

    this.submitButton = page.getByTestId('register-submit-button');
  }

  async open() {
    await this.page.goto('/');
    await this.switchToRegister();
  }

  async switchToRegister() {
    await expect(this.switchToRegisterButton).toBeVisible();
    await expect(this.switchToRegisterButton).toBeEnabled();
    await this.switchToRegisterButton.click();
  }

  async fillName(name: string) {
    await expect(this.nameInput).toBeVisible();
    await this.nameInput.fill(name);
    await expect(this.nameInput).toHaveValue(name);
  }

  async fillEmail(email: string) {
    await expect(this.emailInput).toBeVisible();
    await this.emailInput.fill(email);
    await expect(this.emailInput).toHaveValue(email);
  }

  async fillPassword(password: string) {
    await expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
    await expect(this.passwordInput).toHaveValue(password);
  }

  async fillConfirmPassword(password: string) {
    await expect(this.confirmPasswordInput).toBeVisible();
    await this.confirmPasswordInput.fill(password);
    await expect(this.confirmPasswordInput).toHaveValue(password);
  }

  async selectCurrency(currency: string) {
    await expect(this.currencySelect).toBeVisible();
    await this.currencySelect.selectOption(currency);
    await expect(this.currencySelect).toHaveValue(currency);
  }

  async clickSubmit() {
    await expect(this.submitButton).toBeVisible();
    await expect(this.submitButton).toBeEnabled();
    await this.submitButton.click();
  }

  async register(
    name: string,
    email: string,
    password: string,
    currency: string
  ) {
    await this.fillName(name);
    await this.fillEmail(email);
    await this.fillPassword(password);
    await this.fillConfirmPassword(password);
    await this.selectCurrency(currency);
    await this.clickSubmit();
  }
}