import {comperingValues, Hand, Player} from './types'

import {checkDublications} from './checkDublications'
import {checkForStraight} from './CheckForStraight'
import {checkForFlush} from './checkForFlush'

export class PlayerClass{
    hand: Hand;
    index: number;
    rank: number;
    rankValue: comperingValues[];
    constructor(hand: Hand,index: number){
        this.hand=hand,
        this.index=index,
        this.rank=-1;
        this.rankValue=[];
    }
    run(): Player{
    this.hand.values=this.sortPlayersHand(this.hand)
    const checkHandsDunlications= checkDublications(this.hand);
    this.rank=checkHandsDunlications.rank;
    this.rankValue=checkHandsDunlications.value;
    if(this.rank === -1) this.rank= checkForStraight(this.hand.values);
    if(this.rank === -1) this.rank= checkForFlush(this.hand);
    return this
    }
    sortPlayersHand({values}: Hand): (string | number)[]{
        return values.sort((a: any,b: any)=>{
            return a-b;
        })
    }
    showTheTestResults(){
        this.rank===-1 && console.log(this.rank);
    }
}