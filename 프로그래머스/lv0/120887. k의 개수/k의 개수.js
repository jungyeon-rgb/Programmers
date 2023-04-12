function solution(i, j, k) {
    let count = 0;
    
    for(let n=i; n<=j; n++) {
        let num=n.toString();
        for(let digit=0; digit < num.length; digit++) {
            if(num[digit] === k.toString()){
                count++;
            }
        }
    }
    return count;
}