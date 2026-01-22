import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  //Go to the application
  await page.goto('https://the-internet.herokuapp.com/login');
  //Fill in the login form
  await page.fill('#username', 'tomsmith');
  //Fill in the password
  await page.fill('#password', 'SuperSecretPassword!');
  //click the login button
  await page.click('button[type="submit"]');
  //Expect to be redirected to the secure area and validate the URL
  await expect(page).toHaveURL('https://the-internet.herokuapp.com/secure');
  //Validate the page content
  await expect(page.locator('h2')).toHaveText('Secure Area');
  //Validate the logout button is displayed
  await expect(page.locator('a:has-text("Logout")')).toBeVisible();
});
