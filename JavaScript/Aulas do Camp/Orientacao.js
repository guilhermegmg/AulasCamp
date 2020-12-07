'use strict';
const myText = 'Hello ´prototype';

myText.split('');


'use strict';
const myText = String('Hello ´prototype');

console.log(myText.__proto__.split);


'use strict';
const myText = String('Hello ´prototype');

console.log(myText.__proto__.split === String.prototype.split);

console.log(myText.constructor === String);

function Animal() {
    this.qtdepatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdepatas);

console.log(cachorro instanceof Animal);

console.log(cachorro instanceof Function);