const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput ==='scissors') {
      return userInput
      }else if (userInput === 'bomb') {
        return userInput
        console.log('Blast! a Secret Weapon!')
      }else {
        console.log('Cheater')
      } 
}
/*
console.log(getUserChoice('paper'))
console.log(getUserChoice('Dog'))
*/
const getComputerChoice = () =>{
 const randomNumber = Math.floor(Math.random() * 3) 
switch(randomNumber) {
  case 0:
    return 'rock'
    break;
  case 1:
    return 'paper'
    break;
  case 2:
    return 'scissors'
    break;
}
 } 
//console.log(getComputerChoice());
const determineWinner = (userInput, getComputerChoice) => {
  if (userInput === getComputerChoice) {
    return "it's a tie!"
  }else if(userInput === 'rock' && getComputerChoice === 'paper') {
    return "You lose"
  }else if(userInput === 'paper' && getComputerChoice === 'scissors') {
    return "You lose"
  }else if(userInput === 'scissors' && getComputerChoice === 'rock') {
    return "You lose"
  }else if(userInput === 'paper' && getComputerChoice === 'rock') {
    return "You win!"
  }else if(userInput === 'rock' && getComputerChoice === 'scissors') {
    return "You win!"
  }else if(userInput === 'scissors' && getComputerChoice === 'paper') {
    return "You win!"
  }else if (userInput === 'bomb' && getComputerChoice[0,1,2]){
    return "well played cheater, You win!"
  }
}
const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('you threw ' + userChoice);
  console.log('the computer threw ' + computerChoice)
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();