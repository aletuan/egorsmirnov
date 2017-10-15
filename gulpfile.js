// require some install modules
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

// define build task
// 1. apply browserify for app.jsx
// 2. apply babel transform code from ECMAScript 6 to ECMAScript 5
// 3. output to bundle.js
gulp.task('build', function () {
    return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['react', 'es2015', 'stage-0']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});

// define watch task
// 1. run build task whenever jsx file is change
gulp.task('watch', ['build'], function () {
    gulp.watch('*.jsx', ['build']);
});

gulp.task('default', ['watch']);
