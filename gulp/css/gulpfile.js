const {series} = require('gulp')
const gulp = require('gulp')
const sass = require('gulp-sass')(require('node-sass'))
const uglifycss = require('gulp-uglifycss') // minificador de css
const concate = require('gulp-concat')

function transforCss(){
    return gulp.src('src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss({'uglyComments': true}))
    .pipe(concate('estilo.min.css'))
    .pipe(gulp.dest('build/css'))
}

function copiarhtml(cb){
     gulp.src('src/index.html')
    .pipe(gulp.dest('build'))
    return cb()
}
exports.default = series(transforCss,copiarhtml)