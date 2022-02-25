/*​ Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

Veja como é feito o seu cálculo:

Juros simples = Capital x taxa de juros x tempo de aplicação
Juros simples = 2000 x 0,10 x 2
Juros simples = 400.*/

function JurosSimples(capitaIni, taxaDeJuros, tempoAplicação) {
  const jurossimples = capitaIni * (taxaDeJuros / 100) * tempoAplicação
  return jurossimples
}
console.log(JurosSimples(1000, 10, 1))

function JurosComposto(capitaIni, taxaDeJuros, tempoAplicação) {
  const juroscomposto = capitaIni * (1 + taxaDeJuros / 100) ** tempoAplicação
  return juroscomposto.toFixed(2)
}
console.log(JurosComposto(100, 10, 2))
