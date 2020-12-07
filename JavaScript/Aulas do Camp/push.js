const frutas = ['melancia', 'banana'];
const arrLenght = frutas.push('acerola');

console.log(arrLenght);
console.log(frutas);

const removeItem = frutas.pop();

console.log(removeItem);
console.log(arrLenght);
console.log(frutas);

const comecaFruta = frutas.unshift('Goiaba');

console.log(comecaFruta);
console.log(frutas);

const bolos = ['chocolate', 'leite Ninho', 'Morango'];

const alimentos = frutas.concat(bolos);

console.log(alimentos);

//console.log(frutas.slice(0, 2));

//console.log(frutas.splice(2));

frutas.splice(0, 1, 'Jaca');

console.log(frutas);

console.