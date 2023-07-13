function solution(s){
    const stack = []

    // 없어도 문제는 X
    // if(s[0] === ')')
    //   return false

    s.split('').map(string=>{
        if(string === ')' && stack[stack.length-1] === '('){
            stack.pop()
        }
        else{
            stack.push(string)
        }
    })

    return stack.length === 0
}