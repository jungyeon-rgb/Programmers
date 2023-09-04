const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const n = Number(input[0]); // 사람 수
const tips = input.slice(1, n + 1).map(Number); // 각 사람이 주려고 하는 팁

tips.sort((a, b) => b - a); // 팁을 내림차순으로 정렬

let result = 0;

for (let i = 0; i < n; i++) {
    const tipToGive = tips[i] - i; // 손님 순서 계산
    if (tipToGive > 0) { // 음수가 아닐 경우
        result += tipToGive;
    } else {
        break; // 음수가 나오면 그 뒤로는 계산할 필요가 없으므로 반복문을 종료
    }
}

console.log(result);
