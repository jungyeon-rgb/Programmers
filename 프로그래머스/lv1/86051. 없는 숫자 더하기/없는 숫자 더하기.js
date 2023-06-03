function solution(numbers) {
  let answer = 45;
  
  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
    // 배열에 있는 숫자를 전체 값에서 빼줌
  }
  
  return answer;
}
