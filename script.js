let scorePlayer = 0;
let scoreComputer = 0;

const playerPoints = document.getElementById('player-score');
const computerPoints = document.getElementById('computer-score');
const roundWinner = document.getElementById('ganador-ronda')
const botones = document.getElementById('botones');
const ganador = document.getElementById('ganador');
const jugar = document.getElementById('game');
const gameContainer = document.getElementById('container');

gameContainer.style.display = 'none';


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
        roundWinner.textContent = "Empate! Son iguales";
        return;
    }

    if (playerChoice == "piedra") {
        if (computerSelection == "papel") {
            scoreComputer++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! El papel le gana a la piedra";
            return;
        } else if (computerSelection == "tijera") {
            scorePlayer++;
            playerPoints.textContent = `${scorePlayer}`;
            roundWinner.textContent = "Ganaste! La piedra le gana a la tijera";
            return;
        }
    } else if (playerChoice == "papel") {
        if (computerSelection == "piedra") {
            scorePlayer++;
            playerPoints.textContent = `${scorePlayer}`;
            roundWinner.textContent = "Ganaste! El papel le gana a la piedra";
            return;
        } else if (computerSelection == "tijera") {
            scoreComputer++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! La tijera le gana al papel";
            return;
        }
    } else if (playerChoice == "tijera") {
        if (computerSelection == "piedra") {
            scoreComputer++;
            computerPoints.textContent = `${scoreComputer}`;
            roundWinner.textContent = "Perdiste! La piedra le gana a la tijera";
            return;
        } else if (computerSelection == "papel") {
            scorePlayer++;
            playerPoints.textContent = `${scorePlayer}`;
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

jugar.addEventListener('click', game);

function game() {

    jugar.style.display = 'none';
    gameContainer.style.display = 'flex';
    botones.style.display = "flex";
    ganador.textContent = '';
    roundWinner.textContent = '';

    let playerButton = '';
    let computerChoice = '';

    const btnPiedra = document.getElementById('piedra');
    btnPiedra.addEventListener('click', () => {
        playerButton = 'piedra';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);

        if (scorePlayer == 5 || scoreComputer == 5) {
            ganador.textContent = scorePlayer == 5 ? "GANASTE PIEDRA, PAPEL O TIJERA" : "PERDISTE PIEDRA, PAPEL O TIJERA";
            botones.style.display = "none";
            jugar.style.display = 'flex';
            jugar.textContent = 'Volver a jugar';
            jugar.addEventListener('click', () => {
                window.location.reload();
            })
        }

    });

    const btnPapel = document.getElementById('papel');
    btnPapel.addEventListener('click', () => {
        playerButton = 'papel';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);

        if (scorePlayer == 5 || scoreComputer == 5) {
            ganador.textContent = scorePlayer == 5 ? "GANASTE PIEDRA, PAPEL O TIJERA" : "PERDISTE PIEDRA, PAPEL O TIJERA";
            botones.style.display = "none";
            jugar.style.display = 'flex';
            jugar.textContent = 'Volver a jugar';
            jugar.addEventListener('click', () => {
                window.location.reload();
            })
        }
    });

    const btnTijera = document.getElementById('tijera');
    btnTijera.addEventListener('click', () => {
        playerButton = 'tijera';
        computerChoice = getComputerChoice();

        playRound(playerButton, computerChoice);

        if (scorePlayer == 5 || scoreComputer == 5) {
            ganador.textContent = scorePlayer == 5 ? "GANASTE PIEDRA, PAPEL O TIJERA" : "PERDISTE PIEDRA, PAPEL O TIJERA";
            botones.style.display = "none";
            jugar.style.display = 'flex';
            jugar.textContent = 'Volver a jugar';
            jugar.addEventListener('click', () => {
                window.location.reload();
            })
        }

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

}

//INICIA EL JUEGO

//game();