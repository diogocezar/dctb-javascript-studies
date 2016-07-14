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
    		console.log('Cheap products: ');
    		console.log(Oracle.getCheap());
    		console.log('Ending products: ');
    		console.log(Oracle.getEnding());
    	},
    	getCheap: function(){
    		return Oracle.products.filter(function(product){
    			return product.price < 100;
    		});
    	},
    	getEnding: function(){
    		return Oracle.products.filter(function(product){
    			return product.amount <= 50;
    		});
    	}
    }
})();

Oracle.init();