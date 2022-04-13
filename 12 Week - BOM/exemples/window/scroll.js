// https://developer.mozilla.org/en-US/docs/Web/API/Element/scroll
// https://developer.mozilla.org/en-US/docs/web/api/element/scrollintoview
const button = document.getElementById("btn-scroll")
button.onclick = () => {
    console.log("st")
    const element = document.getElementById("de-vazut")
    element.scrollIntoView(true)
}