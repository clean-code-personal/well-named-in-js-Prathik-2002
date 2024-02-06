import { ColorPair } from "./colorPair.js";
export class EvenCountColorCode {
    MajorColorNames = [
        "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
    ];
    MinorColorNames = [
        "BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
    ];
    PAIRNUMBER_COLORPAIR_MAP = {}
    COLORPAIR_PAIRNUMBER_MAP = {}

    constructor(){
        let minorColorSize = this.MinorColorNames.length
        let majorColorSize = this.MajorColorNames.length
        for (let i = 0; i < majorColorSize; i++){
            for (let j = 0; j < minorColorSize; j++){
                this.PAIRNUMBER_COLORPAIR_MAP[(i*majorColorSize)+(j + 1)] = [this.MajorColorNames[i],this.MinorColorNames[j]]
                this.COLORPAIR_PAIRNUMBER_MAP[[this.MajorColorNames[i],this.MinorColorNames[j]]] = (i*majorColorSize)+(j + 1)
            }
        }
    }
    getManual = ()=>{
        let manualTemplate = "COLOR PAIR - MANUAL\n";
        Object.keys(this.PAIRNUMBER_COLORPAIR_MAP).forEach(key => {
            manualTemplate += `Pair No: ${key} => [MajorColor: ${this.PAIRNUMBER_COLORPAIR_MAP[key][0]}, MinorColor: ${this.PAIRNUMBER_COLORPAIR_MAP[key][1]}]\n`
        })
        return manualTemplate
    };
    getColorFromPairNumber = (pairNumber) => {
        if(pairNumber>(this.MajorColorNames.length*this.MinorColorNames.length) || pairNumber<1) {
            throw `Argument PairNumber:${pairNumber} is outside the allowed range`
        }
        const pair_in_list = this.PAIRNUMBER_COLORPAIR_MAP[pairNumber]
        return new ColorPair(pair_in_list[0], pair_in_list[1])
    }
    getPairNumberFromColor = (pair) => {
        const pairnum = this.COLORPAIR_PAIRNUMBER_MAP[[pair.majorColor,pair.minorColor]]
        if(pairnum == undefined){
            throw `${pair} combination does not exist`
        }
        else
        return this.COLORPAIR_PAIRNUMBER_MAP[[pair.majorColor,pair.minorColor]]
    }
}
