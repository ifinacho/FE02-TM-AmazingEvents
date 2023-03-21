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

let maxEventAttendance = pastEvents.reduce((event1, event2) => {
    let event1PastAttendance = event1.assistance / event1.capacity
    let event2PastAttendance = event2.assistance / event2.capacity
    console.log(event1.name);
    console.log(event2.name);
    if(event1PastAttendance > event2PastAttendance){
        return event1
    }else{
        return event2
    }
})
let minEventAttendance = pastEvents.reduce((event1, event2) => {
    let event1PastAttendance = event1.assistance / event1.capacity
    let event2PastAttendance = event2.assistance / event2.capacity
    console.log(event1.name);
    console.log(event2.name);
    if(event1PastAttendance < event2PastAttendance){
        return event1
    }else{
        return event2
    }
})
let maxEventCapacity = data.events.reduce((event1, event2) => {
    console.log(event1.name);
    console.log(event2.name);
    if(event1.capacity > event2.capacity){
        return event1
    }else{
        return event2
    }
})
document.getElementById("tbodyEvents").innerHTML =
`<tr>
    <td>${maxEventAttendance.name}</td>
    <td>${minEventAttendance.name}</td>
    <td>${maxEventCapacity.name}</td>
</tr>`




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
    if(percentageUpcomingAttendance >= 100){
        percentageUpcomingAttendance = Math.round(percentageUpcomingAttendance)
    }
    document.getElementById("tbodyUpcoming").innerHTML += 
    `<tr>
        <td>${categoria}</td>
        <td>$${revenueUpcoming}</td>
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
    if(isNaN(percentagePastAttendance)){
        percentagePastAttendance = 0
    }
    if(percentagePastAttendance >= 100){
        percentagePastAttendance = Math.round(percentagePastAttendance)
    }
    document.getElementById("tbodyPast").innerHTML += 
    `<tr>
        <td>${categoria}</td>
        <td>$${revenuePast}</td>
        <td>${percentagePastAttendance}%</td>
    </tr>`
})
