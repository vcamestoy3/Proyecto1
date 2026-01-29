import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  /* await page.getByRole('link', { name: 'Get started' }).click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);*/
});

test('when_username_is_empty_then_login_failed', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', '');
  // # identifica el ID
  //. identifica la clase
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  // No tiene # . entonces es un html tag - y el atributo se pone entre corchete
  // TO DO validate if we can use toHaveText
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
  //. El primer punto sidentifica la clase
  // Si la clase tiene un nombre con espacio se debe unir las palabras con punto

});
test('login empty name and password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', '');
  await page.fill('#password', '');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});

test('login invaldid name', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'Roberto');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.error')).toContainText('Your username is invalid!');
});

test('login invaldid password', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', '1234');
  await page.click('button[type="submit"]');
  await expect(page.locator('.flash.error')).toContainText('Your password is invalid!');
});

test('logout', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');
  await page.click('a.button.secondary.radius');
  await expect(page.locator('h2')).toHaveText('Login Page');
  await expect(page.locator('.flash.success')).toContainText('You logged out of the secure area!');
});