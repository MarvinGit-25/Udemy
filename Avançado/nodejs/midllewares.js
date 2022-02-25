// midlleware pattern (chain of responsability)

const passo1 = (ctxt, next) => {
  ctxt.valor1 = "mid1"
  next() // chama a proxima função
}

const passo2 = (ctxt, next) => {
  ctxt.valor2 = "mid2"
  next() // chama a proxima função
}

const passo3 = ctxt => ctxt.valor3 = "mid3"

const exec = (ctxt, ...midllewares) => {
  const execpasso = indice => {
    midllewares && indice < midllewares.length &&
      midllewares[indice](ctxt, () => execpasso(indice + 1))
  }
  execpasso(0)
}
const ctxt = {}
exec(ctxt, passo1, passo2, passo3)
console.log(ctxt)