//Creating a new type to controle the type of the values in the arrays.
export interface Hand {
  values: Array<number | string | null>;
  suits: Array<string | null>;
}