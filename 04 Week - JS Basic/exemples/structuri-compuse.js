// 4. Arrays and Objects - structuri compuse

// Array

var array1 = [] // definim un array gol

//  pozitia   0  1              2      3       4   5  
var array2 = [1, 'test string', true, false, null, undefined];

// numelevar[index]
// index este pozitia elementului in array, si incepe de la 0
console.log(array2[0]) // 1
console.log(array2[1]) // test string

// putem accesa lungimea array-lui
console.log(array2.length) // 6 - cate elemente avem un array

var array3 = [1, 2, 3, 4, 5, 6, 7, 8]

var lastElement = array3[array3.length - 1]