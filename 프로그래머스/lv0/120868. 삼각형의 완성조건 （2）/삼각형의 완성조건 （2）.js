function solution(sides) {
    let count = 0;
    let maxSide = Math.max(...sides);
    let minSide = Math.min(...sides);
    //1. sides에 가장 긴 변이 있을 때
    for(let i = maxSide-minSide+1;i <= maxSide; i++){
        count++;
    }
    //2. 나머지 한 변이 될 수 있는 정수의 개수 구하기
    for(let i= maxSide+1 ; i< maxSide + minSide ; i++){
        count++;
    }
    return count;
}