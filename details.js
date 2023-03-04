const searchString = location.search
const parametros = new URLSearchParams(searchString)
const id = parametros.get('id')
const evento = data.events.find(event => event._id == id)

let mainDetails = document.querySelector(".maindetails")
mainDetails.innerHTML = `<div class="card mb-3 col-6">
<div class="row g-0">
    <div class="col-md-4">
        <img src="${evento.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${evento.name}</h5>
            <p class="card-text">${evento.description}</p>
            <span class="card-text">Date: ${evento.date}</span>
            <span class="card-text">Category: ${evento.category}</span>
            <span class="card-text">Place: ${evento.place}</span>
            <p class="card-text">Capacity: ${evento.capacity}</p>
            <p class="card-text">Price $${evento.price}</p>
        </div>
    </div>
</div>
</div>`


