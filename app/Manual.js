import { EvenCountColorCode } from "./EvenCountColorCode.js"
export class Manual extends EvenCountColorCode{
    ManualD= {
            "introduction": "The 25-pair color code, originally known as even-count color code, is a color code used to identify individual conductors in twisted-pair wiring for telecommunications",
            "description":"With the development of new generations of telecommunication cables with polyethylene-insulated conductors (PIC) by Bell Laboratories for the Bell System in the 1950s, new methods were developed to mark each individual conductor in cables. Each wire is identified by the combination of two colors, one of which is the major color, and the second the minor color. Major and minor colors are chosen from two different groups of five, resulting in 25 color combinations. The color combinations are applied to the insulation that covers each conductor. Typically, one color is a prominent background color of the insulation, and the other is a tracer, consisting of stripes, rings, or dots, applied over the background. The background color always matches the tracer color of its paired conductor, and vice versa.The major, or primary group of colors consists of the sequence of white, red, black, yellow, and violet (mnemonics Why Run Backwards, You'll Vomit). The minor, or secondary color is chosen from the sequence blue, orange, green, brown, and slate (mnemonics Bell Operators Give Better Service)",
            "major color": this.MajorColorNames,
            "minor color": this.MinorColorNames,
            "usage":"getColorFromPairNumber =>[IN]pairNumber,  [OUT]ColorPair{MajorColor, MinorColor}\ngetPairNumberFromPairNumber =>[IN]ColorPair{MajorColor, MinorColor}, [OUT]pairNumber",
            "references": "https://en.wikipedia.org/wiki/25-pair_color_code",
        }
    MANUAL = "\n\n"
    TABLE = ""
    constructor(){
        super();
        let pairNumberSpacing = "PAIR NUMBER".length + 1
        let minor_majorColorSpacing = "MAJOR COLOR".length + 1
        this.TABLE += "-------------------------------------------\n| PAIR NUMBER | MAJOR COLOR | MINOR COLOR |\n-------------------------------------------\n"
        Object.keys(this.PAIRNUMBER_COLORPAIR_MAP).forEach(key => {
            this.TABLE += "| " + String(key).padEnd(pairNumberSpacing) + "| " + (this.PAIRNUMBER_COLORPAIR_MAP[key][0]).padEnd( minor_majorColorSpacing) + "| " + (this.PAIRNUMBER_COLORPAIR_MAP[key][1]).padEnd( minor_majorColorSpacing) + "|\n"
        })
        this.TABLE += "-------------------------------------------\n"
        this.ManualD["table"] = this.TABLE
    }
    displayManual = () => { 
        let c = 1
        let template = ""
        Object.keys(this.ManualD).forEach(key => {
            template += `${c}. ${key.toUpperCase()}\n${this.ManualD[key]}\n\n`
            c+=1
        })
        return template
    }
    
}
Manual.prototype.toString = () => {
    return new Manual().displayManual()
}
