var gulp = require('gulp')
var vue = require('gulp-vue-file');

gulp.task('vue', function () {
    gulp.src('vue/**')
        .pipe(vue())
        .pipe(gulp.dest('build/'));
});