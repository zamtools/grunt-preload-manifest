# grunt-preload-manifest

> Creates manifest files that can be used by preloaders such as PreloadJS.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-preload-manifest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-preload-manifest');
```

## The "manifest" task

### Overview
In your project's Gruntfile, add a section named `manifest` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  manifest: {
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
Default value: `null`

The base path that is shared by all assets URLs in the manifest. This reduces the file size of the manifest by eliminating the need to prefix the URL for each asset. Remember to include a trailing `/` at the end of this path.

#### options.priorities
Type: `Array`
Default value: `[]`

A list of asset URLs that should come first in the manifest. This will ensure those assets are preloaded as soon as possible. These URLs are relative to the root URL just like the other assets in the manifest.

#### options.indent
Type: `Integer or String`
Default value: `4`

Controls the indentation of the JSON data in the manifest. An integer will indent by that number of spaces, a string will indent using that string, and null will result in no indentation.

### Usage Examples

#### Example Manifest

```json
{
    "manifest": [
        "primary/first.jpg",
        "primary/junk.txt",
        "primary/second.png",
        "secondary/a.ttf",
        "secondary/b.svg",
        "secondary/c.eot",
    ],
    "path": "static/assets/"
}
```

#### Default Options
The default options are used to add all files within the `app/static` directory to the manifest. Be sure to include the ```filter: isFile``` to prevent directories from being added.

```js
grunt.initConfig({
  manifest: {
    options: {},
    files: [
      {
        cwd: 'app/static',
        src: ['**/*'],
        dest: 'app/preload_manifest.json',
        filter: 'isFile'
      }
    ],
  },
});
```

#### Images only
Globbing patterns are used to only add images within the `app/static` directory to the manifest.

```js
grunt.initConfig({
  manifest: {
    options: {},
    files: [
      {
        cwd: 'app/static',
        src: ['**/*.{jpg,jpeg,gif,png}'],
        dest: 'app/preload_manifest.json',
        filter: 'isFile'
      }
    ],
  },
});
```

#### Root Option
The root option is used add a `path` URL to the manifest, eliminating the need to prefix all asset URLs with said root URL.

```js
grunt.initConfig({
  manifest: {
    options: {
      root: 'static/assets/'
    },
    files: [
      {
        cwd: 'app/static',
        src: ['**/*.{jpg,jpeg,gif,png}'],
        dest: 'app/preload_manifest.json',
        filter: 'isFile'
      }
    ],
  },
});
```

#### Priorities Option
The priorities option is used to ensure certain assets are loaded first.

```js
grunt.initConfig({
  manifest: {
    options: {
      root: 'static/assets/'
      priorities: ['images/logo.jpg', 'images/background.jpg']
    },
    files: [
      {
        cwd: 'app/static',
        src: ['**/*.{jpg,jpeg,gif,png}'],
        dest: 'app/preload_manifest.json',
        filter: 'isFile'
      }
    ],
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
0.1.5 - root is now path in manifest, as per specification
0.1.0 - Initial release