const choices = document.querySelectorAll(".choice");

let userScoreBoard = document.querySelector(".user-score");
let compScoreBoard = document.querySelector(".comp-score");
let msgBox = document.querySelector(".msg-box");

let userScore = 0;
let compScore = 0;

const genCompChoice = () => {
  const compOptions = ["rock", "paper", "scissors"];
  const compChoiceOption = Math.floor(Math.random(1) * compOptions.length);
  return compOptions[compChoiceOption];
}

const playGame = (userChoice) => {
  console.log(`user clicked on the ${userChoice}`);
  const compChoice = genCompChoice();
  console.log("Computer clicked on the", compChoice);
  if (userChoice === compChoice) {
    // game draw
    drawGame();
    console.log("Game was draw");
  }
  else {
    let userWin = true;
    switch (userChoice) {
      case 'rock':
        // paper, scissors
      userWin = compChoice === "paper" ? false : true;
        break;
      case 'paper':
        // scissors, rock
       userWin = compChoice === "scissors" ? false : true;
        break;
      default :
        // paper, rock
       userWin = compChoice === "rock" ? false : true;
        break;
    }
    winner(userWin,userChoice,compChoice);
  }
}

const winner = (userWin,userChoice,compChoice) =>{
  if (userWin) {
    userScore++;
    userScoreBoard.innerText = userScore;
    msgBox.innerText = `you win ${userChoice} beats ${compChoice}`;
    msgBox.style.backgroundColor = "green";
  }
  else{
    compScore++;
    compScoreBoard.innerText = compScore;
    msgBox.innerText = `you lose ${compChoice} beats your ${userChoice}`;
    msgBox.style.backgroundColor = "red";
  }
}

const drawGame = () => {
  msgBox.innerText = "Game was draw, play again";
  msgBox.style.backgroundColor = "rgb(68, 68, 68)";
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});