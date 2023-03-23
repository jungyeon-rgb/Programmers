function solution(sides) {
    const sum = sides[0] + sides[1] + sides[2];
    const max = Math.max(...sides);
    
    if((sum-max)>max){
        return 1;
    } else return 2;
}