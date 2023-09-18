let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 수열 길이 N, 횟수 K의 범위가 크다는 점

// 길이가 N인 수열에서 K개의 원소 삭제 
// -> 짝수로 이루어진 연속한 부분 수열 중에서 가장 긴 것을 계산

let [n, k] = input[0].split(" ").map(Number);
let arr = input[1].split(" ").map(Number);

let result = 0;
let eraseCount = 0;
let end = 0; // end 변수 초기화

for (let start = 0; start < n; start++) {
    while (end < n) {
        if (arr[end] % 2 == 0) {
            end++; // 짝수인 경우 end 증가
        } else { // 홀수인 경우
            if (eraseCount == k) break; // 더 지울 수 없다면 종료
            // 지울 수 있다면 지우기
            eraseCount++;
            end++;
        }
    }
    result = Math.max(result, end - start - eraseCount); // 범위의 길이 계산
    // start를 한 칸 오른쪽으로 이동할 때, 가능하다면 지울 수 있는 개수 증가
    if (arr[start] % 2 == 1) eraseCount--;
}

console.log(result);
