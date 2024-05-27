const {src, dest, series, parallel, watch } = require("gulp")
const babel = require("gulp-babel")
const uglify = require("gulp-uglify")
const sass = require("gulp-sass")(require('sass'))
const concat = require("gulp-concat")
const htmlmin = require("gulp-htmlmin")
const uglifycss = require('gulp-uglifycss')
const gulp = require("gulp");

 
 
function appHTML() {
    return src("./src/**/*.html")
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest("build"))
}
 
function appCSS() {
    return src("./src/sass/index.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(uglifycss({'uglyComments':true}))
        //.pipe(concat('style.css'))
        //.pipe(dest("build/assets/css"))
        //.pipe(sass({outputStyle: 'compressed'}).on("error", sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(dest("build/assets/css"))
}
 
function appJS() {
    return src("./src/assets/js/**/*.js")
        .pipe(babel({presets: ['@babel/preset-env']}))
        .pipe(uglify())
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest("build/assets/js"))
}
 
function appIMG() {
    return src("./src/assets/imgs/**/*.*")
        .pipe(gulp.dest("build/assets/imgs"))
}
 
 exports.default = function () {
     watch("./src/**/*.html", appHTML)
     watch("./src/sass/index.scss", appCSS)
     watch("./src/assets/js/**/*.js", appJS)
     watch("./src/assets/imgs/**/*.*", appIMG)
 }

// const {appHtml,appCss,appJs,appImg} = require('./gulpTasks/app')
// const {depsCss,depsFonts} = require('./gulpTasks/deps.js')
// const {monitorarArquivos,servidor}  = require('./gulpTasks/servidor')

// module.exports.default = series(
//     parallel(
//         series(appHtml,appCss,appJs,appImg),
//         series(depsCss,depsFonts)
//     ),
//     servidor,
//     monitorarArquivos
// )