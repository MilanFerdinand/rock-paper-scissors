function computerPlay(){
  let options = ["rock","paper","scissors"];
    let randomPlay = options[Math.floor(Math.random()*options.length)];
      return randomPlay;
}

let playerScore = 0;
let computerScore = 0;

function game(){
  while (playerScore < 5 || computerScore < 5){
    let playerInput = prompt("Choose your weapon (Rock, Paper, Scissors)","");
      const playerSelection = playerInput.toLowerCase(); //convert input to consistent case
        const computerSelection = computerPlay();
          setScore(getWinner(playerSelection,computerSelection));
            if (playerScore === 5 || computerScore === 5){
              return playerScore > computerScore ? console.log("You won the game.") : console.log("You lost the game.");
          }
    }
}

function getWinner(playerSelection, computerSelection) {
if (playerSelection == computerSelection) {
  return "tie";
} else if (playerSelection == "rock" && computerSelection == "scissors") {
  return "player";
}
else if (playerSelection == "rock" && computerSelection == "paper") {
  return "computer";
}
else if (playerSelection == "paper" && computerSelection == "rock") {
  return "player";
}
else if (playerSelection == "paper" && computerSelection == "scissors") {
  return "computer";
}
else if (playerSelection == "scissors" && computerSelection == "rock") {
  return "computer";
}
else if (playerSelection == "scissors" && computerSelection == "paper") {
  return "player";
}
}

function setScore(winner) {
if (winner === "tie") {
  console.log("It\'s a tie!");
} else if (winner === "player") {
  console.log("Yay, you won!");
    playerScore++;
} else if (winner === "computer") {
  console.log("Oh no.. you lost.");
    computerScore++;
}
console.log(`Player: ${playerScore}\nComputer: ${computerScore}`);
}

game();