class avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class pai extends avo {  // extends define o prototypo em classe
  constructor(sobrenome, profissao = "professor") {
    super(sobrenome)
    this.profissao = profissao
  }

}
class filho extends pai { // extends define o prototypo em classe
  constructor() {
    super('Silva')
  }
}

const Filho = new filho
console.log(Filho)

