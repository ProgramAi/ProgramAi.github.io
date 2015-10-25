module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('./package.json')
    });

    grunt.registerTask('dev', ['sass:dev', 'copy', 'watch']);
    grunt.registerTask('build', ['sass:dist', 'uglify']);
};
