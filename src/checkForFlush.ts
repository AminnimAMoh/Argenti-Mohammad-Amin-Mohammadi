//Importing the array type to be used as arrgument type control.
import { Hand } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const checkForFlush = (
  //Deconstructing the arguments for an easier access in the code.
  { suits: playerOnelables }: Hand,
  rank: number
): number => {
  //Using filterfunction on both hands and returning the all suits simular to first suit in the array.
  const playerOneFlushCheck = playerOnelables.filter((d) => {
    if (d === playerOnelables[0]) return d;
  });
  
  //If the length of the filtered array was equal to 5 it means that hand is flush (all suits are simular).
  const playerOneFlushState =
    playerOneFlushCheck.length === 5 ? (rank === 5 ? 9 : 6) : (rank!==5 ? -1 : 5);

  return playerOneFlushState;
};
