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
            let div = document.createElement("div")
            div.className = "instrument"
            instrumentContainer.appendChild(div)

            let name = document.createElement("h2")
            let img = document.createElement("img")
            let instrument = document.createElement("p") 
            let manufacturer = document.createElement("p")
            let notes = document.createElement("p")

            notes.textContent = `Why Sara loves it: "${i.notes}"`
            manufacturer.textContent = `Made by: ${i.manufacturer}`
            instrument.textContent = i.instrument
            img.src = i.img_file
            name.textContent = i.name

            div.appendChild(name)
            div.appendChild(img)
            div.appendChild(instrument)
            div.appendChild(manufacturer)
            div.appendChild(notes)
        });
    })
}

getInstruments()

