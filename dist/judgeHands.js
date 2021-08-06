"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.judgeHandsAndFindTheWinner = void 0;
const highCardCheck_1 = require("./highCardCheck");
const judgeHandsAndFindTheWinner = (playerOne, playerTwo) => {
    let playerOneWins = 0;
    let playerTwoWins = 0;
    if (playerOne && playerTwo) {
        if (playerOne.rank > playerTwo.rank) {
            playerOneWins++;
        }
        else if (playerOne.rank < playerTwo.rank) {
            playerTwoWins++;
        }
        else if (playerOne.rank === playerTwo.rank) {
            if (playerOne.rank !== -1 && playerTwo.rank !== -1) {
                if (playerOne.rankValue[0].value && playerTwo.rankValue[0].value)
                    if (playerOne.rankValue[0].value > playerTwo.rankValue[0].value) {
                        playerOneWins++;
                    }
                    else if (playerOne.rankValue[0].value < playerTwo.rankValue[0].value) {
                        playerTwoWins++;
                    }
                    else if (playerOne.rankValue[0].value === playerTwo.rankValue[0].value) {
                        const highCardWinner = highCardCheck_1.highCardCheck(playerOne, playerTwo);
                        playerOneWins += highCardWinner.playerOneWins;
                        playerTwoWins += highCardWinner.playerTwoWins;
                    }
            }
            else {
                const highCardWinner = highCardCheck_1.highCardCheck(playerOne, playerTwo);
                playerOneWins += highCardWinner.playerOneWins;
                playerTwoWins += highCardWinner.playerTwoWins;
            }
        }
    }
    return { playerOneWins: playerOneWins, playerTwoWins: playerTwoWins };
};
exports.judgeHandsAndFindTheWinner = judgeHandsAndFindTheWinner;
