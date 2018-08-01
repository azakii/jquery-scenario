var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('less', function(){
  return gulp.src('vendor/scss/*.scss')
    .pipe(less()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css'))
});
gulp.task('run', function() {
    browserSync.init({
        proxy: "http://localhost/jquery-scenario",
    });
});
gulp.task('watch', ['run', 'less'], function (){
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('vendor/scss/*.scss', ['less']);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('css/*.css', browserSync.reload);
  gulp.watch('js/*.js', browserSync.reload);
});

gulp.task('hello', function() {
  console.log('');
});
gulp.task('default', ['hello','watch', 'less', 'run']);
