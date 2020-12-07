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

const newPets = pets.filter((pet) =>{
    return pet.age < 5
})


console.log(newPets)