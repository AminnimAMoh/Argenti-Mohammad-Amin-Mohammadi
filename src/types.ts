//Creating a new type to controle the type of the values in the arrays.
export interface Hand {
  //I decide to set the values to two possible types as they
  //eather can be string for "King, Queen, Solder" and numbers.
  values: Array<number | string>;
  suits: Array<string >;
}

export interface comperingValues {
  lable: string | null;
  value: number | string | null;
}

export interface PairState{
  playerOnePairStatus: {
    lable: string,
    hand: comperingValues[],
  },
  playerTwoPairStatus: {
    lable: string,
    hand: comperingValues[]
  }
}

export interface StraightState{
  playerOneStraightState: boolean,
  playerTwoStraightState: boolean
}

export interface FlushState{
  playerOneFlushState: boolean,
  playerTwoFlushState: boolean
}