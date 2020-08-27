// steps for game
// prompt user for the selection: rock, paper, scissors
// could simplify w/ r, p, s
// catch if not one of options, so return prompt
// convert choice to lowercase, so all options accepted
// create a choice for the computer: use random number 1-3
// each number for comp. represents a different choice
// use Math.random(). i think...
// define which choice wins in a bout.
// rock> scissors, scissors> paper, paper > rock
// each condition must return the result and who won
// can you condense to 3? or need 6? 3 for each player?
// keep a tally of players' scores during process
// start as best of 3 games. could improve to user input

// let playerSelection = prompt("Enter your choice");
// playerSelection = playerSelection.toLowerCase();

// playerValue = () => {
//   let playerChoice = prompt("Enter your choice");
//   playerChoice = playerChoice.toLowerCase();
//   if (
//     playerChoice === "rock" ||
//     playerChoice === "scissors" ||
//     playerChoice === "paper"
//   ) {
//     return playerChoice;
//   } else {
//     alert("Not recognised input. Try again");
//     playerValue();
//   }
// };

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

// let playerSelection = playerValue();
// const computerSelection = computerValue();
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
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
      playerInput();
    }
  };
  let playerSelection = playerInput();
  let computerSelection = computerPlay();
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore += 1;
    return "Rock beats scissors! Player wins!";
  } else if (computerSelection === "rock" && playerSelection === "scissors") {
    computerScore += 1;
    return "Rock beats scissors! Computer wins";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore += 1;
    return "Scissors beats paper! Player wins!";
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
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

// playerInput = () => {
//   let playerChoice = prompt("Enter your value for game: ");
//   playerChoice = playerChoice.toLowerCase();
//   if (
//     playerChoice === "rock" ||
//     playerChoice === "scissors" ||
//     playerChoice === "paper"
//   ) {
//     return playerChoice;
//   } else {
//     // alert("Not recognised input. Try again");
//     playerInput();
//   }
// };

game = (playerSelection, computerSelection) => {
  //   const playerSelection = playerInput();
  //   const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  console.log(
    `Player drew ${playerSelection} and computer drew ${computerSelection}`
  );
  playRound(playerSelection, computerSelection);
  console.log(
    `Player drew ${playerSelection} and computer drew ${computerSelection}`
  );
  playRound(playerSelection, computerSelection);
  console.log(
    `Player drew ${playerSelection} and computer drew ${computerSelection}`
  );
  playRound(playerSelection, computerSelection);
  console.log(
    `Player drew ${playerSelection} and computer drew ${computerSelection}`
  );
  playRound(playerSelection, computerSelection);
  console.log(
    `Player drew ${playerSelection} and computer drew ${computerSelection}`
  );
  return `The final score is: Computer: ${computerScore} Player: ${playerScore}`;
};

// const playerSelection = "rock";
// const playerSelection = playerInput();
// const computerSelection = computerPlay();
console.log(game(playerSelection, computerSelection));

// console.log(
//   `Player drew ${playerSelection} and computer drew ${computerSelection}`
// );

// console.log(playRound(playerSelection, computerSelection));
