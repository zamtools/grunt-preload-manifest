/*
 * grunt-preload-manifest
 * https://github.com/zamtools/grunt-preload-manifest
 *
 * Copyright (c) 2014 Zamtools Inc.
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

    manifest: {
      default_options: {
        options: {
        },
        files: [
          {
            cwd: 'test/fixtures',
            src: ['**/*'],
            dest: 'tmp/default_options.json',
            filter: 'isFile'
          }
        ]
      },
      images_only: {
        options: {
        },
        files: [
          {
            cwd: 'test/fixtures',
            src: ['**/*.{jpg,jpeg,gif,png}'],
            dest: 'tmp/images_only.json',
            filter: 'isFile'
          }
        ]
      },
      root_option: {
        options: {
          root: 'dest/root/'
        },
        files: [
          {
            cwd: 'test/fixtures',
            src: ['**/*'],
            dest: 'tmp/root_option.json',
            filter: 'isFile'
          }
        ]
      },
      priorities_option: {
        options: {
          priorities: [
            'primary/fourth.jpeg',
            'primary/third.gif',
            'secondary/d.woff'
          ]
        },
        files: [
          {
            cwd: 'test/fixtures',
            src: ['**/*'],
            dest: 'tmp/priorities_option.json',
            filter: 'isFile'
          }
        ]
      },
      indent_option: {
        options: {
          indent: null
        },
        files: [
          {
            cwd: 'test/fixtures',
            src: ['**/*'],
            dest: 'tmp/indent_option.json',
            filter: 'isFile'
          }
        ]
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

  grunt.registerTask('test', ['clean', 'manifest', 'nodeunit']);
  grunt.registerTask('default', ['jshint', 'test']);
};