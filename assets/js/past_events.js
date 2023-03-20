let data = JSON.parse(localStorage.getItem("data"));

let pastEvents = []
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        pastEvents.push(event)
    };
};
displayEvents(pastEvents)

let categorias = obtenerCategorias(data)

categorias.forEach(categoria => {
    document.querySelector(".fieldset").innerHTML += createLabel(categoria)
})


categorias.forEach(categoria => document.getElementById(categoria).addEventListener('change', () => {
    let checked = categorias.filter(categoria => document.getElementById(categoria).checked)
    let filteredEvents = []
    if(checked.length == 0) {
        filteredEvents = pastEvents
    }else{
        filteredEvents = pastEvents.filter(event => checked.includes(event.category))
    }
    displayEvents(filteredEvents)
    }

    )     
)


let inputSearch = document.getElementById("formsearch")
inputSearch.addEventListener("keyup", () => {
    let filteredEvents = pastEvents.filter(event => event.name.toLowerCase().includes(inputSearch.value.toLowerCase().trim()) || event.description.toLowerCase().includes(inputSearch.value.toLowerCase().trim()))
    displayEvents(filteredEvents)
    if(filteredEvents.length == 0){
        document.querySelector(".divcartas").innerHTML = `<div><p>No hay resultados</p></div>`
    }
})