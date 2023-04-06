function solution(dots) {
  const x = dots.map(dot => dot[0]); // dots 배열의 각 요소에서 x 좌표를 추출하여 배열 x에 저장
  const y = dots.map(dot => dot[1]); // dots 배열의 각 요소에서 y 좌표를 추출하여 배열 y에 저장
  const width = Math.max(...x) - Math.min(...x); // 배열 x에서 가장 큰 값과 작은 값을 구한 후, 차이를 계산하여 가로 길이를 구함
  const height = Math.max(...y) - Math.min(...y); // 배열 y에서 가장 큰 값과 작은 값을 구한 후, 차이를 계산하여 세로 길이를 구함
  return width * height;
}
