let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

// 1번 노드에서 도달할 수 있는 다른 노드의 개수를 출력하는 문제
// DFS를 이용해 양방향 그래프에 대한 그래프 탐색하기
// 그래프를 인접 리스트로 표현할 때, 인덱스 0을 사용하지 않으면
// 직관적으로 표현할 수 있어서 0은 []로 처리

let n = Number(input[0]); // 정점의 개수(N)
let m = Number(input[1]); // 간선의 개수(M)
let graph = []; // 그래프 정보 입력
for(let i=1; i<=n; i++) graph[i] = []; // 1.n번까지 그래프에 빈 배열([])을 넣어줌
for(let i=2; i<=m+1; i++) {
    let[x,y] = input[i].split(' ').map(Number);
    graph[x].push(y); //x번 노드에서 y번 노드로 이동 가능
    graph[y].push(x); //y번 노드에서 x번 노드로 이동 가능 -> 서로 연결
}

let cnt = 0;
let visited = new Array(n+1).fill(false);
function dfs(x) { // DFS 수행
    visited[x] = true; // 현재 노드 방문 처리
    cnt++;
    for(y of graph[x]) { // 현재 노드와 연결된 다른 노드를 재귀적으로 방문
        if(!visited[y]) dfs(y);
    }
}
dfs(1);
console.log(cnt-1);
