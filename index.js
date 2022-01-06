const h1 = document.getElementsByTagName("h1")[0]
console.log(h1)

h1.addEventListener("click", () => {
    console.log("It worked!")
})

let mainBody = document.querySelector("#main-body")
let instrumentContainer = document.getElementById("instrument-container")
console.log(instrumentContainer)

let instrumentsArr = []

const getInstruments = () => {
    fetch("http://localhost:3000/instruments")
    .then(resp => resp.json())
    .then(instruments => {
        setInstruments(instruments)
        displayInstruments()
    })
}

const setInstruments = (instruments) => {
    instrumentsArr = instruments
    console.log(instruments)
}

const displayInstruments = () => {
    instrumentsArr.forEach(i => {
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
            instrumentContainer.remove()
            let details = document.createElement("div")
            details.className = "instrument-details"
            let col1 = document.createElement("div")
            let col2 = document.createElement("div")
            
            mainBody.appendChild(details)
            details.appendChild(col1)
            details.appendChild(col2)
            
            col1.appendChild(img)
            col2.appendChild(name)
            col2.appendChild(instrument)
            col2.appendChild(notes)
            col2.appendChild(manufacturer)
            
            let button = document.createElement("button")
            button.textContent = "Back"
            col2.appendChild(button)

            button.addEventListener("click", () => {
                getInstruments()
            })
            
        })
    });
}

console.log(instrumentsArr)

getInstruments()
