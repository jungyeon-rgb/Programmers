function solution(board) {
    const n = board.length;
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1]; // x축 이동 방향
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1]; // y축 이동 방향
    
    function isSafe(x, y) { // 해당 칸이 안전한 칸인지 판단하는 함수
        for (let k = 0; k < 8; k++) { // 인접한 8개의 칸을 검사
            const nx = x + dx[k];
            const ny = y + dy[k];
            if (nx < 0 || nx >= n || ny < 0 || ny >= n) { // 칸이 범위를 벗어나면 건너뜀
                continue;
            }
            if (board[nx][ny] === 1) { // 인접한 칸에 지뢰가 있으면 안전하지 않음
                return false;
            }
        }
        return true; // 모든 인접한 칸이 안전한 칸이면 안전한 칸으로 판단
    }
    
    let count = 0; // 안전한 칸의 개수
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0 && isSafe(i, j)) { // 해당 칸이 안전한 칸이면 카운트 증가
                count++;
            }
        }
    }
    return count;
}
