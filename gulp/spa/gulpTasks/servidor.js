const gulp = require('gulp')
const webserver = require('gulp-webserver')
const {watch } = require('gulp')
const { appHtml, appCss, appJs, appImg } = require('./app')


function servidor(cb){
    return gulp.src('build')
    .pipe(webserver({
        port: 8080,
        open: true,
        livereload: true
    }))
}

function monitorarArquivos(cb){
     watch('src/**/*.html', ()=>gulp.series(appHtml)())
     watch('src/**/*.html', ()=>gulp.series(appCss)())
     watch('src/**/*.html', ()=>gulp.series(appJs)())
     watch('src/assets/imgs/**/*.*', ()=>gulp.series(appImg)())
     return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}