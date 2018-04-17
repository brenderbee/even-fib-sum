export function fibNumbers() {
  let fibNumbersArray = [1, 1];
  for (var i = 1; i < fibNumbersArray.length; i++) {
    if (fibNumbersArray[i] >= 10) {
      break;
    } else {
    fibNumbersArray.push(fibNumbersArray[i] + fibNumbersArray[i-1]);
    }
  }
  console.log(fibNumbersArray);
  return fibNumbersArray;
}
