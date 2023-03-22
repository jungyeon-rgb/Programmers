function solution(my_string) {
  const numbers = [];
  for (let i = 0; i < my_string.length; i++) {
    const num = Number(my_string[i]);
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }
  const sortedNumbers = numbers.sort((a, b) => a - b);
  return sortedNumbers;
}
