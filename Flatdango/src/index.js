// Confirm if the DOM has successfully loaded
document.addEventListener('DOMContentLoaded', () => {

    console.log('DOMContentLoaded')
})


// Created elements for manupilating the DOM
const poster1 = document.getElementById('poster')
const title = document.getElementById('title')
const runTime = document.getElementById('runtime')
const content = document.getElementsByClassName('content')
const filmInfo = document.getElementById('film-info')
const showTime = document.getElementById('showtime')
const remainingTickets = document.getElementById('ticket-num')
const movies = document.getElementById('films')
const btn = document.getElementById('buy-ticket')

let updatedTickets;

// Creating an element that holds the url
const url = 'http://localhost:3000/films';

const request = async () => {
    // Applying fetch to use data on the db.json
    let req = await fetch('http://localhost:3000/films')
    let res = await req.json()
    // Using the data retrived from fetch on the DOM
    poster1.setAttribute('src', res[0].poster)
    title.innerHTML = res[0].title
    runTime.innerHTML = res[0].runtime
    content.innerHTML = res[0].content
    filmInfo.innerHTML = res[0].description
    showTime.innerHTML = res[0].showtime
    // Function for making changes depending on the number of tickets 
    updatedTickets = (res[0].capacity - res[0].tickets_sold)
    remainingTickets.innerHTML = updatedTickets
    res.forEach((element) => {
        let li = document.createElement('li')
        movies.appendChild(li)
        li.append(element.title)

    })
    // Including a button function to make changes depending on the number of tickets
    btn.addEventListener('click', (e) => {
        if (updatedTickets > 0) {
         remainingTickets.innerHTML = --updatedTickets
        }
         if (updatedTickets <= 0) return alert('No More Tickets')
         e.preventDefault();
    })

}
request()