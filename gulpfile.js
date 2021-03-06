const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    // babel = require('gulp-babel'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    // concat = require('gulp-concat-util'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    // concat = require('gulp-concat'),
    /* File paths */
    sassSrc = 'src/scss/main.scss',
    cssDist = 'assets/css/',
    jsSrc = 'src/js/**/*.js',
    jsDist = 'assets/js/';

gulp.task('sass', function(){
  return gulp.src(sassSrc)
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(cssDist))
});

gulp.task('js', function(){
  return gulp.src(jsSrc)
  .pipe(concat('all.js'))
  // .pipe(concat.scripts('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest(jsDist))
});


gulp.task('build', gulp.series('sass', 'js'));

gulp.task('watch', function() {
  gulp.watch(sassSrc, gulp.series('sass'));
  gulp.watch(jsSrc, gulp.series('js'));
});

gulp.task('default', async function(){
    gulp.series('build');
});