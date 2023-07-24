let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let arr = input[0].split(' ').map(Number); // 원소 각각을 수 데이터로 변환
arr.sort(function(a,b) {
    return a-b;
})

let answer = "";
for(let i=0; i<arr.length; i++) {
    answer += arr[i] + " ";
}
console.log(answer);