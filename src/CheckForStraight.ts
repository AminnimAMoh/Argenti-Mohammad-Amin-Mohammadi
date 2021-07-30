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

  //Two arrays for reserving the sorted arrays
  let playerOne: (string | number | null)[] = [null];
  let playerTwo: (string | number | null)[] = [null];

  //Sorting hands
  playerOne = playerOneValues.sort((a: any,b: any)=> {return a - b});
  playerTwo = playerTwoValues.sort((a: any,b: any)=> {return a - b});

  //Cheking for Consecutive hands
  let playerOneStraightState=false; 
  let playerTwoStraightState=false; 
  //The iterations showed there is no Consecutive hand
  if (playerOnePairStatus === "none") playerOneStraightState = checkForConsecutive(playerOne);
  if (playerOnePairStatus === "none") playerTwoStraightState = checkForConsecutive(playerTwo);
};

const checkForConsecutive = (data: any): boolean => {
  //An index to stop the loop at the end of the data array.
    let i: number = 0;
    //d is a variable to save the distance.
    let d = null;
    //A visited boolean to turn false if visited.
    //False would mean the hand is not Consecutive
    let check = true;

    //Breaking out of the loop if index reached the end of the data or the visited variable is false.
    //Breaking the loop helps time complexity a littel as cuting out unnessesary itterations.
    while (i < data.length || !check) {
      //Calculating the distance between two close indexes
      d = data[i + 1] - data[i];
      //if the distance between two numbers is not equal one 
      //that means the hand is not straight.
      //As we have sorted the array we can trust naighbers. 
      if (d !== 1) check = false;

      //Increasing the index
      i++;
    }

    //Returning the visiting variable.
    return check;
};
