let htmlCards = ""
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        htmlCards += createCard(event);
    };
};
document.querySelector(".divcartas").innerHTML += htmlCards



categorias.forEach(categoria => {
    document.querySelector(".fieldset").innerHTML += createLabel(categoria)
})


let inputSearch = document.getElementById("formsearch")
document.querySelector(".form-search").onsubmit = (e) => {
    e.preventDefault()
    let resultadoBusqueda = ""
    let textoIngresado = inputSearch.value.toLowerCase().trim()
    for(let event of data.events){
        if(event.name.toLowerCase().includes(textoIngresado)||event.description.toLowerCase().includes(textoIngresado)||event.place.toLowerCase().includes(textoIngresado)){
            resultadoBusqueda += createCard(event)
        }
    }
    document.querySelector(".divcartas").innerHTML = resultadoBusqueda
}


let resultadoCheckbox = ""
categorias.forEach(categoria => document.getElementById(categoria).addEventListener('change', () => {
    let checked = categorias.filter(categoria => document.getElementById(categoria).checked)
    let filteredEvents = []
    if(checked.length == 0) {
        filteredEvents = data.events
    }else{
        filteredEvents = data.events.filter(event => checked.includes(event.category))
    }
    resultadoCheckbox = filteredEvents.map(filteredEvent => createCard(filteredEvent)).join("")
    document.querySelector(".divcartas").innerHTML = resultadoCheckbox
    }

    )     
)