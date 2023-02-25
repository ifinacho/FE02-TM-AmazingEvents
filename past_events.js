let htmlCards = ""
let currentDate = new Date(data.currentDate);
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        htmlCards += createCard(event);
    };
};
document.querySelector(".divcartas").innerHTML += htmlCards