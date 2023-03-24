function solution(my_string) {
  return Array.prototype.map.call(my_string, (char) => {
    if (char >= "a" && char <= "z") {
      return char.toUpperCase();
    } else if (char >= "A" && char <= "Z") {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join("");
}
