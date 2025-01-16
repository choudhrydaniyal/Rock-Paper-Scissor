const result = document.querySelector(".result");

function getComputerChoice() {
  const choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}
let playerWon = 0,
  computerWon = 0,
  rounds = 0;
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  result.textContent = `Computer Choice: ${computerSelection} Game Result: `;

  if (playerSelection == "rock" && computerSelection == "scissors") {
    result.textContent += "Player won";
    playerWon++;
    rounds++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    result.textContent += "Player won";
    playerWon++;
    rounds++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    result.textContent += "Player won";
    playerWon++;
    rounds++;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    result.textContent += "Game tie";
    rounds++;
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    result.textContent += "Game tie";
    rounds++;
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    result.textContent += "Game tie";
    rounds++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    result.textContent += "Player lost";
    computerWon++;
    rounds++;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    result.textContent += "Player lost";
    computerWon++;
    rounds++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    result.textContent += "Player lost";
    computerWon++;
    rounds++;
  }

  if (rounds > 4) {
    if (playerWon > computerWon) {
      result.textContent = "Player Won!";
    } else if (computerWon > playerWon) {
      result.textContent = "Player Lost!";
    } else {
      result.textContent = "Game Tie!";
    }
  }
}
