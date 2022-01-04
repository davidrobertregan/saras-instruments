const h1 = document.getElementsByTagName("h1")[0]
console.log(h1)

h1.addEventListener("click", () => {
    console.log("It worked!")
})

let instrumentContainer = document.getElementById("instrument-container")
console.log(instrumentContainer)

const getInstruments = () => {
    fetch("http://localhost:3000/instruments")
    .then(resp => resp.json())
    .then(instruments => {
        instruments.forEach(i => {
            let text = document.createElement("p")
            text.textContent = i.name
            instrumentContainer.appendChild(text)
        });
    })
}

getInstruments()

