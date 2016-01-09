var gulp = require('gulp');
var watch = require('gulp-watch');
var jshint = require('gulp-jshint');

var paths = {
  js: 'lib/**/*.js'
};

gulp.task('dev', ['js-dev', 'watch']);

gulp.task('js-dev', function() {
  return gulp.src(paths.js)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('watch', function() {
  gulp.watch(paths.js, ['js-dev']);
});
