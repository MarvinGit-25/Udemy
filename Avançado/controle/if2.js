function teste1(num) {
  if (num > 7) // como esta sem {} só a primeira senteça de codigo vale!
    console.log(num) // <-- essa sentença!
  // as demais ficarão fora do bloco if!
  console.log("Final")
}
teste1(6)
teste1(8)


// Não use ; nas estruturas de controle!!
function teste2(num) {
  if (num > 7)
    ; // uma sentença de codigo vazia ; associada ão if!

  { // esse bloco não esta associado ão if!
    console.log(num)
  }
}
teste2(6)
teste2(8)