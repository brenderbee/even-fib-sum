import {fibNumbers} from './../src/scripts.js'

describe('fibNumbers', function(){

  it('should calculate third Fibonacci number given previous two Fibonacci numbers', function(){
    let output = fibNumbers();
    expect(output).toEqual([1, 1, 2]);
    console.log(output);
  });
});
