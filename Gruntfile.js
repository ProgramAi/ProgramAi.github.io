module.exports = function(grunt) {

    require('./grunt/workflow.js')(grunt);
    require('./grunt/sass.js')(grunt);
    require('./grunt/watch.js')(grunt);
    require('./grunt/copy.js')(grunt);
    require('./grunt/uglify.js')(grunt);

};
