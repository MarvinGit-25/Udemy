// let 

//console.log("cont =", cont) // não imprimi, let esta dentro de um escopo de bloco.

function intervalo(){
setInterval(() => {
  for (let cont = 1; cont <= 25; cont++) {
  console.log(cont)
}
}, 5000);

}
intervalo()
