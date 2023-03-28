function solution(s){
    const wordsCount = {};
    for (let i=0; i < s.length; i++){
        const char = s[i];
        wordsCount[char] = (wordsCount[char] || 0) + 1;
    }
    
    const uniqueChars = Object.keys(wordsCount).filter(char => wordsCount[char] === 1);
    uniqueChars.sort();
    
    return uniqueChars.join('');
}