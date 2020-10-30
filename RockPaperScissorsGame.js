"use strict";

function questionOne(question, valid){
  do{
    let responseOne = promptFor("Wanna play a game?").trim();
  } while(!response || !valid(response));


 if(game === "yes") {
  // continue into below 
  var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
  var computerChoice = Math.random();
  if (computerChoice < 0.20) {
    computerChoice = "rock";
  }else if(computerChoice <= 0.80){
    computerChoice = "paper";
  }else if(computerChoice <= 0.80) {
    computerChoice = "spock";
  }else if(computerChoice <= 0.80) {
    computerChoice = "lizard";
  }else if(computerChoice <= 0.08) {
  computerChoice = "scissors";
   }

}
}


  
  function promptFor(question, valid){
    do{
      var response = prompt(question).trim();
    } while(!response || !valid(response));
    return response;
  }


  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }
  






class Game { //to be at minimum a best of three to decide a winner
    constructor(){
        this.playerOne = null;
        this.playTwo = null;
    }   
    displayInformation() {
        console.log("I failed.")
 
 
 
    }
    this




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
}

class Player { //I want to store all of the gesture options/choices in an array. I want to find a
    // way to utilize the array of gestures within my code (display gesture options, assign player a
    // gesture, etc). 
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gestures = ["rock", "paper", new Gesture("scissors", "paper", "lizard"), new Gesture("","", "")];
    
    }
    displayInformation() {
      console.log("I failed.")
    }
  }
class Human extends Player {// wants the option of a sinlge player (human vs Al) or a multiplayer
    // (human vs human) game.
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("I failed.")
    }
}
class Computer extends Player {
    constructor(name){
        super(name);
    }
    displayInformation() {
        console.log("I failed.")
    }
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

class Gesture{
  constructor(name,beatsOne,beatsTwo){
    this.name
    this.beatsOne
    this.beatsTwo
  }
}
let gesture = new Gesture("rock","scissors","lizard")
