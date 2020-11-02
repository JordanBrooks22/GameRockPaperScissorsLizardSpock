"use strict";


// players roll all 6 dice and add up their score
// compare the two totals of each player
// higher total gets a point
// first to three


// two player game
// display rules

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
        this.playerTwo = null;
    }   
    // perfect example for best out of three wins 
    runGame() {  // "main" method
    this.displayRules();

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
      let playerOneTotal = ""
      let playerTwoTotal = ""

      if(playerOneTotal > playerTwoTotal) {
        console.log(this.playerOne.name + " wins this round!");
        this.playerOne.score++;
      }
      else if(playerTwoTotal > playerOneTotal) {
        console.log(this.playerTwo.name + " wins this round!");
        this.playerTwo.score++;
      }
      else {
        console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
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
      console.log(this.playerTwo.name + " wins this game!");
    }
  }
}
class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
    }

    // need help here
    displayInformation() {
      console.log(this.gestures)
    }
  }

  class Human extends Player {// wants the option of a sinlge player (human vs Al) or a multiplayer

    // (human vs human) game.
    constructor(name){
        this.name = name;
    }
    displayInformation() {
        console.log("i failed")
    }
  }
  class Computer extends Player {
    // (human vs computer) game.
  constructor(name){
        super(name);
    }
    // methods example below
    displayInformation() {
        console.log("hi")
    }
}

//
//also check into this var below
var userChoice = prompt("Do you choose rock, paper, scissors, lizard or spock?");
var computerChoice = Math.random();
if (computerChoice < 0.80){
    computerChoice = "rock";
} else if(computerChoice <= 0.80){
    computerChoice = "paper";
    } else 
    computerChoice = "scissors";
    else { 
      computerChoice = "lizard";
      else { 
        computerChoice = "spock";
      }
    }
  
  
  } 
}


var compare = function(choice1, choice2){
    if(choice1 === choice2){
    return "The result is a tie!";
}
if(choice1 === "rock"){
    if(choice2 === "scissors" || chocie2 === "Lizard"){
        return "rock wins";
    } else {
      if(choice2 === "spock"){
        return "spock wins";
      } if(choice2 === "paper"){
        return "paper wins"
      }
        
    }
  }
}
if(choice1 === "paper"){
    if(choice2 === "rock" || choice2 === "Spock"){
        return "paper wins";
    } else {
        if(choice2 === "scissors"){
       return "scissors wins";}
      if(choice2 === "Lizard"){
       return "Lizard wins"
      } 
    }     
   
}
if(choice1 === "scissors"){
    if(choice2 === "rock" || choice2 === "Lizards"){
        return "rock wins";
    } else {
        if(choice2 === "paper"){
            return "scissors wins";
        }
        if(choice2 === "spock"){
          return "spock wins"
        }
    }
}
if(choice1 === "Lizard"){
  if(choice2 === "spock" || choice2 === "Paper"){
    return "lizards wins";
  } else {
    if(choice2 === "Rock"){
    return "Rock wins"
  }
  if(choice2 === "scissors"){
    return "scissors wins"
  }
}
if(choice1 === "Spock"){
  if(choice2 === "scissors" || choice2 === "Rock"){
    return "Spock wins";
  } else {
    if(choice2 === "Paper" ){
      return "Paper wins"
    }
    if(choice2 === "Lizard"){
      return "Lizard wins"
    }

  }
}
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


displayRules() {
  console.log("Welcome to the game of rock paper scissors lizard spock!")
  console.log("Two players will play")
  console.log("The first player to three points will win the game!");
}