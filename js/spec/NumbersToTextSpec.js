define([
	'NumbersToText',
	],
function(numbersToText) {
	'use strict';
	
	describe('testing with single digit numbers', function() {
		'use strict';

		it("should be able to translate single digit words", function()
		{
			expect(numbersToText.translate(1)).toBe('ONE');
		});
	});
});