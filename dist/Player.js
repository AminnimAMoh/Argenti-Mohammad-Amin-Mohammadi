"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerClass = void 0;
const checkDublications_1 = require("./checkDublications");
const CheckForStraight_1 = require("./CheckForStraight");
const checkForFlush_1 = require("./checkForFlush");
class PlayerClass {
    constructor(hand, index) {
        (this.hand = hand), (this.index = index), (this.rank = -1);
        this.rankValue = [];
    }
    run() {
        this.hand.values = this.sortPlayersHand(this.hand);
        const checkHandsDunlications = checkDublications_1.checkDublications(this.hand);
        this.rank = checkHandsDunlications.rank;
        this.rankValue = this.fullHouseShortening(checkHandsDunlications.value);
        if (this.rank === -1)
            this.rank = CheckForStraight_1.checkForStraight(this.hand.values);
        if (this.rank === -1 || this.rank === 5)
            this.rank = checkForFlush_1.checkForFlush(this.hand, this.rank);
        return this;
    }
    sortPlayersHand({ values }) {
        return values.sort((a, b) => {
            return a - b;
        });
    }
    showTheTestResults() {
        this.rank === -1 && console.log(this.rank);
    }
    fullHouseShortening(rankValue) {
        if (this.rank === 7) {
            const filtering = rankValue.filter((d) => {
                return d.lable === "Three of a kind";
            });
            return filtering;
        }
        else {
            return rankValue;
        }
    }
}
exports.PlayerClass = PlayerClass;
module.exports.PlayerClass = PlayerClass;
