var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');


gulp.task('css', function () {
    gulp.src('./src/styles/style-gulp.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/gulp/'));
});

gulp.task('js', function() {
  gulp.src('./src/scripts/script-gulp.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/gulp/'));
});

gulp.task('image', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/gulp/'));
});
