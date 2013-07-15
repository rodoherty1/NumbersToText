require.config({
    baseUrl: './tests/',
	paths: {
		jquery: '../bower_components/jquery/jquery',		
		jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
		'jasmine-html': '../bower_components/jasmine/lib/jasmine-core/jasmine-html',
		'domReady': '../bower_components/requirejs/require/domReady'
	},
	shim: {
		'jasmine-html': {
			deps: ['jasmine'],
			exports: 'jasmine'
		}
	}	
});

require([
	'domReady!',
	'jquery',
	'jasmine-html'
	], function(domReady, $, jasmine){
 
	'use strict';
	
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;
 
	var htmlReporter = new jasmine.HtmlReporter();
 
	jasmineEnv.addReporter(htmlReporter);
 
	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};
 
	var specs = [];
 
	specs.push('NumbersToTextSpec');
 
	$(function(){
		require(specs, function(){
			jasmineEnv.execute();
		});
	});
});
