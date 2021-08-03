//Creating a new type to controle the type of the values in the arrays.

//All arguments are type checked so if I make a small mistack I will be notified straght away.
//This is very important for mentainable programs.

export interface Hand {
  //I decide to set the values to two possible types as they
  //eather can be string for "King, Queen, Solder" and numbers.
  values: (number | string)[];
  suits: string [];
}

export interface Player{
  hand: Hand,
  index: number,
  rank: number,
  rankValue: comperingValues[],
  run: Function
}

//This interface handle types for hands in process of look For Simularities.
export interface comperingValues {
  lable: string | null;
  value: number | string | null;
}

//This interface handle types for hands dublication check state.
export interface PairState{
  //Each player must have a lable for the Pair hand and the value/values making the pairs
  playerOnePairStatus: {
    lable: string,
    hand: comperingValues[],
  },
  playerTwoPairStatus: {
    lable: string,
    hand: comperingValues[]
  }
}

//This interface handle types for hands straight hands.
export interface StraightState{
  playerOneStraightState: boolean,
  playerTwoStraightState: boolean
}

// This interface handle types for flush hands.
export interface FlushState{
  playerOneFlushState: boolean,
  playerTwoFlushState: boolean
}