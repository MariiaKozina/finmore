

export const randomNumber = (min: number = 0, max: number = 10000): number => {

  return Math.floor(Math.random() * (max - min + 1)) + min;

};
 
export const randomString = (length: number = 8): string => {

  const chars = 'abcdefghijklmnopqrstuvwxyz';

  return Array.from({ length }, () => chars[randomNumber(0, chars.length - 1)]).join('');

};
 
export const randomAlphaNumeric = (length: number = 10): string => {

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

  return Array.from({ length }, () => chars[randomNumber(0, chars.length - 1)]).join('');

};
 
export const randomFromArray = <T>(arr: T[]): T => {

  return arr[randomNumber(0, arr.length - 1)];

};
 
export const randomBoolean = (): boolean => Math.random() < 0.5;
 
export const randomTimestamp = (): number => Date.now();
  
 
export const randomName = (): string => {

  const firstNames = ['Іван', 'Марія', 'Олександр', 'Анна', 'Дмитро'];

  const lastNames = ['Петренко', 'Іваненко', 'Шевченко', 'Коваленко'];
 
  return `${randomFromArray(firstNames)} ${randomFromArray(lastNames)}}`;

};
 
export const randomEmail = (): string => {

  const domains = ['gmail.com', 'test.com', 'mail.com'];
 
  return `test_${randomTimestamp()}@${randomFromArray(domains)}`;

};
 
export const randomPassword = (length: number = 10): string => {

  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const lower = 'abcdefghijklmnopqrstuvwxyz';

  const numbers = '0123456789';

  const symbols = '!@#$%^&*';
 
  const all = upper + lower + numbers + symbols;
 
  return (

    randomFromArray(upper) +

    randomFromArray(lower) +

    randomFromArray(numbers) +

    randomFromArray(symbols) +

    Array.from({ length: length - 4 }, () =>

      all[randomNumber(0, all.length - 1)]

    ).join('')

  );

};
 
export const randomCurrency = (): string => {

  return randomFromArray(['USD', 'EUR', 'UAH']);

};
 
export const randomPhone = (): string => {

  return `+380${randomNumber(100000000, 999999999)}`;

};
 
export const randomUrl = (): string => {

  return `https://test-${randomAlphaNumeric(5)}.com`;

};
 
export const randomAddress = (): string => {

  return `Street ${randomString(5)} ${randomNumber(1, 100)}`;

};

 