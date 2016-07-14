var Oracle;

(function() {
    "use strict";
    Oracle = {
    	products : [
    		{ name : 'Product1', price : 12,   amount: 100 },
    		{ name : 'Product2', price : 1000, amount: 15 },
    		{ name : 'Product3', price : 987,  amount: 157 },
    		{ name : 'Product4', price : 50,   amount: 2 }
    	],
    	init: () => {
    		console.log('Total Products: ');
    		console.log(Oracle.arrows());
    	},
    	isLowPrice : product => product.price < 100,
    	justPrice  : product => product.price,
    	sumValue   : (sum, value) => sum += value,
    	arrows: () => {
    		return Oracle.products.filter(Oracle.isLowPrice)
    		.map(Oracle.justPrice)
    		.reduce(Oracle.sumValue);
    	}
    }
})();

Oracle.init();