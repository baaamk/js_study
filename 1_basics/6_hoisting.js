/**
 * Hoisting
 */

console.log('Hello')
console.log('World')

// console.log(name);
// var name = '방현우';
// console.log(name);


/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 얘기한다.
 * 나중에 더 자세히.
 */
// var name;
// console.log(name);
// name = '방현우';
// console.log(name);

//let, const는 값이 초기화 되기 전에 가져오는 버그를 방지할 수 있다.
// console.log(yuJin);
// let yuJin = '안유진';

console.log(yuJin2);
const yuJin2 = '안유진';
