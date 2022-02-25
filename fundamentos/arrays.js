const valores = [7.7, 6.5, 6.7, 5.6]; // array
console.log(valores[0], valores[3]);
console.log("----------------------------------------")
console.log(valores[4]);
console.log("----------------------------------------")

valores[4] = 10; // add mais um elemento
valores[5] = 12; // add mais um valor.
console.log(valores);
console.log("----------------------------------------")
console.log(valores.length); // length ver a quantidades de elementos de um array.
console.log("----------------------------------------")
valores.push({ id: 3 }, false, null, "teste"); // pode ser misturado varias coisas dentro de um array.
console.log(valores);
console.log("----------------------------------------")
console.log(valores.pop()); // retira o ultimo valor do array.
console.log("----------------------------------------")
delete valores[0]; // deleta elementos do array.
console.log(valores);
console.log("----------------------------------------")
console.log(typeof valores); // typeof indica o tipo de um operador.
console.log("----------------------------------------")


