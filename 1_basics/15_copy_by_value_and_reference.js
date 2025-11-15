/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 primitive 값은 copy by value다.
 * 2) 객체는 copy by referce다.
 */

const { ConstructionIcon } = require("lucide-react");

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.'
console.log(original);
console.log(clone);

let originalObj = {
     name: '안유진',
     group: '아이브'
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

originalObj['group'] = '방현우';
console.log(originalObj);
console.log(cloneObj);


/**
 * Spread Operator
 */

let yujin3 = {
     name: '안유진',
     group: '아이브'
};

const yujin4 = {
    ...yujin3
};
console.log(yujin4 === yujin3);

