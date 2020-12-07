const symbol1 = Symbol();
const symbol2 = Symbol();

console.log('Symbol1 é igual a symbol2: ', symbol1 === symbol2);

const namesymbol1 = Symbol('name');
const namesymbol2 = Symbol('name');

const user ={
    [namesymbol1]: 'Guilherme',
    [namesymbol2]: 'Outro gato',
    lastname: 'da Matta Gonçalves'
}

console.log(user);

for (const key in user) {
    if (user.hasOwnProperty(key)){
        console.log('\nValor da Chave', key, user[key]);
    }
}

console.log('\nPropriedades do Objeto user: ', Object.keys(user));
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

console.log('\n Symbols registrando no objeto user: ', Object.getOwnPropertySymbols(user));

console.log('\nTodas propriedades do objeto user: ', Reflect.ownKeys(user));

const directions = {
UP    : Symbol('UP'),
DOWN  : Symbol('DOWN'),
LEFT  : Symbol('LEFT'),
RIGHT : Symbol('RIGHT')
};