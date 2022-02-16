// 4. Arrays and Objects - structuri compuse

// Array

var array1 = [] // definim un array gol

//  pozitia   0  1              2      3       4   5  
var array2 = [1, 'test string', true, false, null, undefined];

// numele_de_var[index]
// index este pozitia elementului in array, si incepe de la 0
console.log(array2[0]) // 1
console.log(array2[1]) // test string

// putem accesa lungimea array-lui
console.log(array2.length) // 6 - cate elemente avem un array

var array3 = [1, 2, 3, 4, 5, 6, 7, 8]

var lastElement = array3[array3.length - 1]

// suprascrie un element din array
array2[2] = 10;

// Object

// cu obiectele modelam lucruri din viata reala

var object1 = {}; // empty object

/*
var obj1 = {
 key1: value1,
 key2: value2

}
*/

var phone = {
  number: 12,
  model: 'Iphone',
  memory: '4GB',
}

// ca sa accesam folosim [nume var].[nume key]
console.log(phone.number)
console.log(phone.model)

console.log(phone['number']) // acelasi lucru cu phone.number

// nu stiam sigur numele key-ului
var key = 'model';

console.log(phone[key]);


// suprascriem
phone.number = 20;


// cum stergem un key din obiect
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
var phone = {
  number: 12,
  model: 'Iphone',
  memory: '4GB',
}
delete phone.memory;
console.log(phone)

// cum putem adauga un key nou pe object

// aceste key in obiect, le putem spune proprietatile obiectului
var phone = {
  number: 12,
  model: 'Iphone',
  memory: '4GB',
}
phone.color = 'red';

var keyNou = 10;
phone[keyNou] = 1;

