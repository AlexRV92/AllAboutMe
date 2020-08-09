import {expect} from "chai";
import {spam} from "../src/main.js"

describe("Trolling the troll KATA", ()=> {
    it("Si escribo 'Hello world' debe devolver 'Hilli Wirld!'", () => {
        expect(spam("Hello World!")).to.eq("Hilli Wirld!");
    })
    it("Si escribo 'This website is for losers LOL' debe devolver 'This wibsiti is fir lisirs LIL!'", () => {
        expect(spam("This website is for losers LOL!")).to.eq("This wibsiti is fir lisirs LIL!");
    })
})
