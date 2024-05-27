const {series} = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify') // minifica o codigo em um unico arquivo
const babel = require('gulp-babel') // converte js pra versão mais compativel nos broswer

function trasfor(cb){
    gulp.src('src/**/*.js').pipe(babel({
        comments: false,
        presets: ['env']
    }))
    .pipe(uglify()).on('error', err =>{
        console.log(err)
    })
    .pipe(concat('codigo.min.js')) // concatena os resultados e cria um arquivo
    .pipe(gulp.dest('build')) // cria a pasta de destino para a onde o codigo vai
    return cb()
}

exports.default = series(trasfor)