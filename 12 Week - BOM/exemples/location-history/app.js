// Location / History
// https://developer.mozilla.org/en-US/docs/Web/API/Location
// https://developer.mozilla.org/en-US/docs/Web/API/History

// Navigarea intre pagini in browser se face prin browser history
// Noi putem controla browser history folosind history

history.back()
history.forward();

// Location
// Pe el avem detalii despre url
console.log(location);

// Exemplu: 
// http://127.0.0.1:5500/12%20Week%20-%20BOM/exemples/location-history/page1.html?id=10#top
// ?id=10 este query parameters
// {
//   search: '?id=10',
//   hash: "#top",
//   host: "127.0.0.1:5500"
//   ...
// }