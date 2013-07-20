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

			this.translateNumberUnder100  = function (number) {
				var tens = Math.floor(number / 10);
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
				if (number < 100) {
					return this.translateNumberUnder100(number);
				} else {
					return 'too big for now';
				}
			};
			
		}
		
        return new NumbersToText();
    }
);