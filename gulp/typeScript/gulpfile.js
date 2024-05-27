const {series} = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsproject = ts.createProject('tsconfig.json') // recebe o aquivo de config do copilador do typescript

function transformts(cb){
    console.log('transformação concluida')
    return tsproject.src()
    .pipe(tsproject())
    .pipe(gulp.dest('build'))
    
}

exports.default = series(transformts)
