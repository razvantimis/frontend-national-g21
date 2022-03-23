const array1 = [1, 2, 3, 4, 5, 6, 7];


// .forEach
for (let index = 0; index < array.length; index++) {
  const element = array1[index];
  console.log(element);
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
array1.forEach((element, index) => {
  console.log(element)
})

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
// daca avem un obiect
const object1 = { a: 2, b: "45", cat: '54' }
for (const prop in object1) {
  console.log(prop)
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (const element of array1) {
  console.log(element);
}

// map
// tranformam elementele din array
const array2 = [1, 4, 9, 16];

// pass a function to map
const map2 = array2.map(function (element) {
  return element * 2 + 10
});

console.log(map2);
// expected output: Array [12, 18, 28, 42]


// transform in array de boolean
const array3 = [1, 2, 3, 4, 5, 6, 40];
// const arrayResult = [false, true, false, true, false, true, true]
const arrayResult = array3.map(element => {
  if (element % 2 === 0) return true;
  return false
})

// reducer
const array4 = [1, 2, 3, 4, 5, 6, 40];

const sumElementelor = array4.reduce((previousValue, currentValue) => {
  console.log(previousValue);
  return previousValue + currentValue;
}, 0)

// let sum = 0;
// for (let index = 0; index < array4.length; index++) {
//   const element = array4[index];
//   sum = sum + element;
// }
// console.log(sum)



// filter
const array5 = [1, 2, 3, 4, 5, 6, 40];

const arrayFiltrat = array5.filter(element => {
  // trebuie sa return true sau false
  // Daca return true, elementul va fi inclus in noul array
  return element % 2 == 0
})

