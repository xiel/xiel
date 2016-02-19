/**
 * grunt-contrib-imagemin
 * Minify PNG and JPEG images
 * https://github.com/gruntjs/grunt-contrib-imagemin
 */
module.exports = {

	options: {
		pngquant: true,
		optipng: false,
		zopflipng: true,
		advpng: true,
		jpegRecompress: true,
		jpegoptim: true,
		mozjpeg: true,
		gifsicle: true,
		svgo: true
	},
	dev: {
		files: [{
			expand: true,						// Enable dynamic expansion
			cwd: '<%= paths.src %>/assets/',	// Src matches are relative to this path
			src: ['**/*.{png,jpg,gif}'],		// Actual patterns to match
			dest: '<%= paths.dev %>/',			// Destination path prefix
		}]
	},
	dist: {
		files: [{
			expand: true,						// Enable dynamic expansion
			cwd: '<%= paths.src %>/assets/',	// Src matches are relative to this path
			src: ['**/*.{png,jpg,gif}'],		// Actual patterns to match
			dest: '<%= paths.dist %>/',			// Destination path prefix
		}]
	}
};