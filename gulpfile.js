var gulp = require('gulp'),
  sass = require('gulp-sass'),
  concat = require('gulp-concat'),
  reactify = require('reactify'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

var path = {
  INDEX: 'src/index.*',
  JS: ['src/js/*.js', 'src/js/**/*.js'],
  DATA: 'src/data/**/*',
  ASSETS: 'src/assets/**/*',
  DEST_BUILD: 'build'
};

var browserifyConfig = {
  entries: ['./src/js/app.js']
};

gulp.task('copy', function(){
  gulp.src([path.INDEX, path.ASSETS, path.DATA], {
    base: 'src'
  }).pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('sass', function() {
  return gulp.src('src/styles/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(path.DEST_BUILD+'/styles'));
});

gulp.task('browserify', function() {
  return browserify(browserifyConfig)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function(){
  gulp.watch([path.INDEX, path.ASSETS, path.DATA], ['copy']);
  gulp.watch(path.JS, ['browserify']);
  gulp.watch('src/styles/scss/*.scss', ['sass']);
});



gulp.task('default', ['browserify', 'copy', 'sass', 'watch']);
