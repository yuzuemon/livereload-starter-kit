// 'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    connect: {
      server: { //ぶっちゃけここの名前何でもいい.
        options: {
          hostname: 'localhost',
          port: 9001 // default 35729
        }
      }
    },

    watch: {
      livereload: {
        files: ['**/*.html', '**/*.css'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    }
  });

  // load task
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
