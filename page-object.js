import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.searchButton  	 = Selector('.search-button');
		this.searchBar  	 = Selector('#search-bar');
		this.priceSort		 = Selector('.btn-sort-link').nth(2);
		this.applePrices	 = Selector('.reg-price-text');
        this.provinceButton  = Selector('.select-province');
		this.dealBadge  	 = Selector('.deal-badge');
    }
}