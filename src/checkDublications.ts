//Importing the array type to be used as arrgument type control.
import { Hand } from "./types";
interface comperingValues {
  lable: string | null;
  value: number | string | null;
}
//using this function we can make decisions on hands and comper them. 😀
export const checkDublications = (
  //Deconstructing the arguments for an easier access in the code.
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand
) => {
  //Sending each player hand to 'lookForSimularities' to find dublications.
  //This function helps us to find Pairs, Three Pairs, and Two Pairs
  //Each user's dublication will be saved in an array for all hands.
  //Then we can comper two players using these arrays.
  const playerOneSimularValues: comperingValues[] = lookForSimularities(
    playerOneValues
  ).filter(({ value }) => {
    return value !== null;
  });
  const playerTwoSimularValues: comperingValues[] = lookForSimularities(
    playerTwoValues
  ).filter(({ value }) => {
    return value !== null;
  });

  const checkForTwoPair =
    playerOneSimularValues.length < playerTwoSimularValues.length
      ? "Player Two Wins"
      : playerOneSimularValues.length > playerTwoSimularValues.length
      ? "Player One Wins"
      : playerOneSimularValues.length === playerTwoSimularValues.length
      ? "Check Values"
      : "None";

  const checkForThreePairs =
    checkForTwoPair === "Check Values"
      ? playerOneSimularValues
          .map(({ lable }) => lable === "Three of a kind")
          .includes(true) &&
        playerTwoSimularValues
          .map(({ lable }) => lable === "Three of a kind")
          .includes(false)
        ? "Player One Wins"
        : playerOneSimularValues
            .map(({ lable }) => lable === "Three of a kind")
            .includes(false) &&
          playerTwoSimularValues
            .map(({ lable }) => lable === "Three of a kind")
            .includes(true)
        ? "Player Two wins"
        : playerOneSimularValues
        .map(({ lable }) => lable === "Three of a kind")
        .includes(true) &&
      playerTwoSimularValues
        .map(({ lable }) => lable === "Three of a kind")
        .includes(true)
        ? "Draw": "look for something else"
      : "";
  // let playerOneOds =
  //   playerOneSimularValues.length > 0 &&
  //   playerOneSimularValues.map(({ lable, value }) => {
  //     return { lable: lable, value: value };
  //   });
  // let playerTwoOds =
  //   playerTwoSimularValues.length > 0 &&
  //   playerTwoSimularValues.map(({ lable, value }) => {
  //     if (lable !== null) return { lable: lable, value: value };
  //   });

  console.log(checkForThreePairs);
};

const lookForSimularities = (
  //The type for the arguments as strenge it is. 😃
  data: (string | number | null)[]
): comperingValues[] => {
  //Constructing an array of objects to be able to fill as many Pairs requared.
  //It is an array for the setuation if a user has two pairs or Full house
  let handSimularities: comperingValues[] = [{ lable: null, value: null }];

  //Iterating through the all values of the hands and compering each to the rest of the hand.
  data.map((valueToComper: string | number | null, topIndex) => {
    //A int variable to keep track of dublications.
    let count: number = 0;
    data.map((allValues: string | number | null, lowIndex) => {
      //This boolean is to check if the value making a pair is exist in our array or not.
      //If this boolean keeps its state we can conclude that there is a new pair.
      let dublication: boolean = false;

      //This condition checks if the value been checked is not checked with it self.
      //And if its value is equal to any other value in its array.
      if (topIndex !== lowIndex && valueToComper === allValues) {
        //Here I am checking if the dublication find is recorded in the 'handSimularities' array?
        //If it is not recorded we can add to its count.
        handSimularities.map(({ value }) => {
          if (value !== null && value === valueToComper) dublication = true;
        });
        !dublication && count++;
      }
    });

    //If the count value is 1 it means we have a new pair and we add it to the 'handSimularities' with its value.
    //And if the count value is 2 it means we have a Three of a kind and we add it to the 'handSimularities' with its value.
    //Otherwise it will return an null object.
    count === 1
      ? handSimularities.push({ lable: "Pair", value: valueToComper })
      : count === 2
      ? handSimularities.push({
          lable: "Three of a kind",
          value: valueToComper,
        })
      : null;
  });

  //At the end we return all these information to the responsible object
  return handSimularities;
};
