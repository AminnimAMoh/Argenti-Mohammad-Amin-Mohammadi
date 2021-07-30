//In this file I mainly read and sort the hands from "Files/poker-hands.txt"
//And this data will be judged in 'judge.ts' file.


const fs = require("fs");
import {judgeHands} from './judge'
import {Hand} from './types'
//Creating an array to reserve all hands read from the text file.
let inputData: Array<string> = [];

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

    // looping through all cards in a hand and suffle them between our two players.
    //First 5 cards will go to player one.
    //Second (rest) will go to player two.
    splitedData.forEach((handData, index) => {
      //Condition to seperate the players one cards from player two cards.
      //If the itteration index is less than 5 cards go to player one so we reserved them in handOne
      //Else the cards will be reserved in handTwo
      if (index < 5) {
        handOne.values.push(parseInt(handData[0]) ? +handData[0] : handData[0]);
        handOne.suits.push(handData[1])
      } else {
        handTwo.values.push(parseInt(handData[0]) ? +handData[0] : handData[0]);
        handTwo.suits.push(handData[1])
      }
        index === 9 && judgeHands(handOne, handTwo);
    });
  });

});
