import { test, expect } from '@playwright/test';


test('has title', async ({ page }) => {
    await page.goto('https://www.marksandspencer.com/');
  
    // Expect a title "to contain" a substring.
    const pageTitle = await page.title();
    console.log("Page Title: "+ pageTitle);
    await expect(page).toHaveTitle("Marks & Spencer | Clothing, Home, Food & Gifts | M&S");

    const pageUrl = await page.url();
    console.log("Page URL is: "+ pageUrl);
    await expect(page).toHaveURL("https://www.marksandspencer.com/");
});