const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.text";
let [A, B, C, M] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

let time = 0;
let tired = 0;
let worked = 0;
while (time !== 24) {
  if (A > M) break;
  time++;
  if (tired + A <= M) {
    worked += B;
    tired += A;
  } else {
    tired - C >= 0 ? (tired -= C) : (tired = 0);
  }
}
console.log(worked);