import {assert} from "chai";
import {toWeirdCase} from "../src/main.js"

describe('toWeirdCase', function(){
    it('should return the correct value for a single word', function(){
      assert.equal(toWeirdCase('This'), 'ThIs');
      assert.equal(toWeirdCase('is'), 'Is');
    });
    it('should return the correct value for multiple words', function(){
        assert.equal(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
    });
  });