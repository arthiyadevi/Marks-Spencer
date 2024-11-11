import{test,expect} from '@playwright/test';

test('Locating all web elements',async({page}) =>{

    await page.goto("https://www.marksandspencer.com/")
    
    await page.locator("#onetrust-accept-btn-handler").click();

    const links = await page.$$('a');
    
    for(const link of links){
        const linktext = await link.textContent();
        console.log(linktext);
    }

    const products = await page.$$(".eco-box_ecoBox__50nux");

    for(const product of products){
       const productName = await product.textContent()
       console.log(productName)

    }

});