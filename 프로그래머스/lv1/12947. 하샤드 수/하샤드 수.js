function solution(x) {
    // x를 문자열로 변환하여 각 자릿수를 분리하고 합 구하기
    let sum = 0;
    x.toString().split('').forEach(num => {
        sum += parseInt(num);
    });
    
    // x가 sum으로 나누어 떨어지게 하기
    return x % sum === 0;
}
