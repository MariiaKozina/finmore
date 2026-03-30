import {Page,expect,Locator} from '@playwright/test'; 
export class GlobalMethods {
 
    readonly page: Page;
    constructor (page: Page)
    {
        this.page = page;
    }
    
    async click(item: Locator, name: string = 'елемент') {

  try {

    console.log(`Спроба клікнути по "${name}"`);

    await expect(item).toBeEnabled();

    await item.click();

    console.log(`Клік виконано по "${name}"`);

  } catch (error) {

    console.error(`Не вдалося клікнути по "${name}":`, error);

    throw error; 

  }

}


async fillInput(input: Locator, value: string, name: string = 'інпут') {

    try {

      console.log(`Спроба заповнити "${name}" значенням: ${value}`);

      await expect(input).toBeVisible();

      await input.fill(value);

      await expect(input).toHaveValue(value);

      console.log(`"${name}" успішно заповнено: ${value}`);

    } catch (error) {

      console.error(`Не вдалося заповнити "${name}":`, error);

      throw error;

    }

  }
 

 
}