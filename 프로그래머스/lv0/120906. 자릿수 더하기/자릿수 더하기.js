function solution(n) {
    let answer = 0;
    let nums = n.toString().split('');
    for(let i=0; i < nums.length; i++) {
        answer += parseInt(nums[i]);
    }
    return answer;
}
