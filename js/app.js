require.config({
	baseUrl: "./js/",

	paths: {
		jquery: '../bower_components/jquery/jquery',
		jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
		'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html'
	},
	shim: {
		jasmine: {
            exports: 'jasmine'
        },
        'jasmine-html': {
            deps: ['jasmine'],
            exports: 'jasmine'
        }
	},
	
	optimize: "none"
});
				
require([
	'jquery',
	'jasmine-html'
	], 
function($, jasmine) {
	'use strict';

	var jasmineEnv = jasmine.getEnv();
	jasmine.VERBOSE = true;
	jasmineEnv.updateInterval = 1000;
 
	var htmlReporter = new jasmine.HtmlReporter();
 
	jasmineEnv.addReporter(htmlReporter);
 
	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

    var specs = [];
    specs.push('spec/NumbersToTextSpec');

    $(function () {
        require(specs, function (spec) {
            jasmineEnv.execute();
        });
    });

});




