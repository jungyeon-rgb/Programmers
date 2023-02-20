function solution(array) {
  let counts = {};
  let mode = -1;
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = num;
    }
  }

  let isMultipleMode = false;
  for (let key in counts) {
    if (counts[key] === maxCount && Number(key) !== mode) {
      isMultipleMode = true;
      break;
    }
  }

  return isMultipleMode ? -1 : mode;
}
