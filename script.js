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

let humanScore = 0;
let computerScore = 0;

//logic to determine if human choice wins or computers choice
let  playRound = function(humanChoice, computerChoice) {
     if (humanChoice === computerChoice) {
        //tie condition
        alert(`It's a ties. You both picked ${humanChoice}`);
     } else if (humanChoice === "rock" && computerChoice === "scissors" || computerChoice === "scissors" && humanChoice === "rock") {
        alert("You win! Rock beats Scissors.");
     } else if (humanChoice === "paper" && computerChoice === "rock" || computerChoice === "rock" && humanChoice === "paper") {
        alert("You win! Paper beats Rock.");
     } else if (humanChoice === "scissors" && computerChoice === "paper" || computerChoice === "paper" && humanChoice === "scissors") {
        alert("You win! Scissor beats Paper");
     } else {
        //computer's win in this case
        alert(`You Lose! ${computerChoice} beats ${humanChoice}`)
     }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    for (let i = 1; i <= round; i++) {
        if (round <= 5){
            alert("This is the last round");
            break;
        }
    }  
        
 }
