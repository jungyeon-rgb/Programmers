function solution(numbers) {
    let reducer = (a, b) => a +b ;
    let length = numbers.length;
    return (numbers.reduce(reducer))/length;
}