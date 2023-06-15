let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let testCases = Number(input[0]);
for (let t=1; t<=testCases; t++) {
    let data = input[t].split(' ').map(Number); // 각각의 줄을 확인, 공백기준으로 나누기, 수로 변환
    let n = data[0]; // 첫 번째 수는 데이터의 개수
    let summary = 0; // n개의 점수에 대하여 평균 계산
    for (let i=1; i <=n; i++){
        summary += data[i];
    }
    let average = summary / n;
    let cnt = 0; // 점수가 평균을 넘는 학생 수 계산
    for (let i=1; i<=n; i++)
        if(data[i] > average) cnt += 1;
        // 점수가 평균을 넘는 학생의 비율을 소수점 셋째 자리까지 출력
    console.log(`${(cnt / n * 100).toFixed(3)}%`);
}