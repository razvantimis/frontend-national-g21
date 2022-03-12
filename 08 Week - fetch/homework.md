# Homework todo server

1. Sa afisam o lista de TODO items
2. Sa permitem adaugarea unui TODO
3. Sa stergem un TODO
  - fiecare todo item are un button care permite stergerea
  - folosim DELETE http://localhost:3000/todos/:id
4. Se face update de un todo - check/uncheck
  - utilizatorul poate sa faca check si uncheck din UI la un todo item
  - folosim PUT http://localhost:3000/todos/:id + body

5. Dupa fiecare modificare se face refresh la date pe UI

## Aplicatia va folosi serverul de todo din 08 week