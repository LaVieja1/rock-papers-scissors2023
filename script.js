console.log("Hello World");

function getComputerChoice() {

    let choice = '';
    const option = Math.floor((Math.random() * 3) + 1);
    
    if (option === 1) {
        choice = "Piedra";
    } else if (option === 2) {
        choice = "Papel";
    } else {
        choice = "Tijera";
    }

    return choice;
}