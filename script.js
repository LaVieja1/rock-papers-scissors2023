let scorePlayer = 0;
let scoreComputer = 0;

let round = 0;

/// FUNCION QUE ELIGE ALEATORIAMENTE ENTRE PIEDRA PAPEL O TIJERA

function getComputerChoice() {

    let choice = '';
    const option = Math.floor((Math.random() * 3) + 1);
    
    if (option === 1) {
        choice = "piedra";
    } else if (option === 2) {
        choice = "papel";
    } else {
        choice = "tijera";
    }

    return choice;
}

///FUNCION QUE JUEGA UNA RONDA CON SUS DIFERENTES OPCIONES
///SE VA AUMENTANDO DE RONDA Y PUNTUACION

function playRound(playerSelection, computerSelection) {
    
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == computerSelection) {
        round++;
        console.log("Empate! Son iguales");
        return "Empate! Son iguales";
    }

    if (playerChoice == "piedra") {
        if (computerSelection == "papel") {
            scoreComputer++;
            round++;
            console.log("Perdiste! El papel le gana a la piedra");
            return "Perdiste! El papel le gana a la piedra";
        } else if (computerSelection == "tijera") {
            scorePlayer++;
            round++;
            console.log("Ganaste! La piedra le gana a la tijera");
            return "Ganaste! La piedra le gana a la tijera";
        }
    } else if (playerChoice == "papel") {
        if (computerSelection == "piedra") {
            scorePlayer++;
            round++;
            console.log("Ganaste! El papel le gana a la piedra");
            return "Ganaste! El papel le gana a la piedra";
        } else if (computerSelection == "tijera") {
            scoreComputer++;
            round++;
            console.log("Perdiste! La tijera le gana al papel");
            return "Perdiste! La tijera le gana al papel";
        }
    } else if (playerChoice == "tijera") {
        if (computerSelection == "piedra") {
            scoreComputer++;
            round++;
            console.log("Perdiste! La piedra le gana a la tijera");
            return "Perdiste! La piedra le gana a la tijera";
        } else if (computerSelection == "papel") {
            scorePlayer++;
            round++;
            console.log("Ganaste! La tijera le gana al papel");
            return "Ganaste! La tijera le gana al papel";
        }
    } else {
        return "Elegir papel,piedra o tijera";
    }

}

/* TEST
const playerSelection = "PIEDRA";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
*/

// INICIA UN JUEGO DE 5 RONDAS, SE INFORMA LA RONDA Y EL PUNTUAJE
// DEL JUGADOR Y LA COMPUTADORA, AL FINAL SE INDICA QUIEN GANO.

function game() {

    for (let i = 0; i < 5; i++) {
        let playerOption = prompt("¿Piedra, Papel o Tijera?");
        playRound(playerOption, getComputerChoice());
        console.log("Computadora", scoreComputer);
        console.log("Jugador", scorePlayer);
        console.log("Ronda", round);
    }

    if (scorePlayer > scoreComputer) {
        console.log("GANASTE PIEDRA, PAPEL O TIJERA");
    } else if (scoreComputer > scorePlayer) {
        console.log("PERDISTE PIEDRA, PAPEL O TIJERA");
    } else if (scorePlayer == scoreComputer) {
        console.log("EMPATE");
    }

}

//INICIA EL JUEGO

game();