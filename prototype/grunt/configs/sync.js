/**
 * grunt-sync: Task to synchronize two directories.
 * Similar to grunt-copy but updates only files that
 * have been changed.
 *
 * {@link} https://github.com/tomusdrw/grunt-sync
 */
module.exports = {
	assets: {
		files: [
			{
				cwd: '<%= paths.src %>/assets/',
				dest: '<%= paths.dev %>/',
				src: ['**/*', '!**/*.{png,jpg,gif}'] //images will be copied and optimized by imagemin
			}
		]
	},
	dev: {
		files: [
			{
				cwd: '<%= paths.src %>/js/modules/',
				dest: '<%= paths.dev %>/js/modules/',
				expand: true,
				src: ['**/*.js', '!**/*.{png,jpg,gif}'] //images will be copied and optimized by imagemin
			}
		]
	}
};
