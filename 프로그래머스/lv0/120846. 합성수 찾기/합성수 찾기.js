function solution(n) {
    let result = 0;
  
    for(let i = 0; i <= n; i++){
        if(isPrime(i)) result++;
    }
    
    return result;
}

function isPrime(n) {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return true;
        }
        return false
}