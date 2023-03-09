let htmlCards = ""
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
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


let labels = document.querySelectorAll("label")
let inputCheckbox = document.querySelectorAll("input[type=checkbox]")
let resultadoCheckbox = ""
inputCheckbox.forEach(checkbox => checkbox.addEventListener('click', () => {
    if(checkbox.checked) {
        for(let event of data.events){
            if(event.category.toLowerCase().replace(" ", "-")==checkbox.value){
                resultadoCheckbox = createCard(event)
            }
        }
    }
    document.querySelector(".divcartas").innerHTML = resultadoCheckbox
    })
)