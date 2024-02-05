import { ColorPair } from "./colorPair.js";
export class EvenCountColorCode {
    MajorColorNames = [
        "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
    ];
    MinorColorNames = [
        "BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
    ];
    COLOR_PAIRS = {}
    COLOR_PAIRS_KEY_VALUE_REVERSED = {}

    constructor(){
        let minorColorSize = this.MinorColorNames.length
        let majorColorSize = this.MajorColorNames.length
        for (let i = 0; i < majorColorSize; i++){
            for (let j = 0; j < minorColorSize; j++){
                this.COLOR_PAIRS[(i*majorColorSize)+(j + 1)] = [this.MajorColorNames[i],this.MinorColorNames[j]]
                this.COLOR_PAIRS_KEY_VALUE_REVERSED[[this.MajorColorNames[i],this.MinorColorNames[j]]] = (i*majorColorSize)+(j + 1)
            }
        }
    }
    getManual = ()=>{
        let manualTemplate = "COLOR PAIR - MANUAL\n";
        Object.keys(this.COLOR_PAIRS).forEach(key => {
            manualTemplate += `Pair No: ${key} => [MajorColor: ${this.COLOR_PAIRS[key][0]}, MinorColor: ${this.COLOR_PAIRS[key][1]}]\n`
        })
        return manualTemplate
    };
    getColorFromPairNumber = (pairNumber) => {
        if(pairNumber>(this.MajorColorNames.length*this.MinorColorNames.length) || pairNumber<1) {
            throw `Argument PairNumber:${pairNumber} is outside the allowed range`
        }
        const pair_in_list = this.COLOR_PAIRS[pairNumber]
        return new ColorPair(pair_in_list[0], pair_in_list[1])
    }
    getPairNumberFromColor = (pair) => {
        const pairnum = this.COLOR_PAIRS_KEY_VALUE_REVERSED[[pair.majorColor,pair.minorColor]]
        if(pairnum == undefined){
            throw `${pair} combination does not exist`
        }
        else
        return this.COLOR_PAIRS_KEY_VALUE_REVERSED[[pair.majorColor,pair.minorColor]]
    }
}
