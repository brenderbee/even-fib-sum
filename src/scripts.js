export function fibNumbers(number) {
  let fibNumbersArray = [1, 1];
  for (var i = 1; i < fibNumbersArray.length; i++) {
    if (fibNumbersArray[i] < number) {
      fibNumbersArray.push(fibNumbersArray[i] + fibNumbersArray[i-1]);
    } else {
      fibNumbersArray.pop(fibNumbersArray[i]);
    }
  }
  console.log(fibNumbersArray);
  return fibNumbersArray;
}

export function evenFibFilter(fibs) {
  let evenFibNumbers = [];

  for (var i = 0; i < fibs.length; i++) {
    if (fibs[i] % 2 ===0) {
      evenFibNumbers.push(fibs[i]);
    }
  }
  return evenFibNumbers;
}

export function evenFibsSum(evenFibs) {
  let total = 0;
  for (var i = 0; i < evenFibs.length; i++) {
    total += evenFibs[i];
  }
  return total;
}
