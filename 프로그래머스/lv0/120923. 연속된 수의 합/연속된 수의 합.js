function solution(num, total) {
  const result = [];
  let start = Math.floor(total / num) - Math.floor(num / 2);
  let end = Math.floor(total / num) + Math.floor(num / 2);

  while (start <= end) {
    let sum = 0;
    for (let i = start; i < start + num; i++) {
      sum += i;
    }
    if (sum === total) {
      for (let i = start; i < num + start; i++) {
        result.push(i);
      }
      break;
    }
    start++;
  }

  return result;
}
