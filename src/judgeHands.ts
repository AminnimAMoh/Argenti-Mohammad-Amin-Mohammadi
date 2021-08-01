import { PairState, StraightState, Hand } from "./types";

export const judgeHandsAndFindTheWinner = (
  { playerOnePairStatus, playerTwoPairStatus }: PairState,
  { playerOneStraightState, playerTwoStraightState }: StraightState,
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand
): string => {
  const playerOneHighCard = playerOneValues.sort((a: any, b: any) => {
    return a - b;
  });
  const playerTwoHighCard = playerTwoValues.sort((a: any, b: any) => {
    return a - b;
  });
  const playerOneMAx = playerOneHighCard[playerOneValues.length - 1];
  const playerTwoMAx = playerTwoHighCard[playerTwoValues.length - 1];

  if (
    playerOnePairStatus.lable === "Four of a kind" &&
    playerTwoPairStatus.lable !== "Four of a kind"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Four of a kind" &&
    playerOnePairStatus.lable !== "Four of a kind"
  ) {
    return "Player Two wins";
  } else if (
    playerOnePairStatus.lable === "Four of a kind" &&
    playerTwoPairStatus.lable === "Four of a kind"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if(playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value){
        return "Player Two wins";
      }else if(playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value){
        return highCardCheck(playerOneValues, playerTwoValues)
      }else{
        return 'Undefiend!!!!!!!!!!!'
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else if (
    playerOnePairStatus.lable === "Full house" &&
    playerTwoPairStatus.lable !== "Full house"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Full house" &&
    playerOnePairStatus.lable !== "Full house"
  ) {
    return "Player Two wins";
  } else if (
    playerTwoPairStatus.lable === "Full house" &&
    playerOnePairStatus.lable === "Full house"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if(playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value){
        return "Player Two wins";
      }else if(playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value){
        return highCardCheck(playerOneValues, playerTwoValues)
      }else{
        return 'Undefiend!!!!!!!!!!!'
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else if (playerOneStraightState && !playerTwoStraightState) {
    return "Player One wins";
  } else if (playerTwoStraightState && !playerOneStraightState) {
    return "Player Two wins";
  } else if (
    playerOnePairStatus.lable === "Three of a kind" &&
    playerTwoPairStatus.lable !== "Three of a kind"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Three of a kind" &&
    playerOnePairStatus.lable !== "Three of a kind"
  ) {
    return "Player Two wins";
  } else if (
    playerTwoPairStatus.lable === "Three of a kind" &&
    playerOnePairStatus.lable === "Three of a kind"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if(playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value){
        return "Player Two wins";
      }else if(playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value){
        return highCardCheck(playerOneValues, playerTwoValues)
      }else{
        return 'Undefiend!!!!!!!!!!!'
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else if (
    playerOnePairStatus.lable === "Two Pair" &&
    playerTwoPairStatus.lable !== "Two Pair"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Two Pair" &&
    playerOnePairStatus.lable !== "Two Pair"
  ) {
    return "Player Two wins";
  } else if (
    playerTwoPairStatus.lable === "Two Pair" &&
    playerOnePairStatus.lable === "Two Pair"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if(playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value){
        return "Player Two wins";
      }else if(playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value){
        return highCardCheck(playerOneValues, playerTwoValues)
      }else{
        return 'Undefiend!!!!!!!!!!!'
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else if (
    playerOnePairStatus.lable === "Pair" &&
    playerTwoPairStatus.lable !== "Pair"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Pair" &&
    playerOnePairStatus.lable !== "Pair"
  ) {
    return "Player Two wins";
  } else if (
    playerTwoPairStatus.lable === "Pair" &&
    playerOnePairStatus.lable === "Pair"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if(playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value){
        return "Player Two wins";
      }else if(playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value){
        return highCardCheck(playerOneValues, playerTwoValues)
      }else{
        return 'Undefiend!!!!!!!!!!!'
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else {
    return highCardCheck(playerOneValues, playerTwoValues)
  }
};

const highCardCheck=(playerOneValues: (string | number)[] , playerTwoValues:(string | number)[]): string=>{
  let visitor: boolean = false;
  let count: number = 5;
  while (!visitor && count >= 0) {
    if (playerOneValues[count] > playerTwoValues[count]) {
      visitor = true;
      return "Player One wins";
    }else if (playerOneValues[count] < playerTwoValues[count]) {
      visitor = true;
      return "Player Two wins";
    }else{
      count--;
    }
  }
  return 'none'
}
