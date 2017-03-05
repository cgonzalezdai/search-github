module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['spec'],
    browsers: ['PhantomJS'],
    files: [
      'dist/js/main.min.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'spec/**/*.js'
    ]
  });
};