module.exports = function(grunt) {
    var files = {
        './assets/css/programai.css': './_assets/_sass/programai.scss'
    };

    grunt.config('sass', {
        options: {
            sourcemap: 'none'
        },

        dev: {                            
            options: {                       
                style: 'expanded'
            },

            files: files 
        },

        dist: {                            
            options: {                       
                style: 'compressed'
            },

            files: files 
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
};
