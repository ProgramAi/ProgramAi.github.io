module.exports = function( grunt ) {

    grunt.config('uglify', {
        dist: {
            files: {
                'assets/js/programai.js': ['_assets/js/programai.js']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
