const gulp = require('gulp')
const usemin = require('gulp-usemin')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const cleanCss = require('gulp-clean-css')
const rev = require('gulp-rev')
const del = require('del')
const sass = require('gulp-sass')(require('sass'))

function clean() {
  return del(['dist'])
}

function imagemin() {
  return gulp.src('src/img/*').pipe(imagemin()).pipe(gulp.dest('dist/img'))
}

function buildStyles() {
  return gulp
    .src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/css'))
}

function useminTask() {
  return gulp
    .src('./src/*.html')
    .pipe(
      usemin({
        css: [rev()],
        html: [htmlmin({ collapseWhitespace: true })],
        js: [uglify(), rev()],
        inlinejs: [uglify()],
        inlinecss: [cleanCss(), 'concat'],
      })
    )
    .pipe(gulp.dest('dist/'))
}

const build = gulp.series(clean, gulp.parallel(imagemin, useminTask))

exports.sass = buildStyles
gulp.task('watch', function () {
  gulp.watch('./src/sass/*.scss', gulp.series('sass'))
})

exports.build = build
