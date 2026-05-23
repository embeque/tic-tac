function getComputerChoice(){
  randn = Math.floor(Math.random()*3)+1
  if (randn <= 1){
    return 'rock';
  }
  else if(randn == 2){
    return 'paper';
  }
  else if(randn >= 3){
    return 'sci';
  }
}

function getHumanChoice(){
  input = prompt('Enter you choice: rock, paper, sci');
  return input;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase()
  if ((humanChoice == 'rock' && computerChoice == 'sci') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'sci' && computerChoice == 'paper')){
    console.log('You Win!', humanChoice,'beats', computerChoice);
    humanScore++;
  }
  else if(humanChoice == computerChoice){
    console.log('You both played the same move', humanChoice, ' !! Draw !!');
  }
  else {
    console.log('You Lose!', computerChoice, 'beats', humanChoice);
    computerScore++;
  }
  return;
}

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection)

function playGame(rounds){
  for(let i = 0; i < rounds; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }

  console.log('Your Score:', humanScore);
  console.log('Computer Score:', computerScore)
}
playGame(5);

// function check(){
//   let rock = 0;
//   let paper = 0;
//   let sci = 0;
//   for (let i = 0; i < 100; i++) {
//     randomn = Math.floor(Math.random()*3)+1
//     if (randomn <= 1){
//       rock++;
//     }
//     else if(randomn == 2){
//       paper++;
//     }
//     else if(randomn >= 3){
//       sci++;
//     }
//   }
//   console.log('rock is:', rock);
//   console.log('paper is:', paper);
//   console.log('sci is:', sci);
//
// }
//
