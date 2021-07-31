//Importing the array type to be used as arrgument type control.
import { Hand, PairState } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkForFlush = (
  //Deconstructing the arguments for an easier access in the code.
  { suits: playerOnelables }: Hand,
  { suits: playerTwolables }: Hand,
) => {
    // console.log(playerOnelables);
    
}