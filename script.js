let computerScore = 0;
let humanScore = 0;
let roundCount = 0;
let maxRounds = 6;

//get computer's random choice
function getComputerChoice() {
    const choice = ["rock", "paper", "scissors"];

    return choice[Math.floor(Math.random() * choice.length)];
}

//get human's choice
function getHumanChoice(choice) {

    return choice;
}


const outputContainer = document.querySelector("#outputContainer");
const human = document.querySelector("#human");
const comp = document.querySelector("#comp");

//logic to determine if human choice wins or computers choice
let  playGame = function(humanChoice, computerChoice) {
    let result = "";

     if (humanChoice === computerChoice) {
        //tie condition
        result = `It's a ties. You both picked ${humanChoice}`;
     } else if (
        (humanChoice === "rock") && (computerChoice === "scissors") || (humanChoice === "paper") && (computerChoice === "rock" ) || 
        (humanChoice === "scissors" )&& (computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++ ;
        roundCount++;
    
     } else {
        //computer's win in this case
        result = `You Lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        roundCount++;
     }

     outputContainer.textContent = result;


     human.textContent = `Player's choice: ${humanChoice}`;
     comp.textContent = `computer's choice: ${computerChoice}`;

     updateScoreLine();

     if (roundCount >= maxRounds) {
        endGame(); 
    }
    
 }



const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", () => playGame("rock", getComputerChoice()));
btn2.addEventListener("click", () => playGame("paper", getComputerChoice()));
btn3.addEventListener("click", () => playGame("scissors", getComputerChoice()));



// playRound(humanSelection, computerSelection);

const text = document.querySelector("#text");
const round = document.querySelector("#round");
const message = document.querySelector("#msg")


function updateScoreLine() {
     if (humanScore > computerScore) {
        outputContainer.textContent = `Your score: ${humanScore} | Computer score ${computerScore}`; 

        round.textContent = `Rounds: ${roundCount} /${maxRounds}`;
    
    }
    
} 



text.textContent = "This game is played for over 6 Rounds. Ties do not count.";


//  handling the end of the game.
function endGame() {
    finalMessage = "";
    if (humanScore > computerScore) {
        finalMessage = "🎉🎉 You win the game!";
    } else if (computerScore > humanScore) {
        finalMessage = "🖥️ Computer win the game.";
    } else {
        finalMessage = "🤝It's a draw.";
    }

    message.textContent = finalMessage;
    // disable the buttons after game ends
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;

}
   


// console.log = (scores());
