/**
 * Configuration uglify
 *
 * {@link} https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = {
    options: {
        screwIE8: true
    },
    dev: {
        files: {
            '<%= paths.dev %>/js/_inlinehead-behavior.js': ['<%= paths.src %>/js/_inlinehead-behavior.js']
        }
    },
    dist: {
        files: {
            '<%= paths.dist %>/js/_inlinehead-behavior.js': ['<%= paths.src %>/js/_inlinehead-behavior.js']
        }
    }
};
