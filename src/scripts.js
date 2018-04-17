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
