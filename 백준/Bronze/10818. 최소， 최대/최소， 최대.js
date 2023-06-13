let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let minValue = 1000001;
let maxValue = -1000001;

for(let i=0; i<n; i++){
    if (minValue > arr[i]) minValue = arr[i];
    if (maxValue < arr[i]) maxValue = arr[i];
}
console.log(minValue, maxValue);

// 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제 => '순회'
// 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 O(N)로 해결할 수 있다.