import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.marksandspencer.com/');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
  await page.getByPlaceholder('Search product, code or brand').click();
  await page.getByPlaceholder('Search product, code or brand').fill('kids trousers');
  await page.getByLabel('Search button').click();
});