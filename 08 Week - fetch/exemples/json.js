
// Ce este JSON = JavaScript Object Notation? 
// In format JSON se trimit datele dintre client si server

// Un obiect user in js
const user = {
  name: "Cosmin",
  age: 18,
  cnp: "21312423423423",
}

// Cum arata user ca si JSON?

const userJSON = `
  {
      "name": "Cosmin",
      "age": 18,
      "cnp": "21312423423423"
  }
`
// JSON.stringify transforma un obiect din js in JSON ( adica il face text/string)
const userJSON2 = JSON.stringify(user)
console.log(userJSON);

// Cand vom trimit informati la server prin restfull api, vom folosi JSON.stringify


// JSON.parse - transforma un JSON in obiect js
const user2 = JSON.parse(userJSON)

// serialization and deserialization
