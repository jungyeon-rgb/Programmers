const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1. 가장 낮은 버티는 무게를 가진 로프부터 사용(더 버티는 로프의 무게도 영향을 받게 되어서)
// 2. 로프를 내림차순으로 정렬
// 3. 각 로프의 버티는 무게를 그 로프를 포함하여 위쪽의 모든 로프에 고르게 분배
// 4. 각 로프의 버티는 무게는 그 로프의 인덱스에 1을 더한 값과 같습니다.
// 각 로프의 버티는 무게를 구한 후, 이 값들 중에서 가장 큰 값을 찾아 출력

const n = Number(input[0]); // 로프 개수
const ropes = input.slice(1, n + 1).map(Number); // 로프가 버티는 무게

ropes.sort((a, b) => b-a); // 로프를 내림차순으로 정렬

let maxWeight = 0;

for (let i = 0; i < n; i++) {
    const weight = ropes[i] * (i + 1);
    maxWeight = Math.max(maxWeight, weight);
}

console.log(maxWeight); // 가장 큰 값을 출력
