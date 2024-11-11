import{test,expect} from '@playwright/test';

test('Locating all web elements',async(page) =>{

    await page.goto("https://www.marksandspencer.com/")

    await page.locator("#onetrust-accept-btn-handler").click();

});