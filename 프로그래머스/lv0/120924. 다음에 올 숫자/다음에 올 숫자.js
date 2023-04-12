function solution(common) {
    let result = 0;
    //1. 등차수열
    if(common[1] - common[0] === common[common.length - 1] - common[common.length - 2]) {
        result = common[common.length - 1] + (common[1] - common[0]);
    }
    //2. 등비수열
    else {
        result = common[common.length - 1] * parseInt(common[1] / common[0]);
    }
    return result;
}