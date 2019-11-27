const gulp = require('gulp');
var tinify = require('gulp-tinify');
var jsmin = require('gulp-jsmin');
var rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');

gulp.task('move-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(gulp.dest('bild/css'))
})
gulp.task('move-fonts', () => {
  return gulp.src('src/fonts/*.*')
    .pipe(gulp.dest('bild/fonts'))
})
gulp.task('tinify', function () {
  return gulp.src('src/img/**/*/*.*')
    .pipe(tinify('XPkRb5vNFDXQc12s1H6NCVBY65r71nnV'))
    .pipe(gulp.dest('bild/img'));
});
gulp.task('move-img', () => {
  return gulp.src('src/img/*.svg')
    .pipe(gulp.dest('bild/img'))
})
gulp.task('move-js', () => {
  return gulp.src('src/js/*.min.js')
    .pipe(gulp.dest('bild/js'))
});
gulp.task('minjs', function () {
  return gulp.src(['src/js/*.js', '!src/js/*.min.js'])
    .pipe(jsmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('bild/js'));
});
gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('bild/'));
});