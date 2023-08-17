const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0]) // 입력의 첫 번째 줄에 있는 정수를 가져와 트리의 노드 수 N으로 지정

const graph = [] // 무방향 그래프(트리)를 저장하기 위한 배열 graph 생성
const visited = Array(N+1).fill(0) // 방문 여부를 나타내는 배열 visited 생성, 모든 값을 0으로 초기화
const answer = Array(N+1) // 각 노드의 부모 노드를 저장할 배열 answer 생성
for(let i=0; i<=N; i++) { // 노드의 개수에 맞게 각 노드의 연결 정보를 저장할 빈 배열을 초기화하는 역할
    graph[i] = []
}

for(let i=1;i<N;i++) { // 입력으로부터 노드의 연결 정보를 읽어와서 무방향 그래프인 graph에 해당 정보를 저장
    const [from,to] = input[i].split(' ').map(Number)
    graph[from].push(to) // from 노드에서 to 노드로 연결되는 정보를 graph 배열의 from 위치에 저장
    graph[to].push(from) // to 노드에서 from 노드로 연결되는 정보도 마찬가지로 graph 배열의 to 위치에 저장
}

function dfs(s) { // dfs를 이용해 노드의 부모 노드를 찾는 함수 정의
    visited[s] = 1 // 현재 노드를 방문한 것을 표시
    for(let n of graph[s]) { // 현재 노드에 연결된 노드들을 탐색
        if(!visited[n]) { // 방문하지 않은 노드인 경우에만 아래의 동작을 수행
            answer[n] = s // 현재 노드 s를 방문한 노드 n의 부모 노드로 설정
            dfs(n) // 방문하지 않은 노드에 대해 재귀적으로 dfs 탐색 수행
        }
    }
}

dfs(1) // 루트 노드부터 dfs 탐색을 시작하여 각 노드의 부모 노드를 찾음
let result = answer.slice(2).join('\n') // answer 배열에서 2번 인덱스(2번 노드)부터 시작하여 각 노드의 부모 노드를 문자열로 변환하고 줄바꿈 문자('\n')로 연결
console.log(result)