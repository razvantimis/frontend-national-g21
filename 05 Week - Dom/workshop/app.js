// # TODO list

// 1. Sa afisam o lista de TODO items
// 2. Sa permitem adaugarea unui TODO
// 3. Sa stergem un TODO
// 4. Sa bifam un toda - este complet


//  1. Sa afisam o lista de TODO items
var todoList = ["cumparaturi", "plata facturi", "scoate cainele afara"];
console.log('here')
for(var i = 0; i < todoList.length; i++){
    var item = todoList[i];
    var itemHTML = document.createElement("li");
    itemHTML.innerHTML = item;
    
    document.body.appendChild(itemHTML)
}
















