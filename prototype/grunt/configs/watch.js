/**
 * Configuration grunt-contrib-watch:
 * Run predefined tasks whenever watched file
 * patterns are added, changed or deleted.
 *
 * {@link} https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = {
    configFiles: {
        options: {
            reload: true
        },
        files: [
            '<%= paths.helper %>/*.js',
            'Gruntfile.js'
        ]
    },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= paths.dev %>/{,*/}*.html',
            '<%= paths.dev %>/css/{,*/}*.css',
            '<%= paths.dev %>/js/{,*/}*.js'
        ]
    },
    scss: {
        files: ['<%= paths.src %>/scss/**/*.scss', '<%= paths.src %>/components/**/*.scss', '!<%= paths.src %>/scss/tmp_*.scss'],
        tasks: ['css'],
        options: {
            debounceDelay: 100,
            livereload: false
        }
    },
    syncAssets: {
        files: ['<%= paths.src %>/assets/**/*'],
        tasks: ['sync:assets']
    },
    inline_js: {
        files: ['<%= paths.src %>/js/_inlinehead-behavior.js'],
        tasks: ['uglify:dev']
    },
    js: {
        files: ['<%= paths.src %>/**/*.{js,es6,es2015}'],
        tasks: ['webpack:dev']
    },
    icons: {
        files: ['<%= paths.src %>/assets/img/svg/icons/**/*'],
        tasks: ['icons']
    }
};
