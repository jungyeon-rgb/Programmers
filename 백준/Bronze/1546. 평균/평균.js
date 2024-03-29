let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]); // 전체 성적의 개수 n
let scores = input[1].split(' ').map(Number); // 배열로 만들어줌

let maxValue = scores.reduce((a, b) => Math.max(a,b));
let updated = [];
for (let i=0; i < n; i++){ // 수정된 원소 하나씩 저장
    updated.push(scores[i]/maxValue*100);
}

// 배열에 포함된 원소의 평균 출력
console.log(updated.reduce((a,b) => a+b)/n);