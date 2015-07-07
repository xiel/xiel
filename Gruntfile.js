/*
 * Generated on 2015-06-17
 * generator-prototype v0.5.11
 * http://prototype-generator.com/
 *
 * Copyright (c) 2015 Sebastian Fitzner
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {
		'replace': 'grunt-text-replace'
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	var options = {
	// Project settings
		config: {
			// in this directory you can find your grunt config tasks
			src: "helpers/_grunt/*.js"
		},
		// define your path structure
		paths: {
			// helpers folder with grunt tasks and templates, tests and photobox
			helper: 'helpers',
			// resources folder with working files
			src: 'resources',
			// dev/working folder
			dev: '_output'
		},
	// define your ports for grunt-contrib-connect
		ports: {
			app: 3000,
			test: 3001,
			livereload: 35731
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */
	
	// SASS Task
	grunt.registerTask('watchCSS', [
		'fileindex:libsassGlobbing', // Sass Globbing with Grunt (see: http://www.prototype-generator.com/getting-started/features.html)
		'sass:dist'
	]); 
	
	// Sprites Task
	grunt.registerTask('icons', [
		'dr-svg-sprites',
		'replace:spriteUrl'
	]); 
	
	
	// Sync JS Task
	grunt.registerTask('syncJS', [
		'sync:js'
	]);
	
	// Build HTML Task
	grunt.registerTask('build-html', [
		'assemble'
	]);
	
	// HTML Hint Task (Check your HTML)
	grunt.registerTask('check-html', [
		'htmlhint'
	]);
	// JS Hint Task (Check you JS)
	grunt.registerTask('check-js', [
		'jshint'
	]);
	// Beautifier Task (Beautify your JS files)
	grunt.registerTask('beauty-files', [
		'jsbeautifier'
	]);

	/*
	 *	ADVANCED TASKS
	 */
	grunt.registerTask('server', [
		'newer:assemble',
		'concurrent:syncing',
		'watchCSS',
		'autoprefixer',
		'connect:livereload',
		'watch'
	]);
	
	grunt.registerTask('build', [
		'clean:dev',
		'jsbeautifier',
		'concurrent:syncing',  
		'watchCSS',
		'sass:universal',
		'combine_mq',
		'cssmin',
        'assemble',
		'concurrent:build'
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);
};