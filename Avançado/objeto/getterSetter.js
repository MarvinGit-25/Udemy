const sequencia = {
  _valor: 1, // convenção
  get valor() { // retorna valor de uma variavel.
    return this._valor++
  },
  set valor(valor) { // altera  o valor de uma variavel.
    if (valor > this._valor) {
      this._valor = valor
    }
  }
}
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)