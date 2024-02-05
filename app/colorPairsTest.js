import { ColorPair } from "./colorPair.js";
import { EvenCountColorCode } from "./EvenCountColorCode.js";
import { TestUsingColorPair, TestUsingPairNumber } from "./TestFunctions.js";

function test(){
	TestUsingPairNumber(4,new ColorPair("WHITE","BROWN"))
	TestUsingColorPair(new ColorPair("WHITE","BROWN"),4)
	TestUsingPairNumber(5,new ColorPair("WHITE","SLATE"))
	TestUsingPairNumber(23,new ColorPair("RED","GREEN"))
	TestUsingColorPair(new ColorPair("YELLOW","GREEN"),18)
	TestUsingColorPair(new ColorPair("RED","BLUE"),6)
}
const colorPairsObject = new EvenCountColorCode()
console.log(colorPairsObject.getManual())
test()
