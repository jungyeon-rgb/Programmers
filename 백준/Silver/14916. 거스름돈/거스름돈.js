const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]); // 문자열이기 때문에 숫자로 변환

// 홀수이거나 5로 나누어 떨어지면 5원주기
// 짝수일때는 2원으로 주기
// 1과 3에는 -1 출력

function solution(n) {
    let answer = 0;
    if (n===1 || n===3) return -1;

    while(n>0) {
        if(n%2===1 || n%5===0) {
            answer += 1;
            n -= 5;
        } else if(n%2===0) {
            answer += 1;
            n -=2;
        }
    }
    
    return answer;
}

const answer = solution(n);
console.log(answer);
