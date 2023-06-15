let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let answer = input[0].trim().split(" ");

if (answer == "") {
    console.log(0);
}
else {
    console.log(answer.length);
}