module.exports = function( grunt ) {
    grunt.config('watch', {
        options: {
            event: ['added', 'changed', 'deleted']
        },

        styles: {
            files: './_assets/_sass/**/*.scss',
            tasks: [ 'sass:dev' ]
        },

        scripts: {
            files: './_assets/js/**/*.js',
            tasks: [ 'copy:scripts' ]
        },

        liveReload: {
            options: {
                livereload: true
            },

            files: [
                './assets/css/*.css',
                './assets/js/*.js',
                './**/*.html',
                './**/*.md',
                '!./_site/**/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
