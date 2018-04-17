export function fibNumbers() {
  let fibNumbersArray = [1, 1];
  for (var i = 1; i < 3; i++) {
    fibNumbersArray.push(fibNumbersArray[i] + fibNumbersArray[i-1]);
  }
  return fibNumbersArray
}
