//get computer's random choice
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];

    return choice[Math.floor(Math.random() * choice.length)];
}

//get human's choice
function getHumanChoice() {
    let choice = prompt("Chose between Rock, Paper or Scissors: ");

    return choice.toUpperCase();
}
let computerScore = 0;
let humanScore = 0;


//logic to determine if human choice wins or computers choice
let  playRound = function(humanChoice, computerChoice) {

     if (humanChoice === computerChoice) {
        //tie condition
        console.log(`It's a ties. You both picked ${humanChoice}`);
     } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You win! Rock beats Scissors.");
        humanScore++ ;
    } else if ((humanChoice === "paper") && (computerChoice === "rock" )) {
        console.log("You win! Paper beats Rock.");
        humanScore++;
     } else if ((humanChoice === "scissors" )&& (computerChoice === "paper")) { 
        console.log("You win! Scissor beats Paper");
        humanScore++;
     } else {
        //computer's win in this case
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        computerScore++;
     }

     console.log(`Player's choice: ${humanChoice}`);
     console.log(`computer's choice: ${computerChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


function scores() {
     if (humanScore > computerScore) {
        console.log(`Your score: ${humanScore} | Computer score ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`Your score: ${humanScore} | Computer score ${computerScore}`);
    } else {
        console.log("It's a tie");
    }
} 



function playGame() {
    console.log(`Rock, Paper, Scissors.

This game is played for over 5 Rounds. Ties do not count.
    `);
    let i = 1;
    let roundCount = 5;

    while (i <= roundCount) {
        console.log("Round " + i);

        playRound(humanSelection, computerSelection);
        i++;
    }
}
       
playGame();
console.log(scores());
