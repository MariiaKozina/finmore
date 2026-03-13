import { test, expect } from '@playwright/test';
test.describe('check login', () => {//test suit
    
    test.beforeEach(async({page})=>{
        await page.goto('/'); // перед кожним тестом заходимо на сайт
        const zareestruvatyButton = page.getByTestId('switch-to-register-button');
        await expect(zareestruvatyButton).toBeVisible();
        await expect(zareestruvatyButton).toBeEnabled();
        await zareestruvatyButton.click();
    })
    test('check url and title', async ({ page }) => {    //створюємо test case

        const name=page.getByTestId('register-name-input');
        await expect(name).toBeVisible();
        await name.fill('Іван Петренко');
        await expect(name).toHaveValue('Іван Петренко');

        const email=page.getByTestId('register-email-input');
        await expect(email).toBeVisible();
        await email.fill('mm@gmail.com');
        await expect(email).toHaveValue('mm@gmail.com');

        const password=page.getByTestId('register-password-input');
        await expect(password).toBeVisible();
        await password.fill('Mariia');
        await expect(password).toHaveValue('Mariia');

        const repeatPassword=page.getByTestId('register-confirm-password-input');
        await expect(repeatPassword).toBeVisible();
        await repeatPassword.fill('Mariia');
        await expect(repeatPassword).toHaveValue('Mariia');

        const currency=page.getByTestId('register-currency-select');
        await expect(repeatPassword).toBeVisible();
        await currency.selectOption('USD');    //Select options -combobox
        const selectedValue = await currency.inputValue();
        expect(selectedValue).toBe('USD');
 
        const zareestruvatu = page.getByTestId('register-submit-button');
        await expect(zareestruvatu).toBeVisible();
        await expect(zareestruvatu).toBeEnabled();
        await zareestruvatu.click();

    }
    )
})
