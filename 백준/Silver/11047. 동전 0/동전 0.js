const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0].split(' ')[0]); // 동전의 개수
let k = Number(input[0].split(' ')[1]); // 만들어야 할 금액

let result = []; // 화폐 단위를 넣을 배열

function solution(n,k,result) {
    for(let i=0;i<n;i++){
        result.push(Number(input[i+1]));
    }
    let count=0;
    for(let j=n-1;j>=0;j--){
        count += parseInt(k/result[j]); // 해당 동전 개수
        k %= result[j]; // 해당 동전으로 계산하고 남은 금액
    }
    return count;
}

const answer = solution(n,k,result);
console.log(answer);