import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
//import { LOGIN_DATA } from './Data/loginData';
 
test.describe('Login page', () => {
    let loginPage:LoginPage; //глобальна
 
    //------змінни всередині тесту
    const LOGIN_DATA = {
  validEmail: 'test@example.com',
  validPassword: '123456',
  loginTitleText: 'Вхід до системи',
  emailPlaceholder: 'your@email.com',
  iconSize: '24',
};
// ----------

  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);

    await loginPage.open();

  });
 
  test('check url and title', async ({ page }) => {
 
    await expect(page).toHaveURL('/');

    await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');
 
  });
 
  test('authorization page elements', async ({ page }) => {
 
    await loginPage.checkLoginIcon();

    await loginPage.checkTitle();

    await loginPage.checkEmailIcon();
 
  });
 
  test('login positive', async ({ page }) => {
 
    await loginPage.login(

      LOGIN_DATA.validEmail,

      LOGIN_DATA.validPassword

    );
 
  });
 
});

 