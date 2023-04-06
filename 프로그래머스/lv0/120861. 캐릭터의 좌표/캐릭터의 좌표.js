function solution(keyinput, board) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < keyinput.length; i++) {
    const move = keyinput[i];
    switch (move) {
      case "up":
        if (y < (board[1] - 1) / 2) y++;
        break;
      case "down":
        if (y > -(board[1] - 1) / 2) y--;
        break;
      case "left":
        if (x > -(board[0] - 1) / 2) x--;
        break;
      case "right":
        if (x < (board[0] - 1) / 2) x++;
        break;
    }
  }
  return [x, y];
}
