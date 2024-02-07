import { ColorPair } from "./colorPair.js";
import { EvenCountColorCode } from "./EvenCountColorCode.js";
import { TestUsingColorPair, TestUsingPairNumber, TestManual } from "./TestFunctions.js";
import { Manual } from "./Manual.js";
function test(){
	TestUsingPairNumber(4,new ColorPair("WHITE","BROWN"))
	TestUsingColorPair(new ColorPair("WHITE","BROWN"),4)
	TestUsingPairNumber(5,new ColorPair("WHITE","SLATE"))
	TestUsingPairNumber(23,new ColorPair("RED","GREEN"))
	TestUsingColorPair(new ColorPair("YELLOW","GREEN"),18)
	TestUsingColorPair(new ColorPair("RED","BLUE"),6)
	TestManual()
}
const Manualobj = new Manual()
console.log(String(Manualobj))
test()
