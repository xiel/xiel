module.exports = {
	options: {
		outputStyle: 'nested',
		sourceMap: false
	},
	dist: {
		files: {
			'<%= paths.dev %>/css/styles.css': '<%= paths.src %>/scss/styles.scss',
			'<%= paths.dev %>/css/styles.icons.css': '<%= paths.src %>/scss/styles.icons.scss'
		}
	}
};