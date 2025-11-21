humanScore = 0;
computerScore = 0;

// Get computer choice
function getComputerChoice(){
    random = Math.random();
    if (random <= 0.33) {
        return "rock"
    }
    else if (random <= 0.66 && random > 0.33) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Get Human choice
function getHumanChoice(){
    choice = prompt("Type Rock, Paper or Scissors");
    return choice.toLowerCase()
}

humanChoice = getHumanChoice()

console.log("Computer Choice: " + getComputerChoice());
console.log("Human Choice: " + humanChoice);
