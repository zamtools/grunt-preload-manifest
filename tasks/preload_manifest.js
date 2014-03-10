/*
 * grunt-preload-manifest
 * https://github.com/zamtools/grunt-preload-manifest
 *
 * Copyright (c) 2014 Zamtools Inc.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var _ = require('lodash');

  grunt.registerMultiTask('manifest', 'Creates manifest files that can be used by preloaders such as PreloadJS.', function() {
    var options = this.options({
      root: null,
      priorities: [],
      indent: 4
    });

    var manifest = {
      manifest: options.priorities.slice() // copy to prevent pushing values to reference
    };

    if (options.root) {
      manifest.path = options.root;
    }

    this.files.forEach(function(f) {
      var src = f.src.filter(function(filepath) {
        if (!grunt.file.exists(f.orig.cwd + path.sep + filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      });

      src.forEach(function(filepath) {
        if (!_.contains(options.priorities, filepath)) {
          manifest.manifest.push(filepath);
        }
      });

      grunt.file.write(f.dest, JSON.stringify(manifest, undefined, options.indent));

      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};