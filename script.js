function getComputerChoice () {
    const choice = ['rock', 'paper', 'scissors'];
    return(choice[Math.floor(Math.random() * choice.length)]);
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == 'rock' && computerSelection == "scissors"){
        return("Player won")
    }
    else if(playerSelection == 'paper' && computerSelection == "rock"){
        return("Player won")
    }
    else if(playerSelection == 'scissors' && computerSelection == "paper"){
        return("Player won")
    }
    else if(playerSelection == 'paper' && computerSelection == "paper"){
        return("Game tie")
    }
    else if(playerSelection == 'rock' && computerSelection == "rock"){
        return("Game tie")
    }
    else if(playerSelection == 'scissors' && computerSelection == "scissors"){
        return("Game tie")
    }
    else if(playerSelection == 'scissors' && computerSelection == "rock"){
        return("Player lost")
    }
    else if(playerSelection == 'rock' && computerSelection == "paper"){
        return("Player lost")
    }
    else if(playerSelection == 'paper' && computerSelection == "scissors"){
        return("Player lost")
    }
}

function game(){
    let playerWon = 0, computerWon = 0;
    for(let i=1; i<6; i++){
        let playerSelection = prompt("Player Selection: ");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(`Player Selection : ${playerSelection} Computer Selection : ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        if(result == "Player won"){
            playerWon++;
        }
        else if (result == "Player lost"){
            computerWon++;
        }
        console.log("Round " + i + ": " + result);
    }
    if(playerWon > computerWon){
        console.log("Player won the game.");
    }
    else if(playerWon < computerWon){
        console.log("Computer won the game.");
    }
    else if(playerWon == computerWon){
        console.log("Game tie.")
    }
}

game();