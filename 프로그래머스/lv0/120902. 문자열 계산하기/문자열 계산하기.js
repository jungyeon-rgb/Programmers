function solution(my_string) {
  let tempString = my_string.split(" ");
  let newArr = 0;

  for (let i = 0; i < tempString.length; i++) {
    if (isNaN(Number(tempString[i]))) {
      continue;
    } else if (tempString[i-1] === "+" || i === 0) {
        // tempString의 i번째 값이 숫자이면서 이전 값이 "+"이거나 0이면
      newArr += parseInt(tempString[i]);
        // newArr에 tempString[i]를 더한다
    } else if (tempString[i-1] === "-") {
        // tempString의 i번째 값이 숫자이면서 이전 값이 "-"이면
      newArr -= parseInt(tempString[i]);
        // newArr에 tempString[i]를 뺀다
    }
  }
  return newArr;
}
