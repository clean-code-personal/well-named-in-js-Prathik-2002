import { EvenCountColorCode } from "./EvenCountColorCode.js"
import { Manual } from "./Manual.js";
const colorPairsObject = new EvenCountColorCode()
export const TestUsingPairNumber = (pairNumber,pair) => {
    const testPair1 = colorPairsObject.getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	console.assert(testPair1.majorColor === pair.majorColor && testPair1.minorColor === pair.minorColor);
}
export const TestUsingColorPair = (pair, expectedPairNumber) => {
    const pairNumber =colorPairsObject.getPairNumberFromColor(pair);
    console.log(`[In]Colors: ${pair}, [Out] PairNumber: ${pairNumber}`);
	console.assert(pairNumber==expectedPairNumber);
}
export const TestManual = () => {
    const count = (arr, value) => {
        let c = 0
        arr.forEach(ele => {
            if(value[0] == ele[0] && value[1] == ele[1]){
                c += 1
            }
        })
        return c
    }
    const ManualObj = new Manual()
    console.assert(ManualObj.MajorColorNames.length === 5)
    console.assert(ManualObj.MajorColorNames.length === 5)
    console.assert(Object.keys(ManualObj.PAIRNUMBER_COLORPAIR_MAP).length === ManualObj.MajorColorNames.length*ManualObj.MajorColorNames.length)
    //check if the pairs are non repeating
    Object.values(ManualObj.PAIRNUMBER_COLORPAIR_MAP).forEach(value =>{
        console.assert(count(Object.values(ManualObj.PAIRNUMBER_COLORPAIR_MAP), value) == 1)
    })
}