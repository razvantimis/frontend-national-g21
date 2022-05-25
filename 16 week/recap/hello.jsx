

const app = document.getElementById("app")

// Versiune cu DOM
const span = document.createElement("span")
span.innerHTML = "Hello world!"

app.appendChild(span)

// versiune cu react

//Componenta hello world
const spanHelloWord = React.createElement("span", null, "--- React Hello word")

const spanHelloWordJsx = (<span>--- React Hello word</span>)

ReactDOM.createRoot(app).render(spanHelloWord)

