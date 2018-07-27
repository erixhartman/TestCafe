import Page from './page-object';
import { Selector } from 'testcafe';

fixture `Loblaws`
    .page `https://www.loblaws.ca/`;

const page       = new Page();

test('Sorting Verification', async t => {
    await t
        // Resize window to fit mobile breakpoint (mobile break at 650 and wide break at 960 px)
        .resizeWindow(649, 700)
        // Click on search input apples and complete search
        .click(page.searchBar)
        .typeText(page.searchBar, 'apples')
        .pressKey('enter')
        // Click on the sort High-to-low button
        .click(page.priceSort); 
          
    // Set variables to get the number of items listed
    var prices = page.applePrices
    var count    = await prices.count;

    // Loop all items and compare each one (price1) to the item following it (price2) ensuring that price1 is >= to price2
    for (var i = 0; i < (count-1); i++) {
        // Isolate each individual price then retrieve just the inner text, 
        // Parse the inner text to remove '$', any blank spaces, and change commas to decimals to allow the test to
        // run while the page is in French. Once this is done convert it to a number so that it can be compared properly
        var price1 = page.applePrices.nth(i)
        var price1 = await price1.innerText
        var price1 = parseFloat(price1.replace(/\s/g, "").replace(",", ".").replace("$",""));
        var price1 = Number(price1)
        
        var price2 = page.applePrices.nth(i+1)
        var price2 = await price2.innerText
        var price2 = parseFloat(price2.replace(/\s/g, "").replace(",", ".").replace("$",""));
        var price2 = Number(price2)
    await t
       .expect(price1).gte(await price2);
    }

});