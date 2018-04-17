import {fibNumbers} from './../src/scripts.js'
import {evenFibFilter} from './../src/scripts.js'
import {evenFibsSum} from './../src/scripts.js'

describe('fibNumbers', function(){

  it('should calculate third Fibonacci number given previous two Fibonacci numbers', function(){
    let output = fibNumbers(3);
    expect(output).toEqual([1, 1, 2]);
    console.log(output);
  });

  it('should create array of all Fibonacci numbers less than 10', function(){
    let output = fibNumbers(4);
    expect(output).toEqual([1, 1, 2, 3]);
    console.log(output);
  });

  it('will filter even Fibonacci numbers less than 10', function(){
    let fibs = fibNumbers(10);
    let output = evenFibFilter(fibs);
    expect(output).toEqual([2, 8]);
    console.log(output);
  });

  it('will sum even Fibonacci numbers less than 10', function(){
    let fibs = fibNumbers(10);
    let evenFibs = evenFibFilter(fibs);
    let output = evenFibsSum(evenFibs);
    expect(output).toEqual(10);
    console.log(output);
  });

  it('will sum even Fibonacci numbers less than 4000000', function(){
    let fibs = fibNumbers(4000000);
    let evenFibs = evenFibFilter(fibs);
    let output = evenFibsSum(evenFibs);
    expect(output).toEqual(4613732);
    console.log(output);
  });
});
