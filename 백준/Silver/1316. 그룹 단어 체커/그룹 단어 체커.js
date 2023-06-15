let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let n = Number(input[0]);
let summary = 0;

function check(data) {
    let setData = new Set(data[0]); // 첫 번째 자료를 집합 자료형 Set()에 넣음
    for (let i=0; i < data.length -1; i++) {
        //오른쪽 단어와 다를 경우
        if (data[i] != data[i+1]) {
            //이미 나왔던 알파벳이면
            if (setData.has(data[i + 1])) {
                return false;
            }
            else {
                setData.add(data[i+1]);
            }
        }
    }
    return true;
}

for (let i=1; i<=n; i++) {
    let data = input[i];
    if (check(data)) summary += 1
}

console.log(summary);