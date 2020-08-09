import {assert} from "chai";
import {differenceInAges} from "../src/main.js"

describe("Basic tests", () => {

    it("Testing for [82, 15, 6, 38, 35]), [6, 82, 76]", () => {
        assert.deepEqual(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
    })

    it("Testing for [57, 99, 14, 32]), [14, 99, 85]", () => {
        assert.deepEqual(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);
    })

});
  