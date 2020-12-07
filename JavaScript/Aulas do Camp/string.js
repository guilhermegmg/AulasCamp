const textSize = 'Texto'.length;
console.log('Quantidade de letras: ', textSize);

const splittedText = 'Texto'.split('e');
console.log('\nArray com as posições separadas pelo delimitador: ' , splittedText);

const replacedText  =  'Texto'.replace('Text' , 'txeT');
console.log('\nSubstituição de valor: ', replacedText);

const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutLastChar = 'Texto'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da String da segunda letra até a última: ', secondToEnd);

const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);
