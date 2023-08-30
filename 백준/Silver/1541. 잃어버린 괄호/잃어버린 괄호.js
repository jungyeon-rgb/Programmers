// 예상 풀이 방법
// for문으로 배열을 돌면서 '-'를 만나게 되면 그 뒤에 수를 '-'가 또 나오기 전까지 최대한 괄호로 묶기
// 50-10+20+30-50 => 1.50-(10+20+30-50)=40 2.50-(10+20+30)-50=-60
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let groups = input[0].split('-'); // '-'를 기준으로 묶기
let result = 0;

for(let i=0;i<groups.length;i++){
    let plus=groups[i].split('+').map(Number).reduce((a,b) => a+b);
    if(i==0) result += plus; // 첫 번째 묶은 것들은 음수가 없고 항상 양수
    else result -= plus; // 두 번째 묶은 것들 부터 빼기 포함됨
}

console.log(result);