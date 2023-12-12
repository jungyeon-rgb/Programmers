const n = Number(require('fs').readFileSync('dev/stdin'))

const solution = (n) => {
	//숫자를 2진법으로 변환
	const binArr = n.toString(2).split("");
    
    	//n보다 작은 2^x 값 빼기 
	binArr.shift();
    
	//남은수 10진법으로 변환
	const answer = parseInt(binArr.join(""), 2);
    
    //answer가 0이면 그 수는 2^x 이므로 n
    return answer ? answer * 2 : n;
}

console.log(solution(n));