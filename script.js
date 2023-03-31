let scorePlayer = 0;
let scoreComputer = 0;

let round = 0;

const playerPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');
const roundWinner = document.getElementById('ganador-ronda')

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
        roundWinner.textContent = "Empate! Son iguales";
        return;
    }

    if (playerChoice == "piedra") {
        if (computerSelection == "papel") {
            scoreComputer++;
            round++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! El papel le gana a la piedra";
            return;
        } else if (computerSelection == "tijera") {
            scorePlayer++;
            round++;
            playerPoints.textContent = `${scorePlayer}`;
            roundWinner.textContent = "Ganaste! La piedra le gana a la tijera";
            return;
        }
    } else if (playerChoice == "papel") {
        if (computerSelection == "piedra") {
            scorePlayer++;
            round++;
            playerPoints.textContent = `${scorePlayer}`;
            roundWinner.textContent = "Ganaste! El papel le gana a la piedra";
            return;
        } else if (computerSelection == "tijera") {
            scoreComputer++;
            round++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! La tijera le gana al papel";
            return;
        }
    } else if (playerChoice == "tijera") {
        if (computerSelection == "piedra") {
            scoreComputer++;
            round++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! La piedra le gana a la tijera";
            return;
        } else if (computerSelection == "papel") {
            scorePlayer++;
            playerPoints.textContent = `${scorePlayer}`;
            round++;
            roundWinner.textContent = "Ganaste! La tijera le gana al papel";
            return;
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

    let playerButton = '';
    let computerChoice = '';

    const btnPiedra = document.getElementById('piedra');
    btnPiedra.addEventListener('click', () => {
        playerButton = 'piedra';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);
    });

    const btnPapel = document.getElementById('papel');
    btnPapel.addEventListener('click', () => {
        playerButton = 'papel';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);
    });

    const btnTijera = document.getElementById('tijera');
    btnTijera.addEventListener('click', () => {
        playerButton = 'tijera';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);
    });

/*
    for (let i = 0; i < 5; i++) {
        let playerOption = prompt("¿Piedra, Papel o Tijera?");
        playRound(playerOption, getComputerChoice());
        console.log("Computadora", scoreComputer);
        console.log("Jugador", scorePlayer);
        console.log("Ronda", round);
    }
*/
/*
    if (scorePlayer > scoreComputer) {
        console.log("GANASTE PIEDRA, PAPEL O TIJERA");
    } else if (scoreComputer > scorePlayer) {
        console.log("PERDISTE PIEDRA, PAPEL O TIJERA");
    } else if (scorePlayer == scoreComputer) {
        console.log("EMPATE");
    }
*/
}

//INICIA EL JUEGO

game();