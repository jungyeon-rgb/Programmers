function solution(s) {
    const length = s.length;
    const middleIdx = Math.floor(length/2);
    
    if (length%2 === 0) {
        return s.slice(middleIdx - 1, middleIdx + 1);
    } else {
        return s[middleIdx];
    }
}