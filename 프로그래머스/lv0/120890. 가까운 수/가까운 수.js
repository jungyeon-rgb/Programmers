function solution(array, n) {
    let closest = array[0];
    
    for(let i=1; i<array.length; i++){
        if(Math.abs(n-array[i]) < Math.abs(n-closest)) {
            closest = array[i];
        } else if(Math.abs(n-array[i]) === Math.abs(n - closest) && array[i] < closest) {
            closest = array[i];
        }
    }
    return closest;
}