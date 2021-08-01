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

  //I start chaking for winner hand from highest ods to the lowest (High Card) and returning an string from each condition.
  //So as soon as the highest hand is find the functions returns the winner and will not compering the rest of conditions.
  //Using this dicending approch I help time complexity of the programm.
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
      //This condition is to double check we have a return for the function.
      return "Target Undefined!!!!!!!!!!";
    }
  }
  //Checking for the second heighest hand "Full house".
  //In dublication check function I have finds hands that contains one Pair and a Three of A Kind.
  //And tag the hand with the values making the hand.
  //Now I only have to compare players hands.

  //Who has the highest "Full house" wins.
  else if (
    playerOnePairStatus.lable === "Full house" &&
    playerTwoPairStatus.lable !== "Full house"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Full house" &&
    playerOnePairStatus.lable !== "Full house"
  ) {
    return "Player Two wins";
  }
  //If both players have "Full house" the value that making thier "Full house"
  //Sets the winner.
  //So I have to comper the value that makes the "Full house" between two players.
  else if (
    playerTwoPairStatus.lable === "Full house" &&
    playerOnePairStatus.lable === "Full house"
  ) {
    if (
      playerOnePairStatus.hand[0].value &&
      playerTwoPairStatus.hand[0].value &&
      playerOnePairStatus.hand[1].value &&
      playerTwoPairStatus.hand[1].value
    ) {
      //If the value making a "Full house" for player two is bigger so player two wins.
      if (
        playerOnePairStatus.hand[0].value > playerTwoPairStatus.hand[0].value
      ) {
        return "Player One wins";
      } else if (
        playerOnePairStatus.hand[0].value < playerTwoPairStatus.hand[0].value
      ) {
        return "Player Two wins";
      }
      //If the first value making the Pair was tie we have to check for the second value.
      else if (
        playerOnePairStatus.hand[1].value > playerTwoPairStatus.hand[1].value
      ) {
        return "Player One wins";
      } else if (
        playerOnePairStatus.hand[1].value < playerTwoPairStatus.hand[1].value
      ) {
        return "Player Two wins";
      } else {
        //We do not have to check for tie because we only have four simular values in a deck of card.
        //That could be relevent if we had more than one deck.

        //This condition is to double check we have a return for the function.
        return "Undefiend!!!!!!!!!!!";
      }
    } else {
      //This condition is to double check we have a return for the function.
      return "Target Undefined!!!!!!!!!!";
    }
  }
  //Next strung hand would be straight that i have highlight the winner with two strings.
  //Each player has a boolean that communicates if they have straight.
  //True means the players has a straght false mean the player dose not have a straight.
  else if (playerOneStraightState && !playerTwoStraightState) {
    return "Player One wins";
  } else if (playerTwoStraightState && !playerOneStraightState) {
    return "Player Two wins";
  }
  //Next strung hand would be straight that i have highlight the winner with two strings.
  //Each player has a String that communicates if they have Three of a kind.
  else if (
    playerOnePairStatus.lable === "Three of a kind" &&
    playerTwoPairStatus.lable !== "Three of a kind"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Three of a kind" &&
    playerOnePairStatus.lable !== "Three of a kind"
  ) {
    return "Player Two wins";
  }
  //If both players have "Three of a kind" the value that making thier "Three of a kind"
  //Sets the winner.
  else if (
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
      } else {
        //We do not have to check for tie because we only have four simular values in a deck of card.
        //That could be relevent if we had more than one deck.

        //This condition is to double check we have a return for the function.
        return "Undefiend!!!!!!!!!!!";
      }
    } else {
      //This condition is to double check we have a return for the function.
      return "Target Undefined!!!!!!!!!!";
    }
  }
  //Next strung hand would be Two Pairs that i have highlight the winner with two Strings.
  else if (
    playerOnePairStatus.lable === "Two Pair" &&
    playerTwoPairStatus.lable !== "Two Pair"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Two Pair" &&
    playerOnePairStatus.lable !== "Two Pair"
  ) {
    return "Player Two wins";
  }
  //If both players have "Two Pairs" the value that making thier "Two pairs"
  //Sets the winner.
  else if (
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
      }
      //Here is the fun part. 😇
      //What if the heigh cards are even.
      //We have to iterate through all values in the hand from largest to smallest and
      //compare the values.
      //Player hands are sorted so it is easier to compare them.
      //And the first biggest cuts the function.
      //Time complexity again. 😉
      else if (
        playerOnePairStatus.hand[0].value === playerTwoPairStatus.hand[0].value
      ) {
        return highCardCheck(playerOneValues, playerTwoValues);
      } else {
        return "Undefiend!!!!!!!!!!!";
      }
    } else {
      return "Target Undefined!!!!!!!!!!";
    }
  }
  //If both players have "Pairs" the value that making thier "pairs"
  else if (
    playerOnePairStatus.lable === "Pair" &&
    playerTwoPairStatus.lable !== "Pair"
  ) {
    return "Player One wins";
  } else if (
    playerTwoPairStatus.lable === "Pair" &&
    playerOnePairStatus.lable !== "Pair"
  ) {
    return "Player Two wins";
  }
  //If both players have "Pairs" the value that making thier "Pairs"
  //Sets the winner.
  else if (
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
      }
      //Here is the fun part. 😇
      //What if the heigh cards are even.
      //We have to iterate through all values in the hand from largest to smallest and
      //compare the values.
      //Player hands are sorted so it is easier to compare them.
      //And the first biggest cuts the function.
      //Time complexity again. 😉
      else if (
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
    //We have to iterate through all values in the hand from largest to smallest and
    //compare the values.
    //Player hands are sorted so it is easier to compare them.
    //And the first biggest cuts the function.
    //Time complexity again. 😉
    return highCardCheck(playerOneValues, playerTwoValues);
  }
};


//This function looks at all values in each players hand and compare their heigh cards. 
const highCardCheck = (

  //Reciving players hands.
  //Hands are sorted from small to big so index[0]=smallest and index[data.length-1]=largest.
  playerOneValues: (string | number)[],
  playerTwoValues: (string | number)[]
): string => {
  //A visitor boolean value to stop the while function as soon as the winner is located.
  let visitor: boolean = false;
  //A counter variable to keep track of index.
  let count: number = 5;

  //Looping through the hands to comper their values.
  //Loop continues till eather a winner has fined or we reached the end of arrays.
  while (!visitor && count >= 0) {
    //If the index value of player one hand is heigher than player two player one wins.
    if (playerOneValues[count] > playerTwoValues[count]) {
      visitor = true;
      return "Player One wins";
    } 
    //Else If the index value of player Two hand is heigher than player two player Two wins.
    else if (playerOneValues[count] < playerTwoValues[count]) {
      visitor = true;
      return "Player Two wins";
    } 
    //Else we have to look at the next index.
    else {
      count--;
    }
  }
  return "none";
};
