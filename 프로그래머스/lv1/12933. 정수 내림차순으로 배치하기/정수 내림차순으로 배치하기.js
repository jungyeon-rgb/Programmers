function solution(n) {
    const digits = n.toString().split(''); // 주어진 정수를 문자열로 변환해서 배열에 저장
    const sortedDigits = digits.sort(function(a,b) {
        return b-a;
    }) // 내림차순 정렬
    return parseInt(sortedDigits.join('')); // 내림차순 정렬한 배열을 다시 정수로 변환
}