module.exports = function( grunt ) {
    grunt.config('watch', {
        options: {
            event: ['added', 'changed', 'deleted']
        },

        styles: {
            files: './_assets/_sass/**/*.scss',
            tasks: [ 'sass:dev' ]
        },

        liveReload: {
            options: {
                livereload: true
            },

            files: [
                './assets/css/*.css',
                './**/*.html',
                './**/*.md',
                '!./_site/**/*'
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
};
