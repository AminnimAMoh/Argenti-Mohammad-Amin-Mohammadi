//Importing the array type to be used as arrgument type control.
import { Hand } from "./types";

//using this function we can make decisions on hands and comper them. 😀
export const judgeHands = (
  { values: playerOneValues, suits: playerOneSuits }: Hand,
  { values: playerTwoValues, suits: playerTwoSuits }: Hand
) => {
  const playerOneSimularValues=lookForSimularities(playerOneValues);
  console.log(playerOneSimularValues);
};

const lookForSimularities = (data: (string | number | null)[]): string[] => {
    let handSimularities: string[]=[];
  data.map((valueToComper: string | number | null) => {
    let count: number=0;
    data.map((allValues: string | number | null) => {
        valueToComper===allValues && count++;
    });
    count===2 ? handSimularities.push("pairs") : count===3 ? handSimularities.push("Three of a kind") : null
  });
  return handSimularities
};
