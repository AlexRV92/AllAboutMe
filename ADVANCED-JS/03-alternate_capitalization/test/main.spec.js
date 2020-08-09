import {assert} from "chai";
import {capitalize} from "../src/main.js"

describe("Basic tests", function(){
  it("Should capitalize correctly", function() {
    assert.deepEqual(capitalize("abcdef"),['AbCdEf', 'aBcDeF']);
    assert.deepEqual(capitalize("codewars"),['CoDeWaRs', 'cOdEwArS']);
    assert.deepEqual(capitalize("abracadabra"),['AbRaCaDaBrA', 'aBrAcAdAbRa']);
    assert.deepEqual(capitalize("codewarriors"),['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
  });
});
