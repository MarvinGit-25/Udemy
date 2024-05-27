const div1 = document.querySelector('.primeiraCamada')
div1.classList.add('destaque')
const div2 = document.createElement('div')
div2.setAttribute('segundaCamada', "2")
div1.appendChild(div2)
div2.classList.add('destaque1')
const div3 = document.createElement('div')
div3.setAttribute("terceiraCamada", "3")
div1.insertBefore(div3, div1.childNodes[2])
div3.classList.add('destaque2')
const texto = document.createTextNode("primeiraDiv")
div2.appendChild(texto)
// div2.outerHTML = "texto alterado"
div2.insertAdjacentHTML("beforebegin", "<div>Antes</div>")
div2.insertAdjacentHTML("afterbegin", "<p>meio</p>")
div2.insertAdjacentHTML("beforeend", "<p>Antes</p>")
div2.insertAdjacentHTML("afterend", "<p>Antes</p>")





