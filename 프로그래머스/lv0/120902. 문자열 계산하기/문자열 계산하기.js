function solution(my_string) {
  let tempString = my_string.split(" ");
  let newArr = 0;

  for (let i = 0; i < tempString.length; i++) {
    if (isNaN(Number(tempString[i]))) {
      continue;
    } else if (tempString[i-1] === "+" || i === 0) {
      newArr += parseInt(tempString[i]);
    } else if (tempString[i-1] === "-") {
      newArr -= parseInt(tempString[i]);
    }
  }
  return newArr;
}
