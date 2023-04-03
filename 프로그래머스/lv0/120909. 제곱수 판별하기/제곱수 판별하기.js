function solution(n) {
    const sqrt = Math.sqrt(n);
    return Number.isInteger(sqrt) ? 1 : 2; //Number.isInteger() 메서드를 이용해서 제곱근 값이 정수인지 확인
}
