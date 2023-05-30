function solution(phone_number) {
  const length = phone_number.length;
  const visibleDigits = length - 4;
  const maskedDigits = '*'.repeat(visibleDigits);
  const lastDigits = phone_number.slice(visibleDigits);
  
  return maskedDigits + lastDigits;
}
