module.exports = {
    options: {
        port: '<%= ports.app %>',
        livereload: '<%= ports.livereload %>',
        // change this to '0.0.0.0' to access the server from outside
        // hostname: 'localhost',
        hostname: '0.0.0.0'
    },
    livereload: {
        options: {
            open: true,
            base: [
                '<%= paths.dev %>'
            ]
        }
    }
};