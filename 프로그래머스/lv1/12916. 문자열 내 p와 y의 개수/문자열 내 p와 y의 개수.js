function solution(s) {
    // 문자열 s의 모든 문자를 소문자로 변환하여 비교하기 위해 소문자로 변경
    s = s.toLowerCase();
    
    // 'p'와 'y'의 개수를 저장할 변수 초기화
    let countP = 0;
    let countY = 0;
    
    // 문자열 s를 순회하면서 'p'와 'y'의 개수 카운팅
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            countP++;
        } else if (s[i] === 'y') {
            countY++;
        }
    }
    
    // 'p'와 'y'의 개수를 비교하여 같으면 true, 다르면 false 반환
    return countP === countY;
}
