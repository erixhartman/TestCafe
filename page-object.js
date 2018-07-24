import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.provinceButton  = Selector('.select-province');
        this.searchButton  	 = Selector('.search-button');
		this.searchBar  	 = Selector('#search-bar');
		this.dealBadge  	 = Selector('.deal-badge');
		this.priceSort		 = Selector('.btn-sort-link').nth(2);
		this.applePrices	 = Selector('.reg-price-text');
		this.applePrices1	 = Selector('.reg-price-text').nth(0);
		this.applePrices2	 = Selector('.reg-price-text').nth(1);
		this.filterTitle 	 = Selector('.filter-title-heading');
    }
}