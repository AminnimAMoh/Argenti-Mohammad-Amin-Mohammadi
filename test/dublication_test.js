const expect = require("chai").expect;
//9C 9D 8D 7C 3C
describe("Dublication check method", () => {
  const checkDublications =
    require("../dist/checkDublications").checkDublications;
  it("Should correctly report there is no null value in players hands.", () => {
    const hand = { values: [9, 2, 8, 7, 3], suits: [] };
    expect(checkDublications(hand)).to.not.be.a("null");
  });
  it("Should correctly report NO Doublications detected in players given hand.", () => {
    const hand = { values: [9, 2, 8, 7, 3], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: -1,
      value: [],
    });
  });
  it("Should correctly report one pair is detected in players given hand.", () => {
    const hand = { values: [9, 9, 8, 7, 3], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: 2,
      value: [{ lable: "Pair", value: 9 }],
    });
  });
  it("Should correctly report two pair is detected in players given hand.", () => {
    const hand = { values: [9, 9, 8, 8, 3], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: 3,
      value: [
        { lable: "Pair", value: 9 },
        { lable: "Pair", value: 8 },
      ],
    });
  });
  it("Should correctly report Three of a kind is detected in players given hand.", () => {
    const hand = { values: [9, 9, 9, 7, 3], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: 4,
      value: [{ lable: "Three of a kind", value: 9 }],
    });
  });
  it("Should correctly report Full House is detected in players given hand.", () => {
    const hand = { values: [9, 9, 9, 7, 7], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: 7,
      value: [
        { lable: "Three of a kind", value: 9 },
        { lable: "Pair", value: 7 },
      ],
    });
  });
  it("Should correctly report Four of a kind is detected in players given hand.", () => {
    const hand = { values: [9, 9, 9, 9, 3], suits: [] };
    expect(checkDublications(hand)).to.deep.equal({
      rank: 8,
      value: [{ lable: "Four of a kind", value: 9 }],
    });
  });
});
