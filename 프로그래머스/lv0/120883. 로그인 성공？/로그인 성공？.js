function solution(id_pw, db) {
  let findId = db.filter((e) => e[0] === id_pw[0]);
  let findPw = findId.filter((e) => e[1] === id_pw[1]);

  if (!!findPw.length) return 'login';
  else if (!!findId.length) return 'wrong pw';
  return 'fail';
}