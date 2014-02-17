/*
 * grunt-manifesto
 * https://github.com/zamtools/grunt-manifesto
 *
 * Copyright (c) 2014 Ian Zamojc
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  var path = require('path');
  var _ = require('lodash');

  grunt.registerMultiTask('manifesto', 'Creates manifest files that can be used by preloaders such as PreloadJS.', function() {
    var options = this.options({
      root: null,
      priority: [],
      indent: 4
    });

    var manifest = {
      manifest: options.priority.slice() // copy to prevent pushing values to reference
    };

    if (options.root) {
      manifest.root = options.root;
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

      console.log(src);

      src.forEach(function(filepath) {
        manifest.manifest.push(filepath);
      });

      grunt.file.write(f.dest, JSON.stringify(manifest, undefined, options.indent));

      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });
};