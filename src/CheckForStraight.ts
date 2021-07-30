//Importing the array type to be used as arrgument type control.
import { Hand, PairState } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkForStraight = (
  //Deconstructing the arguments for an easier access in the code.
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand,
  //Receiving players Pair status to check if they have pairs that are not eligible for this section.
  { playerOnePairStatus, playerTwoPairStatus }: PairState
) => {
  let playerOne: (string | number | null)[] = [null];
  let playerTwo: (string | number | null)[] = [null];

  if (playerOnePairStatus === "none") playerOne = playerOneValues.sort();
  if (playerTwoPairStatus === "none") playerTwo = playerTwoValues.sort();

  const playerOneStraightState = checkForConsecutive(playerTwo);
  console.log(playerOneStraightState, playerTwo);
};

const checkForConsecutive = (data: any): boolean => {
  if (data !== null) {
    let i: number = 0;
    let d = null;
    let check = true;
    while (i < data.length) {
      d = data[i + 1] - data[i];
      if (
        d !== 1 &&
        typeof data[i + 1] === "number" &&
        typeof data[i] === "number"
      )
        check = false;
      i++;
    }
    return check;
  }
  return false
};
