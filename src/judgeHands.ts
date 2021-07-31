import { PairState, StraightState, Hand } from "./types";

export const judgeHandsAndFindTheWinner = (
  { playerOnePairStatus, playerTwoPairStatus }: PairState,
  { playerOneStraightState, playerTwoStraightState }: StraightState,
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand
): string => {
  if (
    playerOnePairStatus === "Four of a kind" &&
    playerTwoPairStatus !== "Four of a kind"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus === "Four of a kind" &&
    playerOnePairStatus !== "Four of a kind"
  ) {
    return "Player Two wins";
  } else if (
    playerOnePairStatus === "Full house" &&
    playerTwoPairStatus !== "Full house"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus === "Full house" &&
    playerOnePairStatus !== "Full house"
  ) {
    return "Player Two wins";
  } else if (playerOneStraightState && !playerTwoStraightState) {
    return "Player One wins";
  } else if (playerTwoStraightState && !playerOneStraightState) {
    return "Player Two wins";
  } else if (
    playerOnePairStatus === "Three of a kind" &&
    playerTwoPairStatus !== "Three of a kind"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus === "Three of a kind" &&
    playerOnePairStatus !== "Three of a kind"
  ) {
    return "Player Two wins";
  } else if (
    playerOnePairStatus === "Two Pair" &&
    playerTwoPairStatus !== "Two Pair"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus === "Two Pair" &&
    playerOnePairStatus !== "Two Pair"
  ) {
    return "Player Two wins";
  } else if (playerOnePairStatus === "Pair" && playerTwoPairStatus !== "Pair") {
    return "Player One wins";
  } else if (playerTwoPairStatus === "Pair" && playerOnePairStatus !== "Pair") {
    return "Player Two wins";
  } else {
    const playerOneHighCard = playerOneValues.sort((a: any, b: any) => {
      return a - b;
    });
    const playerTwoHighCard = playerTwoValues.sort((a: any, b: any) => {
      return a - b;
    });
    const playerOneMAx = playerOneHighCard[playerOneValues.length - 1];
    const playerTwoMAx = playerTwoHighCard[playerTwoValues.length - 1];
    if (playerOneMAx && playerTwoMAx) {
      if (playerOneMAx > playerTwoMAx) {
        return "Player One wins";
      } else if (playerOneMAx < playerTwoMAx) {
        return "Player Two wins";
      } else {
        return "none";
      }
    } else {
      return "none";
    }
  }
};
