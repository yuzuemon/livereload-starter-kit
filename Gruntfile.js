// 'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    connect: {
      server: { //ぶっちゃけここの名前何でもいい.
        options: {
          hostname: '*',
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
      },
      uglify: {
        files: ['public/js/*.js'],
        tasks: ['uglify']
      }
    },

    uglify: {
      options: {
        mangle: true
      },
      my_target: {
        files: {
          'index.min.js': ['public/js/index.js']
        }
      }
    }
  });

  // load task
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
