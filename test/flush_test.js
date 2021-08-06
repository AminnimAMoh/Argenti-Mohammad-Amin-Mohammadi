const expect=require('chai').expect;

describe('Flush check method', ()=>{
    const checkForFlush=require('../dist/checkForFlush').checkForFlush;
    it('Should correctly report players hand is NOT a flush.', ()=>{
        const hand={values: [], suits: ['D', 'C', 'H', 'H', 'H']};
        expect(checkForFlush(hand)).to.be.equal(-1)
    })
    it('Should correctly report players hand is a flush.', ()=>{
        const hand={values: [], suits: ['H', 'H', 'H', 'H', 'H']};
        expect(checkForFlush(hand)).to.be.equal(6)
    })
})