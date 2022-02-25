const pessoa = {
  saudação: "bom dia",
  falar() {
    console.log(this.saudação) // usa-se o this pra acessar saudação do objeto pessoa.
  }
}
pessoa.falar() // chamando a função atraves do objeto.

const falar = pessoa.falar
falar() // confronto entre paradgmas: funcional e 00.

const falardepessoa = pessoa.falar.bind(pessoa) // amarrando a função pessoa.falar com bind dentro da constante falardepessoa. 
falardepessoa()

