// Hoisting
// se aplica pe ce declaram cu var/function
// Ne permite ca sa accesam declaratile cu var/function inaite de definirea lor

// ridica toate declaratile sus de top dar fara valoare
// putem folosi studentName inaite de declaratie ei
console.log('1. studentName=', studentName) // 'undefined'
// studentName = '10'
// putem face orice cu variabila studentName

// se ridica sus doar 'var studentName'
var studentName = 'razvan'

console.log('2. studentName=', studentName) // 'razvan'

// putem apela show inaite sa avem declaratie ei , din cauza hoistingului
show();


function show(){

}
