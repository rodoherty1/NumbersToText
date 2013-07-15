require.config({
    baseUrl: './tests/',
	paths: {
		jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
		'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html'
	},
	shim: {
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		}
	}	
});

require([
	'jasmine-html'
	],

		
