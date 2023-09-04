// 풀이 예상 순서
// 1) 값이 2로 나누어 떨어지는 경우 -> 2로 나누는 연산만 사용 가능하다.
// 2) 그렇지 않고, 일의 자릿수가 1인 경우 -> 10으로 나누는 연산만 사용 가능하다.
// 3) 위 경우가 모두 해당되지 않는 경우 -> 더 이상 이동이 불가능하므로, 종료한다.

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a,b] = input[0].split(' ').map(Number); // A와 B 입력
let flag = false;
let result = 1;

while (a <= b) {
    if (a==b) {
        flag = true;
        break;
    }
    if (b%2 === 0) b = parseInt(b/2); // 2로 나누어 떨어지는 경우
    else if(b%10==1) b = parseInt(b/10); // 일의 자릿수가 1일 때
    else break; // 위 경우가 모두 해당되지 않는 경우
    result++;
}

if(flag) console.log(result);
else console.log(-1);