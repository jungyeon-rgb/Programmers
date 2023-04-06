function solution(numbers) {
  numbers.sort((a, b) => b - a); // 배열을 내림차순으로 정렬
  const lastIndex = numbers.length - 1; // 마지막 인덱스 값을 구함
  const secondLastIndex = lastIndex - 1; // 마지막 전의 인덱스 값을 구함
  const product1 = numbers[0] * numbers[1]; // 0번 인덱스 값과 1번 인덱스 값을 곱함
  const product2 = numbers[secondLastIndex] * numbers[lastIndex]; // 마지막 전의 인덱스 값과 마지막 인덱스 값을 곱함
  return product1 > product2 ? product1 : product2; // 두 곱 중 큰 값을 리턴
}
