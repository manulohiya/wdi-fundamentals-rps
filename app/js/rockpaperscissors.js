////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

  if (move) {
      var playerMove = move;
    }
    else {
       playerMove = getInput();
    }

    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    console.log("You Played:"+playerMove);
    return playerMove;
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
   if (move) {
      var computerMove = move;
    }
    else {
      computerMove = randomPlay();

   }

     console.log("Computer plays:"+computerMove);
      return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    if (playerMove === computerMove) {
        winner = 'tie';
    }
    else if(playerMove === 'rock'){
        if(computerMove === 'scissors'){
           winner = 'player';
        }
        else {
            winner = 'computer';
        }
    }

    else if(playerMove === 'paper'){
        if(computerMove === 'rock'){
            winner = 'player';
        }
        else {
            winner = 'computer';
        }
    }

    else if(playerMove === 'scissors'){
        if(computerMove === 'rock'){
            winner = 'computer';
        }
        else {
            winner = 'player';
        }
    }


    return winner;
}


   // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

function playToFive() {
    console.log("Let's play an epic game of Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var maxScore = 5;

    while (playerWins < maxScore && computerWins < maxScore) {

    var player = getPlayerMove();
    var computer = getComputerMove();
    var winner = getWinner(player,computer);

        if(winner === 'player') {
          playerWins = playerWins + 1;
          console.log("You won this round! Score so far:"+ playerWins + "-"+computerWins);


        }
        else if (winner === 'computer') {
            computerWins = computerWins + 1;
            console.log("Computer won this round! Score so far:"+ playerWins + "-"+computerWins);

        }

        else if (winner === 'tie'){
          console.log("Its a tie! Score so far:"+ playerWins + "-"+computerWins);


        }

      }

      if(playerWins === maxScore) {
       console.log ("Player Wins. Game Over!");
        }
      else if(computerWins === maxScore){
        console.log ("Computer Wins. Game Over!");
        }


}

playToFive();
