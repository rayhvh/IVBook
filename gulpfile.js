var gulp = require('gulp');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var handlebars = require('gulp-ember-handlebars');

var paths = {
  templates: 'templates/**.hbs'
};

gulp.task('templates', function() {
  gulp.src(paths.templates)
    .pipe(plumber())
    .pipe(handlebars({ outputType: 'browser' }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch(paths.templates, ['templates']);
});

gulp.task('default', ['templates', 'watch']);
