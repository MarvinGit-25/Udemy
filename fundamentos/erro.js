function tratarerroelancar(erro) {
  //throw new Error("problema no sistema tente mais tarde")
  //throw 10
  //throw true
  //throw "mensagen"
  throw {  // lança o erro
    nome: erro.name,
    msg: erro.mensagen,
    date: new Date

  }
}

function imprimirnomegritado(obj) {
  try { // é um bloco que pode gerar erro.
    console.log(obj.name.toUpperCase() + "!!!")

  } catch (e) { // catch trata o erro
    tratarerroelancar(e)
  } finally { // finally sempre serar execultado independente do erro ou não!!
    console.log("final")
  }

}

const obj = { nome: 'Roberto' }
imprimirnomegritado(obj)

