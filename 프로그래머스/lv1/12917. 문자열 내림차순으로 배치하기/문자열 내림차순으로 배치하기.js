function solution(s) {
    const sortedString = s.split('').sort().reverse().join("");
    return sortedString;
}