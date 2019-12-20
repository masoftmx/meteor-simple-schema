Package.describe({
  name: 'masoftmx:simple-schema',
  summary: 'A simple schema validation object with reactivity. Used by collection2 and autoform.',
  version: '1.5.4',
  git: 'https://github.com/masoftmx/meteor-simple-schema.git'
});

Package.onUse(function (api) {
  api.use('tracker@1.0.0');
  api.use('underscore@1.0.0');
  api.use('check@1.0.0');
  api.use('random@1.0.0');

  api.use('mdg:validation-error@0.2.0', {unordered: true});

  api.addFiles([
    'string-polyfills.js',
    'string-humanize.js',
    'mongo-object.js',
    'simple-schema-utility.js',
    'simple-schema.js',
    'simple-schema-validation.js',
    'simple-schema-validation-new.js',
    'simple-schema-context.js',
  ]);
  api.export(['SimpleSchema', 'MongoObject'], ['client', 'server']);
  api.export('humanize', {testOnly: true});
});

Package.onTest(function (api) {
  api.use('aldeed:simple-schema');
  api.use('tinytest@1.0.0');
  api.use('test-helpers@1.0.0');
  api.use('underscore@1.0.0');
  api.use('check@1.0.0');

  api.addFiles([
    'simple-schema-tests.js',
    'mongo-object-tests.js',
    'humanize-tests.js',
    'validation-error-tests.js'
  ], ['client', 'server']);
});
