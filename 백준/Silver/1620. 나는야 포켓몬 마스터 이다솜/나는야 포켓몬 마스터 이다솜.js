const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.shift().split(' ').map(v=>+v);
const NumToName = new Map(); // 포켓몬 번호 => 포켓몬 이름
const NameToNum = new Map(); // 포켓몬 이름 => 포켓몬 번호
for (let i = 0; i < N; i++) { // N까지
    NumToName.set(i+1, input[i]); // 1 => 'Bulbasqur' , 2 => 'Ivysaur', ... 26 => 'Raichu'
    NameToNum.set(input[i], i+1); // 'Bulbasaur' => 1, 'Ivysaur' => 2, ... 'Raichu' => 26
}
const quiz = input.slice(N, input.length); // input에서 quiz 뽑아내고
let answer = ''; // 정답 담을 변수 선언
quiz.forEach(v=> {
    if (isNaN(v)) { // 만약 quiz의 요소가 숫자가 아니면?
        answer += NameToNum.get(v) + '\n'; // Ex) NametoNum.get(v='Raichu') => 26 출력
    } else { // 만약 quiz의 요소가 숫자라면?
        answer += NumToName.get(+v) + '\n'; // Ex) NumtoName.get(v=>25) => Pikachu 출력
    }
});
console.log(answer.trim());