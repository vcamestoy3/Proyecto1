import { test, expect } from '@playwright/test';
import { checkboxPage } from './pages/checkboxesPage';


test('when the user lands to the page then only the "checkbox 2" is checked and checkbox 1 is not checked by default', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkboxes = new checkboxPage(page);
  expect(await checkboxes.validateCheckbox1IsChecked()).toBe(true);
  expect(await checkboxes.validateCheckbox2IsChecked()).toBe(false);  
});