function solution(n) {
  let answer = 0;
  let str = n.toString();

  for (let i = 0; i < str.length; i++) {
    answer += parseInt(str.charAt(i)); // 각 자리의 문자를 숫자로 바꾸어 더해줌
  }
  return answer;
}