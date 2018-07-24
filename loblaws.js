import Page from './page-object';
import { Selector } from 'testcafe';

fixture `Loblaws`
    .page `https://www.loblaws.ca/`;

const page       = new Page();

var prices = Selector('.reg-price-text');

var priceList = [];

for (var i = 0; i < prices.length; i++) {
    priceList.push(prices[i].innerText);
}

test('Sorting Verification', async t => {
    await t
        // Resize window to fit widest breakpoint (mobile break at 650 and wide break at 960 px)
        .resizeWindow(1269, 700)
        // Click on search input apples and complete search
        .click(page.searchBar)
        .typeText(page.searchBar, 'apples')
        .pressKey('enter')
        // Click on the sort High-to-low button
        .click(page.priceSort)
        .expect(dollarValue1).gte(dollarValue2);
});