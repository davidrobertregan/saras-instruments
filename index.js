
let instrumentContainer = document.getElementById("instrument-container")
console.log(instrumentContainer)

const getInstruments = () => {
    fetch("http://localhost:3000/instruments")
    .then(resp => resp.json())
    .then(instruments => instruments.forEach(renderInstrument))
}

const renderInstrument = (i) => {
        let div = document.createElement("div")
        div.className = "instrument"
        instrumentContainer.appendChild(div)

        let name = document.createElement("h2")
            name.textContent = i.name
            name.className = "hide"
        
        let img = document.createElement("img")
            img.src = i.img_file
        
        let instrument = document.createElement("h3") 
            instrument.textContent = i.instrument
        
        let manufacturer = document.createElement("p")
            manufacturer.textContent = `Made by ${i.manufacturer}`
        
        let notes = document.createElement("p")
            notes.textContent = `What Sara says: ${i.notes}`
        

        div.appendChild(img)
        div.appendChild(name)

        div.addEventListener("click", () => {
            console.log('Show more details on click')
        })
    }

getInstruments()
