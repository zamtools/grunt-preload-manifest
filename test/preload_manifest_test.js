'use strict';

var grunt = require('grunt');

exports.preload_manifest = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/default_options.json');
    var expected = grunt.file.read('test/expected/default_options.json');
    test.equal(actual, expected, 'should include all files in the manifest.');

    test.done();
  },
  images_only: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/images_only.json');
    var expected = grunt.file.read('test/expected/images_only.json');
    test.equal(actual, expected, 'should only include images in the manifest.');

    test.done();
  },
  root_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/root_option.json');
    var expected = grunt.file.read('test/expected/root_option.json');
    test.equal(actual, expected, 'should include a root url in the manifest.');

    test.done();
  },
  priorities_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/priorities_option.json');
    var expected = grunt.file.read('test/expected/priorities_option.json');
    test.equal(actual, expected, 'should include the priorities paths first in the manifest.');

    test.done();
  },
  indent_option: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/indent_option.json');
    var expected = grunt.file.read('test/expected/indent_option.json');
    test.equal(actual, expected, 'should remove all indentation from the manifest.');

    test.done();
  }
};
