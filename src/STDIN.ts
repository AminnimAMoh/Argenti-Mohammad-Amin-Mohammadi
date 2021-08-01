//In this file I mainly read and sort the hands from "Files/poker-hands.txt"
//And this data will be checked in 'checkDublications.ts' file.

const fs = require("fs");
import { checkDublications } from "./checkDublications";
import { checkForStraight } from "./CheckForStraight";
import { checkForFlush } from "./checkForFlush";
import { judgeHandsAndFindTheWinner } from "./judgeHands";

import { Hand } from "./types";
//Creating an array to reserve all hands read from the text file.
let inputData: Array<string> = [];

let playerOneWins: number = 0;
let playerTwoWins: number = 0;

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
        const dublicationState = checkDublications(handOne, handTwo);
        //Chaking straightState for Consecutive hands.
        const straightState = checkForStraight(
          handOne,
          handTwo,
          dublicationState
        );
        //The iterations showed there is only one hand with 5 Consecutive: Player Two  [ 4, 5, 6, 7, 8 ]
        //The only hand found straight is Player Two  [ 4, 5, 6, 7, 8 ] and it cannot be Royal Flush
        //So I skip Royal Flush to save time

        //Iterating through all hands an looking for hands with 5 simular suits.
        //Results shown none.
        const flushState = checkForFlush(handOne, handTwo);
        //One hand with ods for straigt and not flush hand means we do not have straight flush.
        //So I wont check for them to save time.

        //"Four of a kind" is our highest hand because the data dose not contain any Straigt Flush or Royal Flush.
        //This conclusion has made bu considering the fact that is the data dose not contains any Flush the first requairment
        //for Straigt Flush or Royal Flushis is false.
        //So I skiped Straigt Flush or Royal Flush as we have no ods on these two.
        const judgeHands = judgeHandsAndFindTheWinner(
          dublicationState,
          straightState,
          handOne,
          handTwo
        );

        //Incrimenting won hands for winner player chanking the string output from judgeHands function.
        if (judgeHands === "Player One wins") {
          playerOneWins++;
        } else if (judgeHands === "Player Two wins") {
          playerTwoWins++;
        }
      }
    });
  });

  //Showing the last result in console
  console.log(
    `Player One :  ${playerOneWins} Hands,`,
    '\n',
    `Player Two :  ${playerTwoWins} Hands,`
  );

  //Creating the STDOUT.text file containing the programm results.
  fs.writeFile('STDOUT.text', `Player One :  ${playerOneWins} Hands \n Player Two :  ${playerTwoWins} Hands`, (err: any)=>{
    err ? console.log(err) : console.log('STDOUT Ready to read. You can find this file in root folder of the project. Thank you for your time.');
  })
});
