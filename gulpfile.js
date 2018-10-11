const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminGuetzli = require('imagemin-guetzli');
const imageminPngquant = require('imagemin-pngquant');

gulp.task('optimize-jpg', () => {
  gulp
    .src('src/*.jpg')
    .pipe(imagemin([imageminGuetzli({ quality: 95 })]))
    .pipe(imagemin([imageminMozjpeg({ progressive: true, quality: 85 })]))
    .pipe(gulp.dest('dist'));
});

gulp.task('optimize-png', () => {
  gulp
    .src('src/*.png')
    .pipe(imagemin([imageminPngquant({ quality: 85 })]))
    .pipe(gulp.dest('dist'));
});
