//Importing the array type to be used as arrgument type control.
import { Hand, comperingValues, PairState } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkDublications = (
  //Deconstructing the arguments for an easier access in the code.
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand
): PairState => {
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
  
  //Sneding each player's sorted hand to 'playerThreeOfAKind' to tag them with their
  //status regarding hand dublications.
  const playerOnePairStatus = {lable: playerThreeOfAKind(playerOneSimularValues), hand: playerOneSimularValues};
  const playerTwoPairStatus = {lable: playerThreeOfAKind(playerTwoSimularValues), hand: playerTwoSimularValues};
  if(playerOnePairStatus.lable==='Full house') console.log(playerOneSimularValues);
  
  return {playerOnePairStatus: playerOnePairStatus, playerTwoPairStatus: playerTwoPairStatus}
};

//Sneding each player's sorted hand to 'playerThreeOfAKind' to tag them with their
//status regarding hand dublications.
const playerThreeOfAKind = (data: comperingValues[]): string => {
  
  //Maping through the data and looking if it contains "Three of a kind".
  const fourOfAKind = data
  .map(({ lable }) => {
    return lable === "Four of a kind";
  })
  .includes(true)

  const threeOfAKind = data
    .map(({ lable }) => {
      return lable === "Three of a kind";
    })
    .includes(true);

  //Maping through the data and looking if it contains "Pair".
  const pair = data
    .map(({ lable }) => {
      return lable === "Pair";
    })
    .includes(true);

  //Condition to set the status.
  const state =
    threeOfAKind && pair
      ? "Full house"
      : threeOfAKind && !pair
      ? "Three of a kind"
      : !threeOfAKind && pair && data.length > 1
      ? "Two Pair"
      : !threeOfAKind && pair
      ? "Pair"
      : fourOfAKind
      ? "Four of a kind"
      : "none";

  // return {lable: state, value: data.value};
  return state
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
        :count === 2
        ? handSimularities.push({
          lable: "Four of a kind",
          value: valueToComper,
        })
      : null;
  });

  //At the end we return all these information to the responsible object
  return handSimularities;
};
