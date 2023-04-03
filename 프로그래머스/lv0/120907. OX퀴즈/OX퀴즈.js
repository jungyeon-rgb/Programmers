function solution(quiz) {
    let answer = [];
    for(let i=0; i<quiz.length; i++) {
        const [xStr, op, yStr, _, zStr] = quiz[i].split(' ');
        const x = parseInt(xStr);
        const y = parseInt(yStr);
        const z = parseInt(zStr);
        let result;
        if(op === '+') {
            result = x + y;
        } else {
            result = x - y;
        }
        answer.push(result === z ? 'O' : 'X');
    }
    return answer;
}
