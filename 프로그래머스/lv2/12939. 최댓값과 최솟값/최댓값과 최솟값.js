function solution(s) {
    const answer = s.split(' ').sort();
    
    const min = Math.min(...answer);
    const max = Math.max(...answer);
    
    return min.toString() + " " + max.toString();
}