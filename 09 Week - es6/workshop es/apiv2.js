// Folosim metode static

// Nu avem nevoie sa facem un obiect cu TodoServer
class TodoServer {
  static baseUrl = 'http://localhost:3000'

  static async getTodos() {
    const response = await fetch(`${TodoServer.baseUrl}/todos`)
    const todos = await response.json()
    return todos
  }

  static async createToDo(newToDo) {
    const response = await fetch(`${TodoServer.baseUrl}/todos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' // ii spunem la server ca trimitem json
      },
      body: JSON.stringify(newToDo)
    })
  
    return response.json();
  }
}

TodoServer.getTodos()
TodoServer.createToDo()

export { TodoServer }