function solution(money) {
    var coffee = Math.floor(money/5500);
    var change = money- (coffee*5500);
    
    return Array.of(coffee, change);
}