/*
 * grunt-manifesto
 * https://github.com/zamtools/grunt-manifesto
 *
 * Copyright (c) 2014 Ian Zamojc
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    clean: {
      tests: ['tmp'],
    },

    manifesto: {
      default_options: {
        options: {
        },
        files: {
          'tmp/default_options.json': ['test/fixtures/images/*']
        },
      }
    },

    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-coffee');

  grunt.registerTask('test', ['clean', 'manifesto', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};
