// Chiedere all'utente il suo nome
let yourName = prompt("What is your name")
console.log(yourName)

// Chiedere all'utente il suo cognome
const yourLastname = prompt("What is your last name")
console.log(yourLastname)

// Chiedere all'utente il suo colore preferito
const yourColor = prompt("What is your prefer color")
console.log(yourColor)

// Scrivere sulla pagina: fabiopacifirosso22

// scrivo il nome
document.getElementById('view').innerHTML = yourName + yourLastname + yourColor + "22"