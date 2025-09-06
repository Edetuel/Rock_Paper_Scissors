//get computer's random choice
function getComputerChoice() {
    const choice = ["ROCK", "PAPER", "SCISSORS"];

    return choice[Math.floor(Math.random() * choice.length)];
}

//get human's choice
function getHumanChoice() {

    return btn1, btn2, btn3
}
let computerScore = 0;
let humanScore = 0;

const outputContainer = document.querySelector("#outputContainer");

//logic to determine if human choice wins or computers choice
let  playRound = function(humanChoice, computerChoice) {

     if (humanChoice === computerChoice) {
        //tie condition
        outputContainer.textContent = `It's a ties. You both picked ${humanChoice}`;
     } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        outputContainer.textContent = "You win! Rock beats Scissors.";
        humanScore++ ;
    } else if ((humanChoice === "paper") && (computerChoice === "rock" )) {
        outputContainer.textContent = "You win! Paper beats Rock.";
        humanScore++;
     } else if ((humanChoice === "scissors" )&& (computerChoice === "paper")) { 
        outputContainer.textContent = "You win! Scissor beats Paper";
        humanScore++;
     } else {
        //computer's win in this case
        outputContainer.textContent = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
     }

     outputContainer.textContent = `Player's choice: ${humanChoice}`;
     outputContainer.textContent = `computer's choice: ${computerChoice}`;
}
playRound();


const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", playRound);
btn2.addEventListener("click", playRound);
btn3.addEventListener("click", playRound);

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);


function scores() {
     if (humanScore > computerScore) {
        outputContainer.textContent = `Your score: ${humanScore} | Computer score ${computerScore}`;
    } else if (computerScore > humanScore) {
        outputContainer.textContent = `Your score: ${humanScore} | Computer score ${computerScore}`;
    } else {
        outputContainer.textContent = "It's a tie!";
    }
} 




function playGame() {
    text.textContent = 
"This game is played for over 5 Rounds. Ties do not count."
    ;
    let i = 1;
    let roundCount = 5;

    while (i <= roundCount) {
        console.log ("Round"  + i);
        

        playRound(computerSelection, humanSelection);
        i++;
    
    }
}
   
const text = document.querySelector("#text");
const round = document.querySelector("#round");


playGame(playRound);
console.log(scores());
