// [5,2,4,1] -> [5,2,2,1]
// 거리는 상관없이 가격이 싼 곳

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // input 배열에서 첫 번째 요소를 읽어 정수 n으로 변환, 이 값은 도로의 수
let dist = input[1].split(' ').map(Number); // 도로의 길이
let cost = input[2].split(' ').map(Number); // 주유소 가격

// 주유 비용(cost) 배열의 값을 싼 순서가 되도록 변환
let minCost = cost[0]; // 주유소의 가격 중 가장 낮은 값
for (let i=0; i<n;i++){
    minCost = Math.min(minCost, cost[i]); //minCost보다 작은 값이 나오면 minCost 업데이트
}

let answer = BigInt(0); // 도로당 이동 비용의 총합
for (let i=0; i<n-1; i++) {
    // JS에서 큰 정수를 처리할 때는 BigInt 사용
    answer += BigInt(dist[i]) * BigInt(cost[i]);
}
console.log(String(answer)); // BigInt는 뒤에 'n'이 붙기 때문에 뒤에 붙는 'n' 제거