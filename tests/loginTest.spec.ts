import { test, expect } from '@playwright/test';
test.describe('check login', () => {//test suit
    
    test.beforeEach(async({page})=>{
        await page.goto('/'); // перед кожним тестом заходимо на сайт
    })
    test('check url and title', async ({ page }) => {    //створюємо test case
        
        await expect(page).toHaveURL('/'); // перевірка чи нема редіректа
        await expect(page).toHaveTitle('Повнофункціональний фінансовий менеджер');

    })
    test('autorization check', async ({ page }) => {//авторізація сторінки
        //LOGO test
        const loginIcon = page.locator('svg.lucide-log-in');//шукає елемент на сторінці по класу
        await expect(loginIcon).toBeVisible();//відображаєтся на сторінці
        await expect(loginIcon).toHaveAttribute('width','24'); //перевіряємо розмір
        await expect(loginIcon).toHaveAttribute('height','24');
        
        //Вхід до системи
        const vhidTest = page.getByTestId('login-title');
        await expect(vhidTest).toBeVisible();
        await expect(vhidTest).toContainText('Вхід до системи');
        
        /* //????Увійдіть до свого облікового запису  **New
        const vhiddoobl = page.getByTestId('login-title');
        await expect(vhiddoobl).toBeVisible();
        await expect(vhiddoobl).toContainText('Увійдіть до свого облікового запису');
        const headerBlock = page.locator('div', {
  has: page.getByTestId('login-title')

  const description = page.locator('p', {
  hasText: 'Увійдіть до свого облікового запису'
});
});


        //Email адрес
        ?????
        */

        //email logo test
        const loginEmailIcon = page.locator('svg.lucide-mail');//шукає елемент на сторінці по класу
        await expect(loginEmailIcon).toBeVisible();//відображаєтся на сторінці
        await expect(loginEmailIcon).toHaveAttribute('width','24'); //перевіряємо розмір
        await expect(loginEmailIcon).toHaveAttribute('height','24');
       
        //login-email-input positive
        const inputEmail = page.getByTestId('login-email-input');
        await expect(vhidTest).toBeVisible();
        await expect(vhidTest).toHaveAttribute('placeholder','your@email.com');//placeholder 
        await inputEmail.fill('admin@demo.com');
        await expect(inputEmail).toHaveValue('admin@demo.com');//попередні данні ввелись
        
        /*
        //login-email-input negative
        const inputEmail = page.getByTestId('login-email-input');
        await expect(vhidTest).toBeVisible();
        await inputEmail.fill('admin');
        ?????(тут попап-validation message,) await expect(inputEmail).toHaveValue('admin@demo.com');//попередні данні ввелись
        //Браузерна форма: HTML5 validationMessage
        const validationMessage = await emailInput.evaluate(
        (el: HTMLInputElement) => el.validationMessage
         );
         expect(validationMessage).toContain("@");  
         expect(validity.valid).toBe(false);
        expect(validity.typeMismatch).toBe(true);
        expect(validity.message).toContain('@');


        const inputPass = page.getByTestId('login-password-input');
        await expect(vhidTest).toBeVisible();
        //await expect(vhidTest).toHaveAttribute('placeholder','Введіть пароль');//placeholder 
        await inputEmail.fill('admin123');
        await expect(inputEmail).toHaveValue(/^admin/); //регулярка: все що починається з admin

        const submit = page.getByTestId('login-submit-button');
        await expect(vhidTest).toBeVisible();
        await expect(vhidTest).toBeEnabled();
        await expect(vhidTest).();//placeholder 
        await submit.click();

        //Редірект:

        await expect(page).toHaveURL('/'); // перевірка чи нема редіректа

        */
    })
}
)