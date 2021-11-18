
let num = [5, 8, 2, 9, 3]
num[5]=11

//metodo interno para adicionar um valor no vetor
num.push(7)

num.length



console.log(`Nosso vetor é o ${num} e possui ${num.length} posições`)
console.log(` o primeiro valor é : ${num[0]}`)
console.log(` o segundo valor é : ${num[1]}`)
console.log(` o terceiro valor é : ${num[2]}`)
console.log(` o quarto valor é : ${num[3]}`)
console.log(` o quinto valor é : ${num[4]}`)
console.log(` o sexto valor é : ${num[5]}`)
console.log(` o setimo valor é : ${num[6]}`)

console.log()

let pos = num.indexOf(3)
console.log(`O valor 3 esta na posição ${pos}`)


