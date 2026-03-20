import { test, expect } from '@playwright/test';

import { RegistrationPage } from '../pages/registration.page';

test.describe('Registration page', () => {

  let registrationPage: RegistrationPage;

  //------змінні всередині тесту
  const REGISTRATION_DATA = {
    validName: 'Іван Петренко',
    validEmail: 'mm@gmail.com',
    validPassword: 'Mariia',
    validCurrency: 'USD',
  };
  // ----------

  test.beforeEach(async ({ page }) => {

    registrationPage = new RegistrationPage(page);

    await registrationPage.open();

  });

  test('check url and title', async ({ page }) => {

    await expect(page).toHaveURL('/');

  });

  test('registration page elements', async ({ page }) => {

    await registrationPage.fillName(REGISTRATION_DATA.validName);
    await registrationPage.fillEmail(REGISTRATION_DATA.validEmail);
    await registrationPage.fillPassword(REGISTRATION_DATA.validPassword);
    await registrationPage.fillConfirmPassword(REGISTRATION_DATA.validPassword);
    await registrationPage.selectCurrency(REGISTRATION_DATA.validCurrency);

  });

});