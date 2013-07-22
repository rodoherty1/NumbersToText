// Define the module.
define(
    [
        /* No dependencies. */
    ],
    function() {
		'use strict';
		
		function NumbersToText () {
			var zeroToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
			var twentyToNinety = ['units', 'tens', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
			var suffixes = ['', ' thousand', ' million', ' brazillion'];

			this.translate = function (number) {
				var numberInWords = '';
				var numberDiv1000 = number;				
				var blocks=[],  blocksInWords=[];
				blocks = this.splitIntoBlocks(number);
				
				for (var i=0; i<blocks.length; i++) {
					blocksInWords[i] = this.translateBlock(blocks[i]);
				}
				
				numberInWords = this.concatBlocksIntoWords (blocks, blocksInWords);
				
				return numberInWords;
			};
			
			this.translateBlock = function(number) {
				var numberInWords = '';
				
				if (number >= 100) {
					numberInWords = this.translateNumberUnder1000(number);
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

			this.concatBlocksIntoWords = function(blocks, blocksInWords) {
				var numberInWords = blocksInWords[blocks.length-1] + suffixes[blocks.length-1];
				
				for (var i=blocks.length-2; i>0; i--) {
					if (blocks[i] > 0) {
						numberInWords = numberInWords + ' ' + blocksInWords[i] +  suffixes[i];
					}
				}
				
				if (blocks.length > 1) {
					if (blocks[0] > 0 && blocks[0] < 100) {
						numberInWords = numberInWords + ' and ' + blocksInWords[0];
					} else if (blocks[0] >= 100 && blocks[0] < 1000) {
						numberInWords = numberInWords + ' ' + blocksInWords[0];
					}
				}
				
				if (numberInWords.length === 0) {
					numberInWords = 'zero';
				}
				
				return numberInWords;
			};
			

			this.splitIntoBlocks = function (number) {
				var blockIndex = 0;
				var blocks = [];
				
				do {
					blocks[blockIndex] = number % 1000;	
					blockIndex++;
				} while ((number = this.div(number, 1000)) > 0);
				
				return blocks;
			};

			this.div = function (dividend, divisor) {
				return Math.floor(dividend / divisor);				
			};
			
		}
		
        return new NumbersToText();
    }
);