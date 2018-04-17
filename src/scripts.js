export function fibNumbers() {
  let fibNumbersArray = [1, 1];
  for (var i = 1; i < 2; i++) {
    fibNumbersArray.push(fibNumbersArray[i] + fibNumbersArray[i-1]);
  }
  console.log(fibNumbersArray);
  return fibNumbersArray;
}
