let htmlCards = ""
for (let event of data.events) {
    htmlCards += createCard(event);
};
document.querySelector(".divcartas").innerHTML += htmlCards



categorias.forEach(categoria => {
    document.querySelector(".fieldset").innerHTML += createLabel(categoria)
})




