module.exports = {
	options: {
		plugins: [
			{ removeViewBox: false },
			{ removeUselessStrokeAndFill: false },
			{ removeTitle: true }
		]
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/assets/img/svg/icons',
			src: ['**/*.svg'],
			dest: '<%= paths.src %>/assets/img/svg/icons-optimized'
		}]
	}
};