//Importing the array type to be used as arrgument type control.
import { Hand, PairState, StraightState } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkForStraight = (
  //Deconstructing the arguments for an easier access in the code.
  { values: playerOneValues }: Hand,
  { values: playerTwoValues }: Hand,
  //Receiving players Pair status to check if they have pairs that are not eligible for this section.
  { playerOnePairStatus, playerTwoPairStatus }: PairState
): StraightState => {
  //Two arrays for reserving the sorted arrays
  let playerOne: (string | number | null)[] = [null];
  let playerTwo: (string | number | null)[] = [null];

  //Sorting hands
  playerOne = playerOneValues.sort((a: any, b: any) => {
    return a - b;
  });
  playerTwo = playerTwoValues.sort((a: any, b: any) => {
    return a - b;
  });

  //Cheking for Consecutive hands
  let playerOneStraightState = false;
  let playerTwoStraightState = false;

  //By checking pair status of each player hand we can narrow the number of hands
  //To be iterated. Because if there is any dublication that mean we cannot have Consecutive of 5.
  if (playerOnePairStatus === "none")
    playerOneStraightState = checkForConsecutive(playerOne);
  if (playerTwoPairStatus === "none")
    playerTwoStraightState = checkForConsecutive(playerTwo);
  //The iterations showed there is only one hand with 5 Consecutive: Player Two  [ 4, 5, 6, 7, 8 ]

  return {
    playerOneStraightState: playerOneStraightState,
    playerTwoStraightState: playerTwoStraightState,
  };
};

const checkForConsecutive = (data: any): boolean => {
  //This is the quickest way I could think of to check if an array values are Consecutive.
  //I have recived a sorted array from small to large.
  //So the very first index is the min of the array and the last index is the largest.
  const min = +data[0];
  const max = +data[data.length - 1];
  //If we calculate the distance between min and max of the array in Consecutive array
  //distance must be data.length-1.
  //for example in array [2,3,4,5,6] min is 2 and max 6
  //and 6-2=4 and the same for [3,4,5,6,7] 3-7=4.
  const distance = max - min;

  //So if the distance between min and max is grater than data.length-1 the array is not Consecutive
  //So we return false
  if (distance > data.length - 1) {
    return false;
  } else {
    return true;
  }
};
