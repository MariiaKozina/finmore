import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/login.page';
 
test.describe('Login page', () => {
    let loginPage:LoginPage; //глобальна
 
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

      'admin@demo.com',

      'admin123'

    );
 
  });
 
});

 