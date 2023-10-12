// 하나의 그래프안에 포함된 트리의 개수를 세는 문제
// 트리는 사이클이 없는 연결 요소이기 때문에 dfs를 이용해 트리의 개수를 계산

// 특정 노드에서 dfs를 수행하는 과정에서 인접 노드가 이미 방문한 노드라면 사이클
// 무방향 그래프이기 때문에 직전 노드는 제외해야 함

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

function isCycle(node, parent) {
    visited[node] = true;

    for (let neighbor of graph[node]) {
        if (!visited[neighbor]) {
            if (isCycle(neighbor, node)) return true;
        } else if (neighbor !== parent) {
            return true; // 인접 노드가 이미 방문된 경우 사이클
        }
    }

    return false;
}

let line = 0;
let testCase = 1;
while(true) {
    let [n,m] = input[line].split(' ').map(Number);
    if(n==0 && m==0) break; // 노드의 개수(N)와 간선의 개수(M)
    graph = []; // 트리 정보 입력받기
    for(let i=1; i<=n; i++) graph[i] = [];
    for(let i=1; i<=m; i++) {
        let [x,y] = input[line+i].split(' ').map(Number);
        graph[x].push(y);
        graph[y].push(x);
    }
    visited = new Array(n+1).fill(false); // 방문 처리 배열
    let cnt = 0; // 그래프 내 트리의 개수
    for(let i=1; i<=n; i++) { // 하나씩 노드를 확인하며
        if(!visited[i]) { // 연결 요소이면서
            if(!isCycle(i, 0)) cnt++; // 사이클이 아니라면 트리이므로, 카운트하기
              }
    }
    if(cnt==0) console.log(`Case ${testCase}: No trees.`);
    else if(cnt == 1) console.log(`Case ${testCase}: There is one tree.`);
    else console.log(`Case ${testCase}: A forest of ${cnt} trees.`);
    line += m+1; // 다음 테스트 케이스로 이동
    testCase++;
}