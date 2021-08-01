//Creating a new type to controle the type of the values in the arrays.

//All arguments are type checked so if I make a small mistack I will be notified straght away.
//This is very important for mentainable programs.

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