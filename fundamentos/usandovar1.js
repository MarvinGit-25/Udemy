// var só tem escopo global e de função!!
{

  {
    {
      { var serar = "serar????" }
      console.log(serar)
    }
  }
}



function teste() { // em uma função var só tem escopo dentro do escopo da função.
  var local = 123
  console.log(local)
}
teste()


