function solution(num) {
  let cnt = 0;
  while (num > 1) {
    if (cnt == 500) return -1;
    cnt++;
    if (num % 2 == 0) num /= 2;
    else {
      num *= 3;
      num++;
    }
  }
  return cnt;
}