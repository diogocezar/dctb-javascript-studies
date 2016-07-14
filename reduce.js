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
    		console.log('Total Products: ');
    		console.log(Oracle.sumAll());
    	},
    	sumAll: function(){
    		return Oracle.products.map(function(product){
    			return product.price;
    		}).reduce(function(sum, value){
    			return sum += value;
    		});
    	}
    }
})();

Oracle.init();