const expect=require('chai').expect;

describe('Straight check method', ()=>{
    const checkForStraight=require('../dist/CheckForStraight').checkForStraight
    it('Should correctly report there is a Straight hand ditected from players hands.', ()=>{
        const sortedHandValueArray=[1,2,3,4,5];
        expect(checkForStraight(sortedHandValueArray)).to.be.equal(5);
    })
    it('Should correctly report there is NOT Straight hand ditected from players hands.', ()=>{
        const sortedHandValueArray=[1,2,3,5,6];
        expect(checkForStraight(sortedHandValueArray)).to.be.equal(-1);
    })
})