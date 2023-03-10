function solution(emergency) {
    let list = [...emergency].sort((a,b) => b-a);
    let newList = new Map();
    for(let i=0; i<list.length;i++){
        newList.set(list[i], i+1);
    }
    return emergency.map(v => newList.get(v));
}
