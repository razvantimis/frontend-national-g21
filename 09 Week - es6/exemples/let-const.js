
// Exemple scope with var
// ce este hostingul?
// JS duce sus "var a" - declaratia
var a = 1; 

function test1(){
  var a = 10

  if(true){
    var a = 34;
  }

  console.log(a); // 34
}

// Exemple scope with let

let a = 1;

function test1(){
  let a = 10

  if(true){ // a are block scope
    console.log(a) // 10
    let a = 34;
    console.log(a) // 34
  }

  console.log(a); // 10
}