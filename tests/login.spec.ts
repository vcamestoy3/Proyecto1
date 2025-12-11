import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/basic_auth');
  /* await page.getByRole('link', { name: 'Get started' }).click();
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);*/
});
