"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highCardCheck = void 0;
//This function looks at all values in each players hand and compare their heigh cards.
const highCardCheck = (
//Reciving players hands.
//Hands are sorted from small to big so index[0]=smallest and index[data.length-1]=largest.
{ hand: { values: playerOneValues } }, { hand: { values: playerTwoValues } }) => {
    //A visitor boolean value to stop the while function as soon as the winner is located.
    let visitor = false;
    //A counter variable to keep track of index.
    let count = 5;
    let playerOneWins = 0;
    let playerTwoWins = 0;
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
    return { playerOneWins: playerOneWins, playerTwoWins: playerTwoWins };
};
exports.highCardCheck = highCardCheck;
