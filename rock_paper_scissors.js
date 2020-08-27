let playerScore = 0;
let computerScore = 0;

function game() {
  computerPlay = () => {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    if (computerChoice === 1) {
      computerChoice = "rock";
    } else if (computerChoice === 2) {
      computerChoice = "scissors";
    } else {
      computerChoice = "paper";
    }
    return computerChoice;
  };

  playerInput = () => {
    let playerChoice = prompt("Enter your value for game: ");
    playerChoice = playerChoice.toLowerCase();
    if (
      playerChoice === "rock" ||
      playerChoice === "scissors" ||
      playerChoice === "paper"
    ) {
      return playerChoice;
    } else {
      // alert("Not recognised input. Try again");
      return playerInput();
    }
  };

  {
    //   let playerSelection = playerInput();
    //   let computerSelection = computerPlay();
    // let playerSelection = prompt("Enter rock, paper or scissors: ");
    let playerSelection = playerInput();
    let computerSelection = computerPlay();
    console.log(
      `Computer played ${computerSelection} and player with ${playerSelection}`
    );
    // playerSelection = playerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore += 1;
      return "Rock beats scissors! Player wins!";
    } else if (computerSelection === "rock" && playerSelection === "scissors") {
      computerScore += 1;
      return "Rock beats scissors! Computer wins";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore += 1;
      return "Scissors beats paper! Player wins!";
    } else if (
      computerSelection === "scissors" &&
      playerSelection === "paper"
    ) {
      computerScore += 1;
      return "Scissors beats paper! Computer wins!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore += 1;
      return "Paper beats rock! Player wins!";
    } else if (computerSelection === "paper" && playerSelection === "rock") {
      computerScore += 1;
      return "Paper beats rock! Computer wins!";
    } else {
      computerScore += 1;
      playerScore += 1;
      return `You both drew ${playerSelection}! Play again!`;
    }
  }
  playRound(playerSelection, computerSelection);
}

console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
console.log(game());
console.log(
  `Player score is: ${playerScore}. Computer score is ${computerScore}`
);
