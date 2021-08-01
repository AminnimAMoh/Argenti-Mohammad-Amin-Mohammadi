//In this file I am judging the hands to find the winner of each hand.
//Challange was high cards. 😆
//Importing types from the type file to make sure all arguments pass the type check.
import { PairState, StraightState, Hand } from "./types";

export const judgeHandsAndFindTheWinner = (
  //For this function I need to have access to the result of all functions before ran before it.
  //Using argument diconstruction I can make argument calls easier and more clear.
  //All arguments are type checked so if I make a small mistack I will be notified straght away.
  { playerOnePairStatus, playerTwoPairStatus }: PairState,
  { playerOneStraightState, playerTwoStraightState }: StraightState,
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand
): string => {
  //Rest of this file is if conditions to compare players hand status to find the winner.

  //In this section I am looking for the player who has a "Four of a kind".
  //"Four of a kind" is our highest hand because the data dose not contain any Straigt Flush or Royal Flush.
  //This conclusion has made bu considering the fact that is the data dose not contains any Flush the first requairment
  //for Straigt Flush or Royal Flushis is false.
  //So I skiped Straigt Flush or Royal Flush as we have no ods on these two.
  if (
    playerOnePairStatus.lable === "Four of a kind" &&
    playerTwoPairStatus.lable !== "Four of a kind"
  ) {
    //If the Player one has "Four of a kind" on its hand stated on 'playerOnePairStatus'
    //Player one has the highest hand
    return "Player One wins";
  } else if (
    //If the Player Two has "Four of a kind" on its hand stated on 'playerTwoPairStatus'
    //Player Two has the highest hand
    playerTwoPairStatus.lable === "Four of a kind" &&
    playerOnePairStatus.lable !== "Four of a kind"
  ) {
    return "Player Two wins";
  } else if (
    //If both players have "Four of a kind" the value that making thier "Four of a kind"
    //Sets the winner.
    //So I have to comper the value that makes the "Four of a kind" between two players.
    playerOnePairStatus.lable === "Four of a kind" &&
    playerTwoPairStatus.lable === "Four of a kind"
  ) {
    //If the value making the "Four of a kind" is not null we can continue.
    //It is just to satisfy typescript as I have set null on 'comperingValues ' interface. 😝
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value
    ) {
      //If the value making a "Four of a kind" for player one is bigger so player one wins.
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if (
        //If the value making a "Four of a kind" for player two is bigger so player two wins.
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      } else {
        //We do not have to check for tie because we only have four simular values in a deck of card.
        //That could be relevent if we had more than one deck.


        //This condition is to double check we have a return for the function.
        return "Undefiend!!!!!!!!!!!";
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
      } else if (
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      } else if (
        playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value
      ) {
        return highCardCheck(playerOneValues, playerTwoValues);
      } else {
        return "Undefiend!!!!!!!!!!!";
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
      } else if (
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      } else if (
        playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value
      ) {
        return highCardCheck(playerOneValues, playerTwoValues);
      } else {
        return "Undefiend!!!!!!!!!!!";
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
      } else if (
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      } else if (
        playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value
      ) {
        return highCardCheck(playerOneValues, playerTwoValues);
      } else {
        return "Undefiend!!!!!!!!!!!";
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
      } else if (
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      } else if (
        playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value
      ) {
        return highCardCheck(playerOneValues, playerTwoValues);
      } else {
        return "Undefiend!!!!!!!!!!!";
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  } else {
    return highCardCheck(playerOneValues, playerTwoValues);
  }
};

const highCardCheck = (
  playerOneValues: (string | number)[],
  playerTwoValues: (string | number)[]
): string => {
  let visitor: boolean = false;
  let count: number = 5;
  while (!visitor && count >= 0) {
    if (playerOneValues[count] > playerTwoValues[count]) {
      visitor = true;
      return "Player One wins";
    } else if (playerOneValues[count] < playerTwoValues[count]) {
      visitor = true;
      return "Player Two wins";
    } else {
      count--;
    }
  }
  return "none";
};
