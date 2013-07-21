define([
	'NumbersToText'
	],
function(numbersToText) {
	'use strict';
	
	describe('Translate the numbers from 0 - 19', function(){
	    var tests = {};
	    tests['0'] = 'zero';
	    tests['1'] = 'one';
	    tests['2'] = 'two';
	    tests['3'] = 'three';
	    tests['4'] = 'four';
	    tests['5'] = 'five';
	    tests['6'] = 'six';
	    tests['7'] = 'seven';
	    tests['8'] = 'eight';
	    tests['9'] = 'nine';
	    tests['10'] = 'ten';
	    tests['11'] = 'eleven';
	    tests['12'] = 'twelve';
	    tests['13'] = 'thirteen';
	    tests['14'] = 'fourteen';
	    tests['15'] = 'fifteen';
	    tests['16'] = 'sixteen';
	    tests['17'] = 'seventeen';
	    tests['18'] = 'eighteen';
	    tests['19'] = 'nineteen';
	    
		it('translates the numbers from 0 - 19', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});

	describe('Translate the 20-something numbers', function(){
	    var tests = {};
	    tests['20'] = 'twenty';
	    tests['21'] = 'twenty one';
	    tests['22'] = 'twenty two';
	    tests['23'] = 'twenty three';
	    tests['24'] = 'twenty four';
	    tests['25'] = 'twenty five';
	    tests['26'] = 'twenty six';
	    tests['27'] = 'twenty seven';
	    tests['28'] = 'twenty eight';
	    tests['29'] = 'twenty nine';
	    
		it('translates the numbers from 20 - 29', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});

	describe('Translate the numbers from 30 to 100', function(){
	    var tests = {};
	    tests['30'] = 'thirty';
	    tests['32'] = 'thirty two';
	    tests['40'] = 'forty';
	    tests['43'] = 'forty three';
	    tests['50'] = 'fifty';
	    tests['54'] = 'fifty four';
	    tests['60'] = 'sixty';
	    tests['65'] = 'sixty five';
	    tests['70'] = 'seventy';
	    tests['76'] = 'seventy six';
	    tests['80'] = 'eighty';
	    tests['87'] = 'eighty seven';
	    tests['90'] = 'ninety';
	    tests['98'] = 'ninety eight';

		it('translates the numbers from 30 - 99', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});

	describe('Translate the numbers from 100 to 999', function(){
	    var tests = {};
	    tests['100'] = 'one hundred';
	    tests['101'] = 'one hundred and one';
	    tests['114'] = 'one hundred and fourteen';
	    tests['299'] = 'two hundred and ninety nine';
	    tests['406'] = 'four hundred and six';

		it('translates the numbers from 100 - 999', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});

	describe('Translate the numbers from 1000 and 1999', function(){
	    var tests = {};
	    tests['1000'] = 'one thousand';
	    tests['1001'] = 'one thousand and one';
	    tests['1099'] = 'one thousand and ninety nine';

		it('translates the numbers from 1000 - 1999', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});


	describe('Translate the remaining numbers', function(){
	    var tests = {};
	    tests['10000'] = 'ten thousand';
	    tests['10001'] = 'ten thousand and one';
	    tests['10099'] = 'ten thousand and ninety nine';
	    tests['100000'] = 'one hundred thousand';
	    tests['100001'] = 'one hundred thousand and one';
	    tests['1000000'] = 'one million';
	    tests['1000001'] = 'one million and one';
	    tests['1000099'] = 'one million and ninety nine';
	    tests['1001001'] = 'one million one thousand and one';
	    tests['1099001'] = 'one million ninety nine thousand and one';
	    tests['1010001'] = 'one million ten thousand and one';
	    tests['101000001'] = 'one hundred and one million and one';
	    tests['999999999'] = 'nine hundred and ninety nine million nine hundred and ninety nine thousand nine hundred and ninety nine';

		it('translates the remaining numbers', function(){
			for (var key in tests) {
				var nextNum = parseInt(key, 10);
				expect(numbersToText.translate(nextNum)).toBe(tests[key]);
			}
		});
	});
});