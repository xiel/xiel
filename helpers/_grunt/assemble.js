module.exports = {
	options: {
		assets: '<%= paths.dev %>',
		data: '<%= paths.src %>/templates/data/**/*.json',
		helpers: '<%= paths.src %>/templates/helpers/**/*.js',
		layoutdir: '<%= paths.src %>/templates/layouts/',
		layout: 'tpl-default.hbs', 
		partials: [
			'<%= paths.src %>/templates/partials/**/*.hbs'
		],
		collections: [
			'sitemap'
		]
	},
	pages: {
		options: {
		},
		files: [{
			cwd: '<%= paths.src %>/templates/pages/',
			dest: '<%= paths.dev %>/',
			expand: true,
			flatten: true,
			src: ['**/*.hbs']
		}]
	}
};