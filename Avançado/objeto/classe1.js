class Lançamento {
  constructor(nome = "generico", valor = 0) {
    this.nome = nome
    this.valor = valor

  }
}

class CicloFinanceiro {
  constructor(mes, ano) {
    this.mes = mes
    this.ano = ano
    this.lançamentos = []
  }
  addLançamentos(...lançamentos) {
    lançamentos.forEach(l => this.lançamentos.push(l))
  }
  sumario() {
    let valorConsolidado = 0
    this.lançamentos.forEach(l => {
      valorConsolidado += l.valor
    })
    return valorConsolidado
  }
}
const salario = new Lançamento('salario', 45000)
const contaLuz = new Lançamento('luz', -200)

const contas = new CicloFinanceiro(6, 2018)
contas.addLançamentos(salario, contaLuz)
console.log(contas.sumario())