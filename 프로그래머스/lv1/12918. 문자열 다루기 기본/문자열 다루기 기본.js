function solution(s) {
  // 문자열의 길이가 4 또는 6이 아니면 false 반환
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  // 숫자로만 구성되어 있는지 확인
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }

  return true;
}