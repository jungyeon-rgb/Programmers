function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  
  const minIndex = arr.indexOf(Math.min(...arr));
  
  return arr.filter((_, index) => index !== minIndex);
}