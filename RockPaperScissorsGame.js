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

class Game { 
    constructor(){
        this.playerOne = null;
        this.playerTwo = null;
    }   
  
    gameSetup()
    {
      var waysToPlay = prompt("press 1 for human vs human \npress 2 for human vs computer\npress 3 for computer vs computer")
     
      switch(waysToPlay) {
        case '1':
          this.playerOne = new Human();
          this.playerTwo = new Human();
        break;
        case '2':
          this.playerOne = new Human();
          this.playerTwo = new Computer();
    
        break;
        case '3':
          this.playerOne = new Computer();
          this.playerTwo = new Computer();
    
        break;
        default:
        this.gameSetup();
        break;
      }


    }
    runGame() {  // "main" method
    this.displayRules();
    this.gameSetup();

    while(this.playerOne.score < 3 && this.playerTwo.score < 3) {
        this.playerOne.chooseGesture();
        this.playerTwo.chooseGesture();
        this.compareGesture(this.playerOne.chosenGesture, this.playerTwo.chosenGesture)
      }
    
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
      console.log("The result is a tie!");
   }
   if(choice1 === "rock"){
    if(choice2 === "scissors" || chocie2 === "Lizard"){
      console.log("rock wins");
      this.playerOne.score++;
    } else {
      if(choice2 === "spock"){
        console.log("spock wins");
        this.playerTwo.score++;
      } else {
        if(choice2 === "paper"){
          console.log("paper wins")
          this.playerTwo.score++;
        }
      } 
    }
   }
   if(choice1 === "paper"){
    if(choice2 === "rock" || choice2 === "spock"){
        console.log("paper wins");
        this.playerOne.score++;
    } else {
      if(choice2 === "scissors"){
       console.log("scissors wins");
       this.playerTwo.score++;
      } else {
        if(choice2 === "Lizard"){
          console.log("lizard wins");
          this.playerTwo.score++;
        }
      }
    } 
   } 
   if(choice1 === "scissors"){
    if(choice2 === "rock" || choice2 === "lizards"){
        console.log("rock wins");
        this.playerOne.score++;
   } else {
     if(choice2 === "paper"){
       console.log("scissors wins");
       this.playerTwo.score++;
      } else {
        if(choice2 === "spock"){
          console.log("spock wins");
          this.playerTwo.score++;
        }
      }   
    }
   }
   if(choice1 === "Lizard"){
      if(choice2 === "spock" || choice2 === "Paper"){
        console.log("lizards wins");
        this.playerOne.score++;
   } else {
     if(choice2 === "rock"){
       console.log("rock wins");
       this.playerOne.score++;
      } else { 
        if(choice2 === "scissors"){
         console.log("scissors wins");
         this.playerTwo.score++;
        }
      }
    }
   } 
   if(choice1 === "spock"){
     if(choice2 === "scissors" || choice2 === "Rock"){
       console.log("Spock wins");
       this.playerOne.score++;
      } else {
        if(choice2 === "Paper" ){
          console.log("Paper wins");
          this.playerTwo.score++;
        } else {
          if(choice2 === "Lizard"){
            console.log("Lizard wins")
            this.playerTwo.score++;
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
  displayRules()
  {
  }
}
class Player {
    constructor(name){
        this.name = name;
        this.score = 0;
        this.gestures = ["rock", "paper", "scissors", "lizard", "spock"];
        this.chosenGesture = null;
      }
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
        console.log("human vs human game!")
    }
    chooseGesture(){
      console.log("chooseGesture")

      let gameGestures = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      for(Let index = 0; index < gameGestures.length; index++){
        if (gestures[index] === 0){
          return(chosenGesture.rock)
      }
      else {
        if(gestures[index] === 1){
          return(chosenGesture.paper)
        }
      }

      //take user input to select a gesture
      this.chosenGesture =  //set equal to a gesture
    }
  }
  class Computer extends Player {
    // (human vs computer) game.
   constructor(name){
        super(name);
    }
    // methods example below
    displayInformation() {
        console.log("human vs computer game!")
    }
    chooseGesture(){
      //use random to select gesture
    }
  } 
  class ComputerVsComputer extends Player {
    // (computer vs computer) game.
    constructor(name){
        super(name);
      }
      displayInformation(){
        console.log("computer vs computer!")
       }
       chosenGesture(){

       }
   }
 

let game = new Game();
game.runGame();