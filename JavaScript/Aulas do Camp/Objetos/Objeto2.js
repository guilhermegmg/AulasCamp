const user = {
    name: 'Guilherme',
    lastname: 'da Matta Gonçalves'
}

console.log('Propriedades do objeto user: ', Object.keys(user));

console.log('\nValores das propriedades do objeto user: ', Object.values(user));

console.log('\nLista de propriedades e valores:', Object.entries(user));

Object.assign(user, {fullname: 'Guilherme da Matta Gonçalves'});

console.log('\nAdiciona a propriedade fullname no objeto user ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 28}));

const newobj = {foo: 'bar'};
Object.freeze(newobj);

newobj.foo = 'changes';
delete newobj.foo;
newobj.bar = 'foo';

console.log('\nVariável newobj após as alterações: ', newobj);


const person = {name: 'Guilherme'};
Object.seal(person);

person.name = 'Guilherme da Matta';
delete person.name;
person.age = 28;

console.log('\nVariável person após as alterações:', person);