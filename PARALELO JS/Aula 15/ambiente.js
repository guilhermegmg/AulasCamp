let num =[5,8,9,2,3]

console.log(num)
console.log(`O meu vetor tem ${num.length} posições`)
console.log(num[0])
num.sort()
console.log(`Meu vetor em ordem crescente ficará: ${num}`)
num.push(7)
num.sort()
console.log(`Agora meu vetor está: ${num} após acrescentar o valor 7 e ordenar novamente para crescente`)
let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)