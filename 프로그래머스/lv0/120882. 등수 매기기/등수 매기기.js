function solution(score) {
  var n = score.length;
  var ranks = new Array(n).fill(1);
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if (score[i][0] + score[i][1] < score[j][0] + score[j][1]) {
        ranks[i]++;
      }
    }
  }
  return ranks;
}
