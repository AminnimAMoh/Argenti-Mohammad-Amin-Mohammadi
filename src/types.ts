//Creating a new type to controle the type of the values in the arrays.
export interface Hand {
  //I decide to set the values to two possible types as they
  //eather can be string for "King, Queen, Solder" and numbers.
  values: Array<number | string | null>;
  suits: Array<string | null>;
}

export interface comperingValues {
  lable: string | null;
  value: number | string | null;
}

export interface PairState{
  playerOnePairStatus: string,
  playerTwoPairStatus: string
}
