// Uma função tem conciẽncia do local em que ela foi definida.
const valor = "global"

function minhafunção() {
  console.log(valor)
}

function exec() {
  const valor = "local"
  minhafunção()


}

exec()