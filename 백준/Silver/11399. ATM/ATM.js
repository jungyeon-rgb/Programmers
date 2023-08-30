// 예상한 풀이 방법 : 배열에서 가장 작은 순서(오름차순)으로 나열해서 시간의 합 구하기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[1].split(' ').map(Number);// 모든 처리 시간 입력
let count = Number(input[0]); // 사람 몇 명인지
      
function solution(count, arr) {
    arr.sort((a,b) => a-b);
    
    let answer = 0;
    let summary = 0;
    for (let i=0; i<count; i++){
        summary += arr[i]; // i번째 사람이 기다린 총 시간
        answer += summary; // 지금까지 소요된 시간
    }
    return answer;
}
console.log(solution(count, arr));