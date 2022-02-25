// tabela verdade 
/*   &&
  v e v == v
  v e f == f
  f e ? == f 

     ||
  v ou ? == v
  f ou v == v
  f ou f == f 
  
     xor == ou exclusivo
   // obrigatoriamente os dois tem que ser diferetes pro resultado ser verdadeiro  
  v xor v == f
  v xor f == v
  f xor v == v
  f xor f == f
 */

function compras(trabalho1, trabalho2) {
   const comprarsorvete = trabalho1 || trabalho2
   const comprartv50 = trabalho1 && trabalho2
   //const comprartv32 = !!(trabalho1 ^ trabalho2) // bitwise xor. 
   const comprartv32 = trabalho1 = !trabalho2 // bitwise xor.
   const mantersaudavel = !comprarsorvete // operador unário

   return { comprarsorvete, comprartv50, comprartv32, mantersaudavel }
}

console.log(compras(true, true))
console.log("-----------------")
console.log(compras(true, false))
console.log("-----------------")
console.log(compras(false, true))
console.log("-----------------")
console.log(compras(false, false))
