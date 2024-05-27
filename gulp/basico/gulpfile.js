const gulp = require('gulp')
const {series, parallel}  = require('gulp')


const antes1 = cb =>{
    console.log("tarefa antes 1")
    return cb()
}

const antes2 = cb =>{
    console.log("tarefa antes 2")
    return cb()
}

const fim = cb =>{
    console.log("fim")
    return cb()
}


function copiar(cb){
    gulp.src('pastaA/**/*txt').pipe(gulp.dest('pastaB'))
    console.log("execultando copiar")
    return cb()
}
/*execultando gulp.series de forma sequencial */
module.exports.default = series(
    parallel(antes1,antes2),copiar,fim,
)