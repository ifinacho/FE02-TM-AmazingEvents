let data = JSON.parse(localStorage.getItem("data"));

let categorias = obtenerCategorias(data)

let pastEvents = []
let upcomingEvents = []
let currentDate = new Date(data.currentDate);

for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate < currentDate) {
        pastEvents.push(event)
    };
};
for (let event of data.events) {
    let eventDate = new Date(event.date);
    if (eventDate > currentDate) {
        upcomingEvents.push(event)
    };
};

categorias.forEach(categoria => {
    let eventosUpcomingCategoria = []
    let revenueUpcoming = 0
    let totalAttendanceUpcoming = 0
    eventosUpcomingCategoria = upcomingEvents.filter(event => event.category == categoria)
    eventosUpcomingCategoria.forEach(eventoUpcomingCategoria => {
        revenueUpcoming += eventoUpcomingCategoria.price * eventoUpcomingCategoria.estimate
        totalAttendanceUpcoming += eventoUpcomingCategoria.estimate / eventoUpcomingCategoria.capacity
    })
    percentageUpcomingAttendance = ((totalAttendanceUpcoming / eventosUpcomingCategoria.length)*100).toFixed(1)
    if(isNaN(percentageUpcomingAttendance)){
        percentageUpcomingAttendance = 0
    }
    document.getElementById("tbodyUpcoming").innerHTML += 
    `<tr>
        <td>${categoria}</td>
        <td>${revenueUpcoming}</td>
        <td>${percentageUpcomingAttendance}%</td>
    </tr>`
    let eventosPastCategoria = []
    let revenuePast = 0
    let totalAttendancePast = 0
    eventosPastCategoria = pastEvents.filter(event => event.category == categoria)
    eventosPastCategoria.forEach(eventoPastCategoria => {
        revenuePast += eventoPastCategoria.price * eventoPastCategoria.assistance
        totalAttendancePast += eventoPastCategoria.assistance / eventoPastCategoria.capacity
    })
    percentagePastAttendance = ((totalAttendancePast / eventosPastCategoria.length)*100).toFixed(1)
    document.getElementById("tbodyPast").innerHTML += 
    `<tr>
        <td>${categoria}</td>
        <td>${revenuePast}</td>
        <td>${percentagePastAttendance}%</td>
    </tr>`
})