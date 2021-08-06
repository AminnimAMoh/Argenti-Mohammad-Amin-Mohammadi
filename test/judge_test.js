const expect=require('chai').expect;

describe('Judgment method', ()=>{
    const judgeHandsAndFindTheWinner=require('../dist/judgeHands').judgeHandsAndFindTheWinner

    it('Should correctly report Player 1 Wins with pair 2 hand.', ()=>{
        const playerOne={
            hand: {
                values: [2,2,3,4,5],
                suits: ['D', 'H', 'D', 'H', 'C']
            },
            index:1,
            rank: 2,
            rankValue: [{lable: 'Pair', value: 2}]
        }
        const playerTwo={
            hand: {
                values: [2,10,4,8,7],
                suits: ['D', 'H', 'D', 'H', 'C']
            },
            index:2,
            rank: -1,
            rankValue: []
        }
        expect(judgeHandsAndFindTheWinner(playerOne, playerTwo)).to.be.deep.equal({playerOneWins: 1, playerTwoWins: 0})
    })
    it('Should correctly report Player 2 Wins with straight hand.', ()=>{
        const playerOne={
            hand: {
                values: [2,2,3,4,5],
                suits: ['D', 'H', 'D', 'H', 'C']
            },
            index:1,
            rank: 2,
            rankValue: [{lable: 'Pair', value: 2}]
        }
        const playerTwo={
            hand: {
                values: [8,7,5,6,9],
                suits: ['D', 'H', 'D', 'H', 'C']
            },
            index:2,
            rank: 5,
            rankValue: []
        }
        expect(judgeHandsAndFindTheWinner(playerOne, playerTwo)).to.be.deep.equal({playerOneWins: 0, playerTwoWins: 1})
    })
    it('Should correctly report Player 1 Wins with Flush hand.', ()=>{
        const playerOne={
            hand: {
                values: [2,10,3,4,5],
                suits: ['H', 'H', 'H', 'H', 'H']
            },
            index:1,
            rank: 6,
            rankValue: []
        }
        const playerTwo={
            hand: {
                values: [8,7,5,6,9],
                suits: ['D', 'H', 'D', 'H', 'C']
            },
            index:2,
            rank: 5,
            rankValue: []
        }
        expect(judgeHandsAndFindTheWinner(playerOne, playerTwo)).to.be.deep.equal({playerOneWins: 1, playerTwoWins: 0})
    })
})