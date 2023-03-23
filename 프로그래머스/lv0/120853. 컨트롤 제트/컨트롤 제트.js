function solution(s) {
    const newArr = s.split(' ');
    let sum = 0;
    
    for(let i=0; i<newArr.length; i++){
        if(newArr[i] == 'Z'){
            sum -= parseInt(newArr[i-1]);
        }
        else {
            sum += parseInt(newArr[i]);
        }
    }
    return sum;
}
