function solution(order) {
    let count = 0;
    let nums = order.toString().split('');
    
    for(let i=0 ; i<nums.length; i++) {
        if(nums[i] == '3' || nums[i] == '6' || nums[i] == '9'){
            count++;
        }
    }
    return count;
}