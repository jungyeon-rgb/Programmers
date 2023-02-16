function solution(array) {
    const sortedArray = array.sort((a,b) => a -b);
    const n = sortedArray.length;
    
    if(n%2 === 1) {
        return sortedArray[Math.floor(n/2)];
    } /* else {
        return (sortedArray[n/2-1] + sortedArray[n/2])/2;
    } */
}