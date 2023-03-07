const searchString = location.search
const parametros = new URLSearchParams(searchString)
const id = parametros.get('id')
const evento = data.events.find(event => event._id == id)
let arrayKeys = Object.keys(evento)
let resultado = ""
if(arrayKeys.includes("estimate")){
    resultado = "Estimate: " + evento.estimate
}else{
    resultado = "Assistance: " + evento.assistance
}

let mainDetails = document.querySelector(".maindetails")
mainDetails.innerHTML =
`<div class="card mb-3 col-6">
    <div class="row g-0">
        <div class="col-md-5">
            <img src="${evento.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-7">
            <div class="card-body">
                <div>
                    <h5 class="card-title">${evento.name}</h5>
                    <p class="card-text">${evento.description}</p>
                    <p class="card-text1">Date: ${evento.date}</p>
                    <p class="card-text1">Category: ${evento.category}</p>
                    <p class="card-text1">Place: ${evento.place}</p>
                    <p class="card-text1">Capacity: ${evento.capacity}</p>
                    <p class="card-text1">${resultado}</p>
                </div>                
                <div class="divcardbody">
                    <span class="card-text">Price $${evento.price}</span>
                    <a href="./index.html" class="btn btn-primary">Return to Home</a>    
                </div>
            </div>
        </div>
    </div>
</div>`


