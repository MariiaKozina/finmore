import { test, expect } from '@playwright/test';

import { RegistrationPage } from '../pages/registration.page';
import { LoginPage } from '../pages/login.page';
import {
  randomName,
  randomEmail,
  randomPassword,
  randomCurrency
} from '../helpers/randomData.ts';


test.describe('Registration page', () => {

  let registrationPage: RegistrationPage;
  let loginPage: LoginPage;

  //const generateEmail = () => `test_${Date.now()}@gmail.com`;
  //const email = generateEmail();

  //------змінні всередині тесту
  
  
  /*const REGISTRATION_DATA = {
    validName: randomName(),
    validEmail: email,
    //validEmail: 'mm@gmail.com',
    validPassword: 'Mariia',
    validCurrency: 'USD',
  };*/
  // ----------

  test.beforeEach(async ({ page }) => {

    registrationPage = new RegistrationPage(page);
    loginPage = new LoginPage(page);
    await loginPage.open();
    await registrationPage.switchToRegister();
    //await registrationPage.open();

  });

  test('check url and title', async ({ page }) => {

    await expect(page).toHaveURL('/');

  });

  test('registration page elements', async ({ page }) => {

await registrationPage.register(
    randomName(),
    randomEmail(),
    randomPassword(),
    randomCurrency(),

  );
    console.log(randomName(),randomEmail(),randomPassword(),randomCurrency());
    /*
    await registrationPage.fillName(REGISTRATION_DATA.validName);
    await registrationPage.fillEmail(REGISTRATION_DATA.validEmail);
    console.log(REGISTRATION_DATA.validEmail);
    await registrationPage.fillPassword(REGISTRATION_DATA.validPassword);
    await registrationPage.fillConfirmPassword(REGISTRATION_DATA.validPassword);
    await registrationPage.selectCurrency(REGISTRATION_DATA.validCurrency);*/

  });

});


