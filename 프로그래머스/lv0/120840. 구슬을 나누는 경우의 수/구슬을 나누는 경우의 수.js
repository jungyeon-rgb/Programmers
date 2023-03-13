function solution(balls, share) {
    if (share === 0) return 1
    return  factorial(balls) / (factorial(balls - share) * factorial(share))
}

function factorial(n) {
    let answer = BigInt(1)

    for (let result = 2; result <= n; result++) {
        answer *= BigInt(result)
    }
    return answer;
}
