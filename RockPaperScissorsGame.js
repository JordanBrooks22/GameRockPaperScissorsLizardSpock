"use strict";
// asks the user a question then
function questionOne(question, valid){
  do{
    let responseOne = promptFor("Wanna play a game?").trim();
  } while(!response || !valid(response));
 if(game === "yes"){
    displayRules()
    console.log("Welcome to the game of rock, paper, scissors, lizard, spock!")
    console.log("Two players will play")
    console.log("The first player to three points will win the game!");
  }
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
  function yesNo(input){
    return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
  }
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
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        this.compareGesture(this.playerOne.chosenGesture, this.playerTwo.chosenGesture)
      }
      this.displayGameWinner();
      // if(playerOneTotal > playerTwoTotal) {
      //   console.log(this.playerOne.name + " wins this round!");
      //   this.playerOne.score++;
      // }
      // else if(playerTwoTotal > playerOneTotal) {
      //   console.log(this.playerTwo.name + " wins 4this round!");
      //   this.playerTwo.score++;
      // }
      // else {
      //   console.log("Wow! You managed to tie after each rolling " + this.dice.length + " dice!");
      // }
    
    this.displayGameWinner();
  }
  compareGesture(choice1, choice2){
    if(choice1 === choice2){
    return "The result is a tie!";
   }
   if(choice1 === "rock"){
    if(choice2 === "scissors" || chocie2 === "Lizard"){
      return "rock wins";
    } else {
      if(choice2 === "spock"){
        return "spock wins";
      } else {
        if(choice2 === "paper"){
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
       return "scissors wins";
      } else {
        if(choice2 === "Lizard"){
          return "lizard wins"
        }
      }
    } 
   } 
   if(choice1 === "scissors"){
    if(choice2 === "rock" || choice2 === "Lizards"){
        return "rock wins";
   } else {
     if(choice2 === "paper"){
       return "scissors wins";
      } else {
        if(choice2 === "spock"){
          return "spock wins"
        }
      }   
    }
   }
   if(choice1 === "Lizard"){
      if(choice2 === "spock" || choice2 === "Paper"){
        return "lizards wins";
   } else {
     if(choice2 === "rock"){
       return "rock wins";
      } else { 
        if(choice2 === "scissors"){
         return "scissors wins"
        }
      }
    }
   } 
   if(choice1 === "Spock"){
     if(choice2 === "scissors" || choice2 === "Rock"){
       return "Spock wins";
      } else {
        if(choice2 === "Paper" ){
          return "Paper wins"
        } else {
          if(choice2 === "Lizard"){
            return "Lizard wins"
          }
        } 
      }   
   }
  console.log("User Choice: " + userChoice);
  console.log("Computer Choice: " + computerChoice);
  compare(userChoice, computerChoice);
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
        this.chosenGesture = null;
      }

    // need help here
    displayInformation() {
      console.log(this.gestures)
    }
  }

  class Human extends Player {// wants the option of a sinlge player (human vs Al) or a multiplayer

    // (human vs human) game.
    constructor(name){
        super(name);
    }
    displayInformation() {
        console.log("i failed once again")
    }
    chooseGesture(){
      //take user input to select a gesture
      //this.chosenGesture =  //set equal to a gesture
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
    chooseGesture(){
      //use random to select gesture
    }

} 

class Gesture{


