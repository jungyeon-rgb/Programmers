function solution(n) {
    let answer = ""
    for(let i = 0 ; i<n.length; i++){
        if(Number.isInteger(+n[i])){
            answer += n[i]
        }else{
            answer += " "
        }
    }
    return answer.split(" ").reduce((acc,cur)=> acc += +cur,0)
}