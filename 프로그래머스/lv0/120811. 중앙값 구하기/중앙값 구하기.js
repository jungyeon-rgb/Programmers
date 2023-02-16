function solution(array) {
    const sortedArray = array.sort((a,b) => a -b);
    const n = sortedArray.length;
    
    if(n%2 === 1) {
        return sortedArray[Math.floor(n/2)];
    }
}
