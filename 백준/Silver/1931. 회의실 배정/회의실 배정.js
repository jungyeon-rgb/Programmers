const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 회의의 개수
let arr = []; // 각 회의에 대한 (시작 시점, 종료 시점) 입력받기
for(let i=1;i<=n;i++) arr.push(input[i].split(' ').map(Number));

arr.sort(function(a,b) { // 1.종료 시점 2.시작 시점을 우선순위로 오름차순 정렬
    if(a[1] != b[1]) return a[1] - b[1]; // 끝나는 시점이 더 빠른 것부터 정렬
    else return a[0] - b[0];
});

let cnt = 1, current = 0; // 첫 번째 회의부터
for(let i=1; i<n; i++) {
    if(arr[current][1] <= arr[i][0]) { // 가장 최근에 배치가 끝난 회의(arr[current][1]가 끝난 이후에 회의가 시작될 때(arr[i][0])가 더 크다면 카운트
    current = i;
    cnt += 1;
    }
}
console.log(cnt);