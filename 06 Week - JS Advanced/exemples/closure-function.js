// Closure

// sum(a,b) => a + b - banal

// sum(a)(b) => a + b

function sum(a){
  // Ce se intampla cu scopul local al functie dupa executia ei?
  // Javascript va sterge tot ce exista in scopul local al functie, odata ce se termina executia ei
  function innerSum(b){ // nu se apeleaza cand apelam sum(5)
    // Closure se asigura ca ce din folosim din scopul functie parinte ramane disponibil 
    // chiar daca functia parinte si-a terminat executia ( adica isi sterge scopul local ) 
    return a + b;
  }
  return innerSum; // returnam o alta functie
}

// sum(5) va returna o functie
const sumWith5 = sum(5);
console.log('sumWith5(6) = ', sumWith5(6)) // 5 + 6 = 11

console.log('sum(5)(6) =', sum(5)(6))
// Daca nu se face closure pe innerSum cu a = 5, sar pierde parametrul