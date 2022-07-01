let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
    return (Math.floor(Math.random()*10));
}

function compareGuesses(humanGuess, computerGuess, targetNum) {
    const humanDiff = Math.abs(targetNum - humanGuess);
    const computerDiff = Math.abs(targetNum - computerGuess);
    if (humanDiff <= computerDiff) {
        return true;
    } else {
        false;
    }


}

const updateScore = winner=>{
    if (winner==='human'){
        humanScore++;
    } else if (winner==='computer'){
        computerScore++;
    }
}
const advanceRound=()=>
currentRoundNumber++;

