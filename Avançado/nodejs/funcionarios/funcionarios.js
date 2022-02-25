// desafio encontrar mulher chinesa com menor salarioa. 
const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios é um client http, faz requisições http pra algo que esta remoto 

const chinese = f => f.pais === 'China'
const mulhers = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
  return func.salario < funcAtual.salario ? func : funcAtual
}


axios.get(url).then(response => {
  const funcionarios = response.data


  const func = funcionarios.filter(chinese).filter(mulhers).reduce(menorSalario)
  console.log(func)
})




