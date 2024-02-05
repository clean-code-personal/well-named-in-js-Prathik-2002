import { EvenCountColorCode } from "./EvenCountColorCode.js"
const colorPairsObject = new EvenCountColorCode()
export const TestUsingPairNumber = (pairNumber,pair) => {
    const testPair1 = colorPairsObject.getColorFromPairNumber(pairNumber);
    console.log(`[In]Pair Number: ${pairNumber},[Out] Colors:${testPair1}`);
	console.assert(testPair1.majorColor === pair.majorColor);
	console.assert(testPair1.minorColor === pair.minorColor);
}
export const TestUsingColorPair = (pair, expectedPairNumber) => {
    const pairNumber =colorPairsObject.getPairNumberFromColor(pair);
            console.log(`[In]Colors: ${pair}, [Out] PairNumber: ${pairNumber}`);
			console.assert(pairNumber==expectedPairNumber);
}