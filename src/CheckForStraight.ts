//Importing the array type to be used as arrgument type control.
import { Hand, PairState, StraightState } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkForStraight = (
  //Deconstructing the arguments for an easier access in the code.
  sortedHandValueArray: (string | number)[]
): number => {
  //By checking pair status of each player hand we can narrow the number of hands
  //To be iterated. Because if there is any dublication that mean we cannot have Consecutive of 5.
  const playerOneStraightState = checkForConsecutiveness(sortedHandValueArray);
  //The iterations showed there is only one hand with 5 Consecutive: Player Two  [ 4, 5, 6, 7, 8 ]
  
  return playerOneStraightState;
};

const checkForConsecutiveness = (data: any): number => {
  //This is the quickest way I could think of to check if an array values are Consecutive.
  //I have recived a sorted array from small to large.
  //So the very first index is the min of the array and the last index is the largest.
  //If we calculate the distance between min and max of the array in Consecutive array
  //distance must be data.length-1.
  //for example in array [2,3,4,5,6] min is 2 and max 6
  //and 6-2=4 and the same for [3,4,5,6,7] 3-7=4.
  const min = +data[0];
  const max = +data[data.length - 1];
  const distance = max - min;
  if (distance > data.length - 1) {
    return -1;
  } else {
    return 5;
  }
};
