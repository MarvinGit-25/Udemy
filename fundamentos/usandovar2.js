// var tem escopo global e de função!!
var número = 1

{
  var número = 2
  console.log("dentro =", número)
}
console.log("fora =", número)
// sobrescreve

