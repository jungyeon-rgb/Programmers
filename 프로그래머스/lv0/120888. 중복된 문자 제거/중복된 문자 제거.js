function solution(my_string) {
    const newMyString = [...new Set(my_string)].join('');
    return newMyString;
}
