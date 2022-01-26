
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

    // two divs for instrument details
    let descDiv = document.createElement("div")
    descDiv.className = "instrument-details__description"
    instrumentDetails.appendChild(descDiv)

    let imgDiv = document.createElement("div")
    instrumentDetails.appendChild(imgDiv)
    imgDiv.className = "instrument-details__img"

        let name = document.createElement("h2")
            name.textContent = i.name
        
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
                descDiv.remove()
                imgDiv.remove()
                instrumentContainer.className = "instrument-container"
            })


        let img = document.createElement("img")
            img.src = i.img_file

    imgDiv.appendChild(img)
    descDiv.appendChild(name)
    descDiv.appendChild(instrument)
    descDiv.appendChild(manufacturer)
    descDiv.appendChild(notes)

    descDiv.appendChild(button)
    
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
