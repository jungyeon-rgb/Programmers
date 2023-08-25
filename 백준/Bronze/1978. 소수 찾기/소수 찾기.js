var fs = require('fs');
var inputs = fs.readFileSync('/dev/stdin').toString().split('\n');
var cases = Number(inputs[0]);
var splited = inputs[1].split(' ').map((item) => Number(item));
var answer = 0;
for(var i=0; i<splited.length; i++){
    if(splited[i] === 1){
        continue;
    }else{
        var count = 0;
        for(var j=2; j<splited[i]; j++){
            if(splited[i]%j === 0){
                count++;
            }
        }
        if(count === 0){
            answer++;
        }
    }
}
console.log(answer)