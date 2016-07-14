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
    	init: function(){
    		console.log('Products with tax: ');
    		console.log(Oracle.includeTax());
    	},
    	includeTax: function(){
    		return Oracle.products.map(function(product){
    			product.price *= 1.15;
    			return product;
    		});
    	}
    }
})();

Oracle.init();