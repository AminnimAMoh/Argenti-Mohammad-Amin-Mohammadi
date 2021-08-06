const expect = require("chai").expect;

describe("Heigh Card check", () => {
  const highCardCheck = require("../dist/highCardCheck").highCardCheck;
  it("Should correctly report Player 1 hand wins because the haigh card is heigher than Player 2.", () => {
    const playerOneHand = { hand: { values: [2, 5, 10, 13, 14] } };
    const playerTwoHand = { hand: { values: [2, 5, 10, 6, 13] } };
    expect(highCardCheck(playerOneHand, playerTwoHand)).to.be.deep.equal({playerOneWins: 1, playerTwoWins: 0});
  });
  it("Should correctly report Player 2 hand wins because the haigh card is heigher than Player 1.", () => {
    const playerOneHand = { hand: { values: [2, 6, 2, 3, 4] } };
    const playerTwoHand = { hand: { values: [2, 7, 2, 3, 4] } };
    expect(highCardCheck(playerOneHand, playerTwoHand)).to.be.deep.equal({playerOneWins: 0, playerTwoWins: 1});
  });
});
