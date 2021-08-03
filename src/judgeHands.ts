import { Player, judgmentOutput } from "./types";
import { highCardCheck } from "./highCardCheck";

export const judgeHandsAndFindTheWinner = (playerOne: Player, playerTwo: Player): judgmentOutput => {
  let playerOneWins: number = 0;
  let playerTwoWins: number = 0;

  if (playerOne && playerTwo) {
    if (playerOne.rank > playerTwo.rank) {
      playerOneWins++;
    } else if (playerOne.rank < playerTwo.rank) {
      playerTwoWins++;
    } else if (playerOne.rank === playerTwo.rank) {
      if (playerOne.rank !== -1 && playerTwo.rank !== -1) {
        if (playerOne.rankValue[0].value && playerTwo.rankValue[0].value)
          if (playerOne.rankValue[0].value > playerTwo.rankValue[0].value) {
            playerOneWins++;
          } else if (
            playerOne.rankValue[0].value < playerTwo.rankValue[0].value
          ) {
            playerTwoWins++;
          } else if (
            playerOne.rankValue[0].value === playerTwo.rankValue[0].value
          ) {
            const highCardWinner=highCardCheck(playerOne, playerTwo);
            playerOneWins+=highCardWinner.playerOneWins;
            playerTwoWins+=highCardWinner.playerTwoWins;
          }
      } else {
        const highCardWinner=highCardCheck(playerOne, playerTwo);
        playerOneWins+=highCardWinner.playerOneWins;
        playerTwoWins+=highCardWinner.playerTwoWins;
      }
    }
  }
  return { playerOneWins: playerOneWins, playerTwoWins: playerTwoWins };
};
