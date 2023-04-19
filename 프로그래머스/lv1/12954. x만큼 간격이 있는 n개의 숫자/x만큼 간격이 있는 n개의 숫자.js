function solution(x, n) {
    const result = [];
    let num = x;
    for (let i = 0; i < n; i++) {
        result.push(num);
        num += x;
    }
    return result;
}
