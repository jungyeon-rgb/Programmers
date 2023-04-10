function solution(numlist, n) {
  numlist.sort((a, b) => {
    const diff1 = Math.abs(n - a);
    const diff2 = Math.abs(n - b);
    if (diff1 !== diff2) {
      return diff1 - diff2;
    } else {
      return b - a;
    }
  });
  return numlist;
}
