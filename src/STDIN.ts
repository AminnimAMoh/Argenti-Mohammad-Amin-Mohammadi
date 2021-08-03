//In this file I mainly read and sort the hands from "Files/poker-hands.txt"
//And this data will be checked in 'checkDublications.ts' file.

const fs = require("fs");
import { checkDublications } from "./checkDublications";
import { checkForStraight } from "./CheckForStraight";
import { checkForFlush } from "./checkForFlush";
import { judgeHandsAndFindTheWinner } from "./judgeHands";
import { PlayerClass } from "./Player";

import { Hand, Player } from "./types";
//Creating an array to reserve all hands read from the text file.
let inputData: Array<string> = [];

let playerOneWins: number = 0;
let playerTwoWins: number = 0;

let player: Player[] = [];
let playerOne: Player;
let playerTwo: Player;
//Runnig a File Scan on the poker-hands.txt to read the data for the game.
fs.readFile("Files/poker-hands.txt", "utf8", (err: string, res: string) => {
  //In case of any error print the Error.
  err && console.log(err);

  //Spliting each hand in the data using enter ('\n') in the string.
  //So we will have access to one hand at each index of the inputData array.
  inputData = res.split("\n");

  //looping through all hands in the inputData array.
  //So we can splite each card and shuffle hands to our players.
  inputData.map((data, dataIndex) => {
    //Spliting each card in each hand using the white space between them.
    //And reserving all 10 cards in an array
    const splitedData = data.split(" ");

    //Two variables to reserve each players cards.
    let handOne: Hand = { values: [], suits: [] };
    let handTwo: Hand = { values: [], suits: [] };

    let handOneTest: string = "";

    // looping through all cards in a hand and suffle them between our two players.
    //First 5 cards will go to player one.
    //Second (rest) will go to player two.
    splitedData.forEach((handData, index) => {
      //Condition to seperate the players one cards from player two cards.
      //If the itteration index is less than 5 cards go to player one so we reserved them in handOne
      //Else the cards will be reserved in handTwo
      if (index < 5) {
        //At first I thought there is no 10 in data. 😆
        //When I saw 'T' i changed the condition to change 'T' tpo 10.
        //I am using indexes to simplify reading.
        //I could use charAt but i find it easier to read.
        handOne.values.push(
          parseInt(handData[0])
            ? +handData[0]
            : //traslating alphabetics to numbers to nake comperisions easier
            handData[0] === "T"
            ? 10
            : handData[0] === "J"
            ? 11
            : handData[0] === "Q"
            ? 12
            : handData[0] === "K"
            ? 13
            : handData[0] === "A"
            ? 14
            : handData[0]
        );
        handOne.suits.push(handData[1]);
        if (index === 4) playerOne = new PlayerClass(handOne, 1).run();
      } else {
        handTwo.values.push(
          parseInt(handData[0])
            ? +handData[0]
            : //traslating alphabetics to numbers to nake comperisions easier
            handData[0] === "T"
            ? 10
            : handData[0] === "J"
            ? 11
            : handData[0] === "Q"
            ? 12
            : handData[0] === "K"
            ? 13
            : handData[0] === "A"
            ? 14
            : handData[0]
        );
        handTwo.suits.push(handData[1]);
      }
      if (index === 9) {
        playerTwo = new PlayerClass(handTwo, 2).run();
        if (playerOne && playerTwo) {
          if (playerOne.rank > playerTwo.rank) {
            playerOneWins++;
          } else if (playerOne.rank < playerTwo.rank) {
            playerTwoWins++;
          } else if (playerOne.rank === playerTwo.rank) {
            if (playerOne.rankValue > playerTwo.rankValue) {
              playerOneWins++;
            } else if (playerOne.rankValue < playerTwo.rankValue) {
              playerTwoWins++;
            } else if (playerOne.rankValue === playerTwo.rankValue) {
              highCardCheck(playerOne, playerTwo);
            }
          } else {
            console.log(playerOne.rank);
            highCardCheck(playerOne, playerTwo);
          }
        }
      }

      //   const dublicationState = checkDublications(handOne, handTwo);
      //Chaking straightState for Consecutive hands.
      // const straightState = checkForStraight(
      //   handOne,
      //   handTwo,
      //   dublicationState
      // );
      //The iterations showed there is only one hand with 5 Consecutive: Player Two  [ 4, 5, 6, 7, 8 ]
      //The only hand found straight is Player Two  [ 4, 5, 6, 7, 8 ] and it cannot be Royal Flush
      //So I skip Royal Flush to save time

      //Iterating through all hands an looking for hands with 5 simular suits.
      //Results shown none.
      // const flushState = checkForFlush(handOne, handTwo);
      //One hand with ods for straigt and not flush hand means we do not have straight flush.
      //So I wont check for them to save time.

      //"Four of a kind" is our highest hand because the data dose not contain any Straigt Flush or Royal Flush.
      //This conclusion has made bu considering the fact that is the data dose not contains any Flush the first requairment
      //for Straigt Flush or Royal Flushis is false.
      //So I skiped Straigt Flush or Royal Flush as we have no ods on these two.
      // const judgeHands = judgeHandsAndFindTheWinner(
      //   dublicationState,
      //   straightState,
      //   handOne,
      //   handTwo
      // );

      //Incrimenting won hands for winner player chanking the string output from judgeHands function.
      // if (judgeHands === "Player One wins") {
      //   playerOneWins++;
      // } else if (judgeHands === "Player Two wins") {
      //   playerTwoWins++;
      // }
    });
  });

  // Showing the last result in console
  console.log(
    `Player One :  ${playerOneWins} Hands,`,
    "\n",
    `Player Two :  ${playerTwoWins} Hands,`
  );

  // //Creating the STDOUT.text file containing the programm results.
  // fs.writeFile('STDOUT.txt', `Player One :  ${playerOneWins} Hands \n Player Two :  ${playerTwoWins} Hands`, (err: any)=>{
  //   err ? console.log(err) : console.log('STDOUT Ready to read. You can find this file in root folder of the project. Thank you for your time.');
  // })
});

//This function looks at all values in each players hand and compare their heigh cards.
const highCardCheck = (
  //Reciving players hands.
  //Hands are sorted from small to big so index[0]=smallest and index[data.length-1]=largest.
  { hand: { values: playerOneValues } }: Player,
  { hand: { values: playerTwoValues } }: Player
): void => {
  //A visitor boolean value to stop the while function as soon as the winner is located.
  let visitor: boolean = false;
  //A counter variable to keep track of index.
  let count: number = 5;

  // Looping through the hands to comper their values.
  // Loop continues till eather a winner has fined or we reached the end of arrays.
  while (!visitor && count >= 0) {
    //If the index value of player one hand is heigher than player two player one wins.
    if (playerOneValues[count] > playerTwoValues[count]) {
      playerOneWins++;
      visitor = true;
    }
    //Else If the index value of player Two hand is heigher than player two player Two wins.
    else if (playerOneValues[count] < playerTwoValues[count]) {
      playerTwoWins++;
      visitor = true;
    }
    //Else we have to look at the next index.
    else {
      count--;
    }
  }
};
