alert("Juego de piedra papel o tijera. Primero : Elige un numero de partidas. Segundo: escribe en minusculas una de estas tres opciones y clickea la tecla enter")
let numberOfGames = parseInt(prompt("ingrese numero de juegos"));
const choices = ["tijera", "papel", "piedra"]
var wins = 0;
var ties = 0;
var lost = 0;
let winsSpan = document.getElementById("wins");
let tiesSpan = document.getElementById("ties");
let losesSpan = document.getElementById("loses");
let numberGames = document.getElementById("numberGames")
numberGames.textContent = numberOfGames;


for (let i = 0; i < numberOfGames; i++){
    let randomChoice = choices[Math.floor(Math.random() * 3)]
    let choice = prompt("ingrese tijera, papel, piedra en minusculas");
    switch(choice){
        case "tijera": if(randomChoice == "tijera"){
            alert("El programa saco Tijera, Empate");
            ties += 1;
        } else if(randomChoice == "papel"){
            alert("El programa saco Papel, Ganaste!")
            wins += 1;
        } else {
            alert("El programa saco Piedra, Perdiste")
            lost += 1;
        }
        break;
        case "papel": if(randomChoice == "tijera"){
            alert("El programa saco Tijera, Perdiste");
            lost += 1;
        } else if(randomChoice == "papel"){
            alert("El programa saco Papel, Empate")
            ties += 1;
        } else {
            alert("El programa saco Piedra, Ganaste")
            wins += 1;
        }
        break;
        case "piedra": if(randomChoice == "tijera"){
            alert("El programa saco Tijera, Ganaste");
            wins += 1;
        } else if(randomChoice == "papel"){
            alert("El programa saco Papel, Perdiste")
            lost += 1;
        } else {
            alert("El programa saco Piedra, Empate")
            ties += 1;
        }
        break;  
        default: alert("Escriba una de las tres opciones, con minusculas. Pierdes un juego.")
        lost += 1;
        break;
    }
    winsSpan.innerHTML = wins;
    tiesSpan.innerHTML = ties;
    losesSpan.innerHTML = lost;
}