let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input.shift()); // 입력에서 첫 줄의 노드 개수 추출
let result = ''; // 이진 트리 순회 결과를 저장하는 변수

const tree = {}; // 노드와 자식 정보를 저장하는 객체 생성
for (let i = 0; i < N; i++) {
  const [node, left, right] = input[i].split(" "); // 입력에서 노드와 자식 정보 추출
  tree[node] = [left, right]; // 노드와 그 자식을 tree 객체에 저장
}

// 전위 순회를 위한 재귀 함수
function preorder(node) {
  if (node === ".") return; // 기저 조건: 현재 노드가 '.'이면 반환
  const [left, right] = tree[node]; // 현재 노드의 자식 정보 추출
  result += node; // 현재 노드를 결과에 추가
  preorder(left); // 왼쪽 서브트리를 재귀적으로 탐색
  preorder(right); // 오른쪽 서브트리를 재귀적으로 탐색
}

// 중위 순회를 위한 재귀 함수
function inorder(node) {
  if (node === ".") return; // 기저 조건: 현재 노드가 '.'이면 반환
  const [left, right] = tree[node]; // 현재 노드의 자식 정보 추출
  inorder(left); // 왼쪽 서브트리를 재귀적으로 탐색
  result += node; // 현재 노드를 결과에 추가
  inorder(right); // 오른쪽 서브트리를 재귀적으로 탐색
}

// 후위 순회를 위한 재귀 함수
function postorder(node) {
  if (node === ".") return; // 기저 조건: 현재 노드가 '.'이면 반환
  const [left, right] = tree[node]; // 현재 노드의 자식 정보 추출
  postorder(left); // 왼쪽 서브트리를 재귀적으로 탐색
  postorder(right); // 오른쪽 서브트리를 재귀적으로 탐색
  result += node; // 현재 노드를 결과에 추가
}

preorder("A"); // 전위 순회 시작
result += "\n"; // 결과에 줄바꿈 추가
inorder("A"); // 중위 순회 시작
result += "\n"; // 결과에 줄바꿈 추가
postorder("A"); // 후위 순회 시작

console.log(result); // 결과 출력
