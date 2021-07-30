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

  if (playerOnePairStatus === "none") playerOne = playerOneValues.sort((a: any,b: any)=> {return a - b});
  if (playerTwoPairStatus === "none") playerTwo = playerTwoValues.sort((a: any,b: any)=> {return a - b});

  let playerOneStraightState=false; 
  if (playerOnePairStatus === "none") playerOneStraightState = checkForConsecutive(playerOne);
  playerOneStraightState && console.log(playerOneStraightState,playerOneValues);
};

const checkForConsecutive = (data: any): boolean => {
  if (data !== null) {
    let i: number = 0;
    let d = null;
    let check = true;
    while (i < data.length) {
      d = data[i + 1] - data[i];
      if (d !== 1) check = false;
      i++;
    }
    return check;
  }
  return false
};
