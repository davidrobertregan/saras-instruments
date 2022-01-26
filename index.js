
let instrumentContainer = document.getElementsByClassName("instrument-container")[0]

let instrumentDetails = document.getElementsByClassName("instrument-details")[0]

const getInstruments = () => {
    fetch("http://localhost:3000/instruments")
    .then(resp => resp.json())
    .then(instruments => instruments.forEach(renderInstrument))
}

const showDetails = (i) => {
    instrumentContainer.className = "hidden"
    instrumentDetails.classList.remove("hidden")
    instrumentDetails.className = "instrument-details"

    let div = document.createElement("div")
        div.className = "instrument"
        instrumentDetails.appendChild(div)

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

        let button = document.createElement('button')
            button.textContent = "Back"
            button.addEventListener('click', () => {
                instrumentDetails.className = "hidden"
                div.remove()
                instrumentContainer.className = "instrument-container"
            })
        

        div.appendChild(img)
        div.appendChild(name)
        div.appendChild(button)
    
}

const renderInstrument = (i, container) => {
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
            showDetails(i)
        })
    }

getInstruments()
