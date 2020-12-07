const arr = [1, 2, 3, 4, 5, [6 ,7]];

arr.forEach((value, index) =>{console.log(index, value);});

//arr.flat();
console.log(arr.flat());



const newarr = [1, 2, 3, 4];

console.log(newarr.flatMap(value => [value * 2]));

console.log(newarr.flatMap(value => [[value * 2]]));



const novoesquema = [1, 2, 3, 4];

const novoesquemaIterator = novoesquema.keys();

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

const novoesquema = [1, 2, 3, 4];

const novoesquemaIterator = novoesquema.values();

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());


const novoesquema = ['melancia', 'mamao', 'maça', 'pera'];

const novoesquemaIterator = novoesquema.entries();

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());

console.log(novoesquemaIterator.next());





const novoesquema = ['pera', 'uva', 'melancia', 'jaca'];

const novoesquemaMaiorQueDois = novoesquema.find(value => value === 'melancia');

console.log(novoesquemaMaiorQueDois);




const indexar = [1, 2, 3, 4];

const firstIndexGreaterThanTwo = indexar.findIndex(value => value > 2);

console.log(indexar);


const arr = [1, 2, 3, 4];

const allValuesGreaterThanTwo = arr.filter(value => value >= 2);

console.log(allValuesGreaterThanTwo);




const arr = [1, 2, 3, 4];
const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);


const arr = [1, 2, 3, 4, 3];
const firstIndexOfItem = arr.lastIndexOf(3);

console.log(firstIndexOfItem);


const arr = [1, 2, 3, 4, 3];


const students =[
    {name: 'Jorge', grade: 7},
    {name: 'Gabriel', grade: 8},
    {name: 'Isa', grade: 4}
];
const nome = []{name};

//console.log(students.findIndex(students => students.grade >= 7));

//students.sort(current, next) , (current.grade - next.grade);

console.log(nome.join('-'));