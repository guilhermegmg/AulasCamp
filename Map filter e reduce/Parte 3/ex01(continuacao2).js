const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10
    },{
        name: 'miau',
        type: 'cat',
        age: 2
    },
    {
        name: 'zoi',
        type: 'insect',
        age: 1
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1
    }
]


const eMenorQueCinco = (numero) =>{
    return numero < 5
}

const newPets = pets.filter(({age}) => eMenorQueCinco(age))


console.log(newPets)