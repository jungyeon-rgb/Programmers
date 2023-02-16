function solution(numer1, denom1, numer2, denom2) {
    let resultNumer = numer1 * denom2 + numer2 * denom1; // 분자 계산
    let resultDenom = denom1 * denom2; // 분모 계산

    // 분자와 분모의 최대공약수를 구하는 함수
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // 분자와 분모를 최대공약수로 나누어 기약분수로 만듦
    const divisor = gcd(resultNumer, resultDenom);
    resultNumer /= divisor;
    resultDenom /= divisor;

    return [resultNumer, resultDenom];
}