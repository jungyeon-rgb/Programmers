function solution(cipher, code) {
  return cipher.split('').map((char, i) => (i + 1) % code === 0 ? char : '').join('');
}
