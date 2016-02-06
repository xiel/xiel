/**
 * grunt-sass: Compile Sass to CSS using node-sass
 *
 * {@link} https://github.com/sindresorhus/grunt-sass
 */
module.exports = {

	dev: {
		options: {
			outputStyle: 'nested',
			sourceMap: true
		},
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/scss/',
			src: ['*.scss', '!**/_*.scss'],
			dest: '<%= paths.dev %>/css/',
			ext: '.css',
			extDot: 'last',
			rename: function(path, file){
				return path + (file.replace(/^tmp_/, ''));
			}
		}],
	},
	dist: {
		options: {
			outputStyle: 'nested',
			sourceMap: false
		},
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/scss/',
			src: ['*.scss', '!_*.scss'],
			dest: '<%= paths.dist %>/css/',
			ext: '.css',
			extDot: 'last',
			rename: function(path, file){
				return path + (file.replace(/^tmp_/, ''));
			}
		}],
	}
}
