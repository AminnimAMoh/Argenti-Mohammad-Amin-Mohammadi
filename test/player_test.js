const expect = require("chai").expect;

//Test suite for player class
describe("Player Class", () => {
  var playerClass = require("../dist/Player.js").PlayerClass;
  it("Should correctly report the ods for a player hand as Low", () => {
    const hand = { values: [2, 3, 4, 10, 6], suits: ["D", "D", "D", "H", "C"] };
    const expectedResult = {
      hand: hand,
      index: 1,
      rank: -1,
      rankValue: [],
    };
    expect(new playerClass(hand, 1).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as pair of 3.", () => {
    const hand = { values: [3, 10, 3, 6, 2], suits: [] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 2,
      rankValue: [{ lable: "Pair", value: 3 }],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Two Pair of 3 and 10.", () => {
    const hand = { values: [3, 10, 3, 10, 2], suits: [] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 3,
      rankValue: [{ lable: "Pair", value: 3 }, { lable: "Pair", value: 10 }],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Three of a Kind 3.", () => {
    const hand = { values: [3, 3, 3, 6, 2], suits: [] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 4,
      rankValue: [{ lable: "Three of a kind", value: 3 }],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Straight.", () => {
    const hand = { values: [2, 5, 4, 3, 6], suits: [] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 5,
      rankValue: [],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Flush.", () => {
    const hand = { values: [4, 10, 2, 6, 12], suits: ["H", "H", "H", "H", "H"] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 6,
      rankValue: [],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Full House.", () => {
    const hand = { values: [4, 4, 4, 6, 6], suits: ["D", "H", "C", "C", "D"] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 7,
      rankValue: [{lable: 'Three of a kind', value:4}],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Four of A Kind 3.", () => {
    const hand = { values: [3, 3, 3, 3, 2], suits: [] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 8,
      rankValue: [{ lable: "Four of a kind", value: 3 }],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
  it("Should correctly report the ods for a player hand as Straight Flush.", () => {
    const hand = { values: [2, 5, 4, 3, 6], suits: ["D", "D", "D", "D", "D"] };
    const expectedResult = {
      hand: hand,
      index: 2,
      rank: 9,
      rankValue: [],
    };
    expect(new playerClass(hand, 2).run()).to.be.deep.equal(expectedResult);
  });
});
