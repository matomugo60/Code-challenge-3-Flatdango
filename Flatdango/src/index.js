// Confirm if the DOM has successfully loaded
document.addEventListener('DOMContentLoaded', () => {

    console.log('DOMContentLoaded')
})
// Adding details for manupilating the DOM
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