let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);

let result = "";
for (let i=0; i<n; i++) {
    for (let j=0; j<=i; j++){ // 현재 행만큼 별을 출력
        result += "*";
    }
    result += "\n";
}
console.log(result);