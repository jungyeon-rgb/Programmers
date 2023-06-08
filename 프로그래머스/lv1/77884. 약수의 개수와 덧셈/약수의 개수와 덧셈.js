function solution(left, right) {
  let answer = 0;

  for (let num = left; num <= right; num++) {
    let divisorCount = 0;

    // 약수의 개수 구하기
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        divisorCount++;
      }
    }

    if (divisorCount % 2 === 0) {
      answer += num;
    } else {
      answer -= num;
    }
  }

  return answer;
}