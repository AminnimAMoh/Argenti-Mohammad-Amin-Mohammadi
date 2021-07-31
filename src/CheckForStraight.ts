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
  //This is the quickest way I could think of to check if an array values are Consecutive.
  //I have recived a sorted array from small to large.
  //So the very first index is the min of the array and the last index is the largest.
  const min=+data[0];
  const max=+data[data.length-1]
  //If we calculate the distance between min and max of the array in Consecutive array
  //distance must be data.length-1.
  //for example in array [2,3,4,5,6] min is 2 and max 6
  //and 6-2=4 and the same for [3,4,5,6,7] 3-7=4.
  const distance=max-min;
  
  //So if the distance between min and max is grater than data.length-1 the array is not Consecutive
  //So we return false
  if(distance>data.length-1) {return false }else{return true};
};
