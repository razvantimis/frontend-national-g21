// Destructuring

// 1. Destructuring Object
const person = {
  firstName: 'Cosmin',
  age: 34,
  cnp: '34321231312'
}
// inaite de es6
const firstN = person.firstName
const personAge = person.age;
const personCnp = person.cnp;
const propTest1 = person.propTest;

// va crea o variabila firstName cu valoare din person.firstName
const { firstName: fistName31, age, propTest } = person;
// propTest nu exista in obiectul person => va fi undefined

// 4. Destructuring Rename 
// rename se face prin : urmat de denumirea noua
const { firstName: firstN2 } = person;
console.log(firstN2)

// 5. Destructuring default value
// in person nu exista propTest2 dar voi vrem sa-i dam o valoare default
const { propTest2 = 10 } = person;
// daca nu exista propTest2 in person atunci va avea valoare 10 
// altfel va fi valoare din person.propTest2


// 2. Destructuring Arrays

const array1 = [1, 2, 3, 4, 5];

// inaite de es6
const firstElement = array1[0];

// dupa es6
const [firstElement1] = array1;

// spread operatar
const array2 = [1, 2, 3, 4, 5];

const [firstElement2, ...arrayWithoutFirstElement] = array2;
// arrayWithoutFirstElement = [2, 3, 4, 5]
// firstElement2 = 1


// nested array
const array3 = [[1, 2], [3, 4]] // matrice 2x2
const [[firstElementFromRow1], [firstElementFromRow2]] = array3;

// 3. Destructuring Nested Object

const person2 = {
  name: {
    firstName: 'Alex',
    lastName: 'M'
  },
  age: 32,
}
// inaite de es6
const firstName4 = person2.name.firstName;

// dupa es6
const { name: { firstName, lastName }, age: ageRename3 } = person2;
// va face 3 variabile: firstName = Alex, lastName = M, ageRename3 = 32