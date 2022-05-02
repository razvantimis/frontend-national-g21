

const app = document.getElementById("app")

// Versiune cu DOM
const span = document.createElement("span")
span.innerHTML = "Hello world!"

app.appendChild(span)

// versiune cu react

//Componenta hello world
const spanHelloWord = React.createElement("span", null, "--- React Hello word")

ReactDOM.createRoot(app).render(spanHelloWord)

