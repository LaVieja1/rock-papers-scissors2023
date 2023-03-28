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

function playRound(playerSelection, computerSelection) {
    
    let playerChoice = playerSelection.toLowerCase();

    if (playerChoice == computerSelection) {
        return "Empate! Son iguales";
    }

    if (playerChoice == "piedra") {
        if (computerSelection == "papel") {
            return "Perdiste! El papel le gana a la piedra";
        } else if (computerSelection == "tijera") {
            return "Ganaste! La piedra le gana a la tijera";
        }
    } else if (playerChoice == "papel") {
        if (computerSelection == "piedra") {
            return "Ganaste! El papel le gana a la piedra";
        } else if (computerSelection == "tijera") {
            return "Perdiste! La tijera le gana al papel";
        }
    } else if (playerChoice == "tijera") {
        if (computerSelection == "piedra") {
            return "Perdiste! La piedra le gana a la tijera";
        } else if (computerSelection == "papel") {
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