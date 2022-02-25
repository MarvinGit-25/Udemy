const escola = "cod3r"
console.log(escola.charAt(4)) // charAt( ) retorna o caractere na ordem especificada
console.log(escola.charCodeAt(3)) // charCodeAt( ) Retorna o valor Unicode do caractere no local especificado.
console.log(escola.indexOf("3")) // Retorna a posição da primeira ocorrência de uma substring.
console.log(escola.substring(1)) // Retorna a substring no local especificado dentro de um objeto String.
console.log(escola.substring(0, 3)) // Retorna a substring no local especificado dentro de um objeto String.
console.log("escola ".concat(escola).concat("!")) // Retorna uma string que contém a conciliação de duas ou mais strings.
console.log('escola ' + escola + "!") // + nesse sentindo concatena.
console.log(escola.replace(3, "e")) // Substitui o texto em uma sequência, usando um objeto que suporta a substituição dentro de uma sequência.
console.log("Ana, Maria, Pedro ".split(",")) // Divida uma sequência em substrings usando o separador especificado e retorne-os como um array.