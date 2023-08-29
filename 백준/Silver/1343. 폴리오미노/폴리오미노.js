const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

// AAAA, BB만 가능하니까 4,2길이가 아니면 -1
// .기준으로 문자열 나누기
// AAAA, BB 대체할 수 있게 4글자, 2글자 찾아서 바꾸기

function solve(board) {
  board = board.split(".");
  let result = '';
 
  for (let i = 0; i < board.length; i++) {
    let length = board[i].length;
 
    if ((board[i].length % 4) % 2 !== 0) {
      return "-1";
    }
 
    const first = Math.floor(board[i].length / 4);
    const second = Math.floor((board[i].length % 4) / 2);
 
    board[i] = "AAAA".repeat(first) + "BB".repeat(second);
  }
 
  return board.join(".");
}
 
console.log(solve(input[0]));
