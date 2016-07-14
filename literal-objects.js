var Oracle;

(function() {
    "use strict";
    Oracle = {
    	init: function(){
    		console.log('constructor');
    		Oracle.method1();
    		Oracle.method2();
    	},
    	method1: function(){
    		console.log('method 1 called');
    	},
    	method2: function(){
    		console.log('method 2 called');
    	}
    }
})();

Oracle.init();