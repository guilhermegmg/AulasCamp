let user = {
    name: 'Guilherme'
};
console.log(user);

user.name = 'Outro nome 1';
console.log(user);

user['name']= 'Outro nome 2';
console.log(user);

const prop = 'name';
console.log(user);

user[prop] = 'Outro nome 3';
console.log(user);

user.lastName = 'da Matta Gonçalves';
console.log(user);

delete user.name;
console.log(user);