module.exports = function( grunt ) {
    grunt.config('copy', {
        fontAwesome: {
            files: [
                {
                    expand: true, 
                    cwd: './_vendor/font-awesome/',
                    src: ['font-awesome.min.css'], 
                    dest: './assets/css/'
                },

                {
                    expand: true, 
                    cwd: './_vendor/font-awesome/fonts/',
                    src: ['*'], 
                    dest: './assets/fonts/'
                }
            ]
        },

        scripts: {
            src: './_assets/js/programai.js',
            dest: './assets/js/programai.js'
        },

        images: {
            files: [
                {
                    expand: true, 
                    cwd: './_assets/img/',
                    src: ['*'], 
                    dest: './assets/img/'
                }
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
};
