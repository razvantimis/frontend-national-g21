
// Object method
// O functie care este pusa pe un obiect se numeste metoda
var car1 ={ 
  name: 'Dacia',
  show: function(firstParam){ // este o functie anonima daca nu are name
    console.log('se executa method', firstParam)

    return 10 + 23 + firstParam;
  },
  start: function(){
    
  }
}

car1.show(10); // apelam metoda show de pe obiectul "car1"