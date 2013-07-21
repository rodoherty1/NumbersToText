// Define the module.
define(
    [
        /* No dependencies. */
    ],
    function() {
		'use strict';
		
		function NumbersToText () {
			var zeroToNineteen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
			var twentyToNinety = ['units', 'tens', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

			this.translateNumberUnder1000  = function (number) {
				var hundreds = this.div(number, 100);
				var hundredsInWords = zeroToNineteen[hundreds] + ' hundred';
				
				if (number % 100) {
					return hundredsInWords + ' and ' + this.translateNumberUnder100(number % 100);
				} else {
					return hundredsInWords;
				}
			};
			
			
			this.translateNumberUnder100  = function (number) {
				var tens = this.div(number, 10);
				var units = number % 10;
				var unitsInWords = '';
				
				if (tens < 2) {
					return zeroToNineteen[number];
				} else {
					if (units > 0) {
						unitsInWords = ' ' + zeroToNineteen[units];
					} 
					
					return twentyToNinety[tens] + unitsInWords;
				}
			};


			this.translate = function (number) {
				if ((this.div(number, 1000)) > 1000) {
					return this.translate (number % 1000);
				} else {
					if (number < 100) {
						return this.translateNumberUnder100(number);
					} else {
						return this.translateNumberUnder1000(number);
					}
				}
			};

			this.div = function (dividend, divisor) {
				return Math.floor(dividend / divisor);				
			};
			
		}
		
        return new NumbersToText();
    }
);