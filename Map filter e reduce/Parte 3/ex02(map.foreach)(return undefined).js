const pets = [
    {
        type: 'dog',
        name: 'bolinha',
        age: 15,
        weight: 30
    },{
        type: 'cat',
        name: 'mingal',
        age: 6,
        weight: 2
    },
    {
        type: 'dog',
        name: 'rex',
        age: 4,
        weight: 5
    },
    {
        type: 'cat',
        name: 'marrom',
        age: 2,
        weight: 1
    },
    {
        type: 'fish',
        name: 'gulp',
        age: 1,
        weight: 0.01
    },
    {
        type: 'horse',
        name: 'Pé de Pano',
        age: 1,
        weight: 40
    }
    ]
/*
Foreach
Não retorna um novo array com a mesma quantidade e elementos
 */

 const forEachPetNames = pets.forEach((pet)=>{
     return pet.name
 })

 console.log(forEachPetNames)

 //console.log(pets)