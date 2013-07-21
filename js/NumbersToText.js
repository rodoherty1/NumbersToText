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
			var suffixes = ['', 'thousand'];

			this.translateNumberUnder1000  = function (number) {
				var hundreds = this.div(number, 100);
				var hundredsInWords = zeroToNineteen[hundreds] + ' hundred';

				return hundredsInWords;
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
				var numberInWords = '';
				
				var numberInThousands = this.div(number, 1000);
				
				if (numberInThousands > 0) {
					numberInWords = this.translate (numberInThousands) + ' ' + this.getSuffix(number);
					number = number % 1000;
					if (number) {
						numberInWords = numberInWords + ' ';
					} else {
						return numberInWords;
					}
				} 
				
				if ((number < 1000) && (number >= 100)) {
					numberInWords = numberInWords + this.translateNumberUnder1000(number);
					number = number % 100;
					if (number) {
						numberInWords = numberInWords + ' ';
					}
				}
				
				var unitsInWords = this.translateNumberUnder100(number);
				if (numberInWords.length === 0) {
					numberInWords = unitsInWords;
				} else if (number) {					
					numberInWords = numberInWords + 'and ' + unitsInWords;
				}
				
				return numberInWords;
			};

			this.div = function (dividend, divisor) {
				return Math.floor(dividend / divisor);				
			};
			
			this.getSuffix = function (number) {
				var index = 0;
				while ((number = this.div(number, 1000)) > 0) {
					index++;
				}
				
				return suffixes[index];
			};
		}
		
        return new NumbersToText();
    }
);