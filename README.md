# grunt-manifesto

> Creates manifest files that can be used by preloaders such as PreloadJS.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-manifesto --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-manifesto');
```

## The "manifesto" task

### Overview
In your project's Gruntfile, add a section named `manifesto` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  manifesto: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.root
Type: `String`
Default value: null

The base path that is shared by all assets URLs in the manifest. This reduces the file size of the manifest by eliminating the need to prefix the URL for each asset. Remember to include a trailing ```/``` at the end of this path.

#### options.priorities
Type: `Array`
Default value: []

A list of asset URLs that should come first in the manifest. This will ensure those assets are preloaded as soon as possible. Remember *not* include any leading slashes at the beginning of any paths.

#### options.indent
Type: `Integer or String`
Default value: 4

Controls the indentation of the JSON data in the manifest. An integer will indent with that number of spaces, a string will indent using that string, and null will result in no indentation.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  manifesto: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  manifesto: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
