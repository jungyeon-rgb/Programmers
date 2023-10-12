// 연결 요소의 개수를 구하는 것이 문제!
// 각 위치에서 상,하,좌,우의 위치로 간선이 연결되어 있는 그래프로 이해
// 왼쪽 위부터 시작해 아직 처리되지 않는 노드에 대해 DFS 수행

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function dfs(graph, n,m,x,y) { // dfs 수행
    // 주어진 범위를 벗어나는 경우에는 즉시 종료
    if(x <= -1 || x >= n || y <= -1  || y>=m)
        return false;
    // 현재 노드를 아직 처리하지 않았다면
    if(graph[x][y] == 1) {
        // 해당 노드 방문 처리
        graph[x][y] = -1;
        // 상,하,좌,우의 위치들도 모두 재귀적으로 호출, 인접한 노드들도 방문처리 수행
        dfs(graph,n,m,x-1,y);
        dfs(graph,n,m,x,y-1);
        dfs(graph,n,m,x+1,y);
        dfs(graph,n,m,x,y+1);
        return true; // true를 통해 방문처리를 하지 않은 노드가 있음을 알게 함
    }
    return false;
}

let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
while(testCases--) {
    // 가로 길이(M), 세로 길이(N), 배추가 심어져 있는 위치의 개수(K)
    let [m,n,k] = input[line].split(' ').map(Number);
    let graph = []; // 그래프 정보
    for (let i=0; i<n; i++) {
        graph[i] = new Array(m); // N개의 행은 크기가 m인 배열을 원소로 설정
    }
    for(let i=1; i<=k; i++) {
        let [y,x] = input[line + i].split(' ').map(Number);
        graph[x][y] = 1; // 1을 표시함으로써 배추가 존재하는 것을 알림
    }
    let answer = 0; // 연결 요소(connected component)의 수 계산
    for(let i=0;i<n;i++) {
        for(let j=0; j<m; j++) {
            if(dfs(graph,n,m,i,j)) answer++; // 현재 위치에서 DFS 수행
        }
    }
    line += k+1; // 다음 테스트 케이스로 이동
    console.log(answer);
}