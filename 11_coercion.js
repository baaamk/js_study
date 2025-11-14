/**
 * 타입 변환
 * 1) 명시적
 * 2) 암묵적
 */

//암묵적
let age = 32;

let test = age + '';
console.log(typeof test, test)

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

//Boolean 타입으로의 변환
/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */

console.log(!!"");    // false
console.log(!!0);     // false
console.log(!!null);  // false
console.log(!!undefined); // false

console.log(!!"hello"); // true
console.log(!!123);     // true
console.log(!!{});      // true
console.log(!![]);      // true
