let humanScore = 0;
let computerScore = 0;
let round = 5;

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

function playRound(humanChoice, computerChoice){
  humanChoice = humanChoice.toLowerCase()
  let output;
  if ((humanChoice == 'rock' && computerChoice == 'sci') || (humanChoice == 'paper' && computerChoice == 'rock') || (humanChoice == 'sci' && computerChoice == 'paper')){
    output = 'You Win! '+ humanChoice + ' beats '+ computerChoice;
    humanScore++;
  }
  else if(humanChoice == computerChoice){
    output = 'You both played the same move ' + humanChoice + ' !! Draw !!';
  }
  else {
    output = 'You Lose! ' + computerChoice + ' beats ' + humanChoice;
    computerScore++;
  }
  // console.log(output);
  return output;
}

function pretify(value){
  if (value == 'rock'){
    return 'Rock';
  } else if (value == 'paper'){
    return 'Paper';
  } else if (value == 'sci'){
    return 'Scissor';
  } else {
    return '';
  }
}


// //we don't need this
// function playGame(rounds){
//   for(let i = 0; i < rounds; i++){
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();

//     playRound(humanSelection, computerSelection);
//   }

//   console.log('Your Score:', humanScore);
//   console.log('Computer Score:', computerScore)
// }


function updateGUI(result, compMove){
  const playerScorebox = document.querySelector('#player').children[0];
  const compScorebox = document.querySelector('#comp').children[0];
  
  const outputBox = document.querySelector('#head');
  console.dir(result);
  outputBox.textContent = result;

  const compMoveBox = document.querySelector('#compMove').children[1];
  compMoveBox.textContent = pretify(compMove);
  
  playerScorebox.textContent = humanScore;
  compScorebox.textContent = computerScore;
}

function endGameCheck(){
    const winnerBox = document.querySelector('#outputs').children[0];
    // console.dir(winnerBox)
  if (humanScore >= round){
    winnerBox.textContent = 'You Win !!';
    return true
  } else if(computerScore >= round){
    winnerBox.textContent = 'You Lose !!';
    return true
  } 
  return false;
}

// Even Listerners on choices
const selection = document.querySelector('#selection');
// Event Handler and game invoker
function choiceHandler(e){
  value = e.target.id;
  // console.log('value is stored');
  if (value != 'selection'){
    compMove =  getComputerChoice();
    result = playRound(value, compMove);
    updateGUI(result, compMove);
    isEnd = endGameCheck();
    if (isEnd){
      e.currentTarget.removeEventListener('click', choiceHandler)
    } 
  }
}
selection.addEventListener('click', choiceHandler);

// function getHumanChoice(value){
//   if (value)
//     return value;
// }
// getHumanChoice();
// console.log(value);



// make workflow like this
// whenever player click on button a game is played













// playGame(5);

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
