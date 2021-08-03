//In this file I mainly read and sort the hands from "Files/poker-hands.txt"
//And this data will be checked in 'checkDublications.ts' file.

const fs = require("fs");
import { judgeHandsAndFindTheWinner } from "./judgeHands";
import { PlayerClass } from "./Player";

import { Hand, Player } from "./types";
//Creating an array to reserve all hands read from the text file.
let inputData: Array<string> = [];
let judgement = { playerOneWins: 0, playerTwoWins: 0 };
let playerOne: Player;
let playerTwo: Player;
//Runnig a File Scan on the poker-hands.txt to read the data for the game.
fs.readFile("Files/poker-hands.txt", "utf8", (err: string, res: string) => {
  //In case of any error print the Error.
  err && console.log(err);

  //Spliting each hand in the data using enter ('\n') in the string.
  //So we will have access to one hand at each index of the inputData array.
  inputData = res.split("\n");

  handleData(inputData);
});

const handleData = (data: string[]) => {
  //looping through all hands in the inputData array.
  //So we can splite each card and shuffle hands to our players.
  data.map((data) => {
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
        const { playerOneWins, playerTwoWins } = judgeHandsAndFindTheWinner(
          playerOne,
          playerTwo
        );
        judgement.playerOneWins += playerOneWins;
        judgement.playerTwoWins += playerTwoWins;
      }
    });
  });
};

// Showing the last result in console
console.log(
  `Player One :  ${judgement.playerOneWins} Hands,`,
  "\n",
  `Player Two :  ${judgement.playerTwoWins} Hands,`
);

//Creating the STDOUT.text file containing the programm results.
fs.writeFile(
  "STDOUT.txt",
  `Player One :  ${judgement.playerOneWins} Hands \n Player Two :  ${judgement.playerTwoWins} Hands`,
  (err: any) => {
    err
      ? console.log(err)
      : console.log(
          "STDOUT Ready to read. You can find this file in root folder of the project. Thank you for your time."
        );
  }
);
// });
