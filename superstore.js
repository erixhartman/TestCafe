import Page from './page-object';

fixture `Real Canadian Superstore`
    .page `https://www.realcanadiansuperstore.ca`;

const page = new Page();

test('Deals Present in Results', async t => {
    await t
    	// Resize window to fit mobile breakpoint (which seems to be 650 px)
    	.resizeWindow(649, 700)
    	// Select what province you're in
        .click(page.provinceButton)
        // If width > 650 use searchButton
        // .click(page.searchButton)
        .click(page.searchBar)
        // Input search for oranges and complete search
        .typeText(page.searchBar, 'oranges')
        .pressKey('enter')
        // Assert that a deal badge is present anywhere on the page
        .expect(page.dealBadge.count).gt(0);
        // Unable to find where to change Superstore site to French, but the test should work fine either way

});