"use strict";

let game = prompt("Wanna play a game?");

if(game === "yes") {
  // continue into game 
  var userChoice = prompt("Rock, Paper, Scissors, Lizard, Spock?");
  var computerChoice = Math.random();
  if (computerChoice < 0.20) {
    computerChoice = "rock";
  }else if(computerChoice <= 0.80){
    computerChoice = "paper";
  }else if(computerChoice <= 0.80) {
    computerChoice = "spock"
  }
   else {
    computerChoice = "scissors";
  }
 
  ();
}
else {

}

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}









class Game { //to be at minimum a best of three to decide a winner
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("I failed.")
 
 
 
    }




    // perfect example for best out of three wins 
    runGame() {  // "main" method
    this.displayRules();

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneTotal = ;
      let playerTwoTotal = ;

      if(playerOneTotal > playerTwoTotal) {
        console.log(this.playerOne.name + " wins this round!");
        this.playerOne.score++;
      }
      else if(playerTwoTotal > playerOneTotal) {
        console.log(this.playerTwo.name + " wins this round!");
        this.playerTwo.score++;
      }
      else {
        console.log
      }
    }
    
    this.displayGameWinner();
  }
   // the example below is for showing a winner
  displayGameWinner() {
    if(this.playerOne.score > this.playerTwo.score) {
      console.log(this.playerOne.name + " wins this game!");
    }
    else {
      console.log(this.playerTwo.name + " wins this round!");
    }
  }

class Player { //I want to store all of the gesture options/choices in an array. I want to find a
    // way to utilize the array of gestures within my code (display gesture options, assign player a
    // gesture, etc). 
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("I failed.")
    }
}
class Human {// wants the option of a sinlge player (human vs Al) or a multiplayer
    // (human vs human) game.
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("I failed.")
    }
}
class Computer {
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("I failed.")
    }
}


//function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'Draw!';
      } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
        return "Player won!";
      } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
        return "Player won!";
      } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
        return "Player won!";
      } else if ((playerSelection == "lizard") && (computerSelection == "paper")) {
        return "Player won!";
      } else if ((PlayerSelection == "spock") && (somputerSelection == "rock")) {
        return "Player won!";
      } else if ((PlayerSelection == "rock") && (computerSelection == "lizard")) {
        return "Player won!";
      } else if ((playerSelection == "paper") && (computerSelection == "spock")) {
        return "Player won!";
      } else if ((playerSelection == "scissors") && (computerSelection == "lizard")) {
        return "Player won!";
      } else if ((playerSelection == "lizard") && (computerSelection == "spock")) {
        return "Player won!";
      } else if ((PlayerSelection == "spock") && (somputerSelection == "scissors")) {
        return "Player won!";
      // below are ways the computer beats the player
      } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
        return "Computer won!";
      } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
        return "Computer won!";
      } else if ((playerSelection == "scissors") && (computerSelection == "spock")) {
        return "Computer won!";
      }else if ((playerSelection == "lizard") && (computerSelection == "rock")) {
        return "Computer won!";
      }else if ((playerSelection  == "spock") && (computerSelection == "lizard")) {
        return "Computer won!";

      }else if ((playerSelection == "rock") && (computerSelection == "spock")) {
        return "Computer won!";
      } else if ((playerSelection == "paper") && (computerSelection == "lizard")) {
        return "Computer won!";
      } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
        return "Computer won!";
      }else if ((playerSelection == "lizard") && (computerSelection == "scissors")) {
        return "Computer won!";
      }else if ((playerSelection  == "spock") && (computerSelection == "paper")) {
        return "Computer won!";
    }

    var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "The result is a tie!";
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    } else {
        return "paper wins";
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper wins";
    } else {
        if(choice2 === "scissors") {
            return "scissors wins";
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock wins";
    } else {
        if(choice2 === "paper") {
            return "scissors wins";
        }
    }
}
}
};
console.log("User Choice: " + userChoice);
console.log("Computer Choice: " + computerChoice);
compare(userChoice, computerChoice);