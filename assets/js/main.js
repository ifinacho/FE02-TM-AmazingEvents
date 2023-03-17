function displayEvents(events){
    let htmlCards = ""
    let arrayEvents = []
    events.forEach(event => {
        arrayEvents.push(event)
    })
    htmlCards = arrayEvents.map(arrayEvent => createCard(arrayEvent)).join("")
    document.querySelector(".divcartas").innerHTML = htmlCards
}
displayEvents(data.events)


categorias.forEach(categoria => {
    document.querySelector(".fieldset").innerHTML += createLabel(categoria)
})


categorias.forEach(categoria => document.getElementById(categoria).addEventListener('change', () => {
    let checked = categorias.filter(categoria => document.getElementById(categoria).checked)
    let filteredEvents = []
    if(checked.length == 0) {
        filteredEvents = data.events
    }else{
        filteredEvents = data.events.filter(event => checked.includes(event.category))
    }
    displayEvents(filteredEvents)
    }

    )     
)


let inputSearch = document.getElementById("formsearch")
inputSearch.addEventListener("keyup", () => {
    let filteredEvents = data.events.filter(event => event.name.toLowerCase().includes(inputSearch.value.toLowerCase().trim()))
    displayEvents(filteredEvents)
})

