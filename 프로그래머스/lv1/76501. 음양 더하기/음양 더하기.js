function solution(absolutes, signs) {
  let sum = 0;
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      // signs[i]가 참인 경우 양수이므로 그대로 더하기
      sum += absolutes[i];
    } else {
      // signs[i]가 거짓인 경우 음수이므로 절댓값 더하기
      sum -= absolutes[i];
    }
  }
  return sum;
}