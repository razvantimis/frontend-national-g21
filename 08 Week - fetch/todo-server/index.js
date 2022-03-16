import Koa from 'koa';
import Router from 'koa-router';
import { Low, JSONFile } from 'lowdb'
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';


const app = new Koa();
const router = new Router();
const adapter = new JSONFile('db.json')

const db = new Low(adapter)

app.use(cors());
app.use(bodyParser());

await db.read();

router.get('/todos', async ctx => {
  await db.read();
  ctx.body = db.data.todos
});

router.get('/todos/:id', async ctx => {
  await db.read();
  ctx.body = db.data.todos.find(todo => todo.id === ctx.params.id);
});


router.post('/todos', async ctx => {
  await db.read();
  const newTodo = {
    ...ctx.request.body,
    id: Date.now().toString()
  }

  db.data.todos.push(newTodo)
  await db.write();

  ctx.body = newTodo;
});

router.delete('/todos/:id', async ctx => {
  await db.read();

  const indexRemove = db.data.todos.findIndex(todo => todo.id === ctx.params.id);
  const removedTodo = db.data.todos[indexRemove]
  db.data.todos.splice(indexRemove, 1)
  await db.write();

  ctx.body = removedTodo;
})

router.put('/todos/:id', async ctx => {
  await db.read();

  const indexTodo = db.data.todos.findIndex(todo => todo.id === ctx.params.id);
  const oldTodo = db.data.todos[indexTodo];
  const updateTodo = {
    ...oldTodo,
    ...ctx.request.body,
  }

  db.data.todos[indexTodo] = updateTodo

  await db.write();
  ctx.body = updateTodo;
})



app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server start on http://localhost:3000')
});