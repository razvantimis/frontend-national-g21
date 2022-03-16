# Method /verbe Http

- GET 
- POST - adauga
- PUT - face update
- DELETE
- PATCH - facem update partial ( ca si PUT, dar nu dam toata resursa )
- OPTIONS - verifica servarul

## Restfull api - comunica folosind JSON
Exemplu: https://fakestoreapi.com

base url server = https://fakestoreapi.com

GET /resources - returneaza o lista cu obiect resource
GET /resources/:id - doar un obiect resource din lista
POST /resources
PUT /resources/:id
DELETE /resources/:id


Exemplu: https://jsonplaceholder.typicode.com

base url server = https://jsonplaceholder.typicode.com

GET https://jsonplaceholder.typicode.com/todos - toata lista de todos
GET https://jsonplaceholder.typicode.com/todos/2 - doar un obiect todo din lista
POST https://jsonplaceholder.typicode.com/todos