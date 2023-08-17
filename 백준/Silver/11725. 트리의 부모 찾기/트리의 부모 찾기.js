const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0])

const graph = []
const visited = Array(N+1).fill(0)
const answer = Array(N+1)
for(let i=0; i<=N; i++) {
    graph[i] = []
}

for(let i=1;i<N;i++) {
    const [from,to] = input[i].split(' ').map(Number)
    graph[from].push(to)
    graph[to].push(from)
}

function dfs(s) {
    visited[s] = 1
    for(let n of graph[s]) {
        if(!visited[n]) {
            answer[n] = s
            dfs(n)
        }
    }
}

dfs(1)
let result = answer.slice(2).join('\n')
console.log(result)