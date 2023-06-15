let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let data = input.map(Number);
let mySet = new Set(); // 집합 객체 생성

for(let i=0; i<10; i++){
    mySet.add(data[i]%42); // 원소 하나씩 체크하면서 42로 나눈 나머지를 집합의 원소로 삽입
}

console.log(mySet.size); // 집합에 포함된 원소의 개수 출력