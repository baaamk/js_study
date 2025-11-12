/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == ' ');
console.log(true == 1);
console.log(false == ' ');
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === ' ');
console.log(true === 1);
console.log(false === ' ');
console.log(true === '1');

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== ' ');
console.log(true !== 1);
console.log(false !== ' ');
console.log(true !== '1');

/**
 * 단축 평가(short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 * 
 */

console.log(true || '아이브')
console.log(false || '아이브')
console.log(true && '아이브')
console.log(false && '아이브')

console.log(true && true && '아이브')
console.log(true && false && '아이브')

/**
 * null 연산자
 */

let name;
console.log(name);

// ??좌측값이 null이거나 undefined면 오른쪽 값을 반환
name = name ?? '방현우';
console.log(name);

let name2;
name2 ??= '방현우';
console.log(name2);
