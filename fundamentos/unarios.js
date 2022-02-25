let num1 = 1
let num2 = 2

num1++ // pós fixada.
console.log(num1)
--num1 // forma prefixada ordem de precedencia maior.
console.log(num1)
console.log(++num1 === num2--) // True!! num1 é igaual a nun2!! Por que só depois é feito o decremento de nun2.
console.log(num1 === num2) // false!! A linha anterior já foi execultada.
