/**
 * Copy files and folders.
 *
 * {link} https://github.com/gruntjs/grunt-contrib-copy
 */

module.exports = {
	dist: {
		cwd: '<%= paths.src %>/assets/',
		dest: '<%= paths.dist %>/',
		expand: true,
		src: ['**/*']
	}
};
