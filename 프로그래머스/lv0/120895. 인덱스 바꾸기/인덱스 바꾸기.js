function solution(str, i, j) {
  let chars = str.split('');
  let temp = chars[i];
    
  chars[i] = chars[j];
  chars[j] = temp;
  return chars.join('');
}
