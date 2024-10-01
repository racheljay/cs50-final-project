const button = document.querySelector("button")
const readout = document.querySelector("p")

let count = 0

function click() {
    console.log("click")
    count++
    readout.textContent = count
}

button.addEventListener("click", () => click())
