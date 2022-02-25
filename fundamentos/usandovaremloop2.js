const funcs = []
for (var cont = 0; cont <= 10; cont++) {
  funcs.push(function () {
    console.log(cont)
  })
}
funcs[2]()
funcs[8]()