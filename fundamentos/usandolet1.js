// let tem escopo global, escopo de função e escopo de bloco.
let número = 1

{
  let número = 2
  console.log("dentro =", número) // prioriza primeiro o escopo de bloco.
}
console.log("fora =", número)

