const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    babel = require('gulp-babel'),
    eslint = require('gulp-eslint'),
    styleLint = require('gulp-stylelint'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    // concat = require('gulp-concat'),
    /* File paths */
    sassSrc = 'src/scss/**/*.scss',
    cssDist = 'assets/css/',
    jsSrc = 'src/js/**/*.js',
    jsVendorSrc = 'src/js/vendor/**/*.js',
    jsDist = 'assets/js/';

gulp.task('sass', function(){
  return gulp.src(sassSrc)
    .pipe(styleLint({
        failAfterError: true,
        reportOutputDir: 'reports/lint',
        reporters: [
        {formatter: 'string', console: true},
        {formatter: 'json', save: 'report.json'}
      ]
    }))
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
    .pipe(eslint({
        'rules':{
            'quotes': [1, 'single'],
            'semi': [1, 'always'],
            'no-console': [1],
            'no-mixed-spaces-and-tabs': [1]
        },
        envs: [
            'browser',
            'jquery'
        ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
    .pipe(babel())
    .pipe(minify({
        ignoreFiles: ['.min.js'],
        ext: {
                min: '.min.js'
            }
    }))
    .pipe(gulp.dest(jsDist))
});

//  Not currently in use but can be used to concat and minify single vendor JS file
gulp.task('vendor', function () {    
    return gulp.src(jsVendorSrc)
        .pipe(concat('vendor.js'))
        .pipe(minify({
            ext: {
                min: '.min.js'
            }
        }))
        .pipe(gulp.dest(jsDist));
});


gulp.task('build', gulp.series('sass', 'js'));

gulp.task('watch', function() {
  gulp.watch(sassSrc, gulp.series('sass'));
  gulp.watch(jsSrc, gulp.series('js'));
});

gulp.task('default', async function(){
    gulp.series('build');
});