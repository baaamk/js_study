/**
 * Arrow 함수
 */

const multiply = (x, y) =>{
    return x * y;
}
console.log(multiply(3,4))

const multiply2 = (x, y) => x * y;
console.log(multiply2(4,5))

const multiply3 = x => y => z => `x: ${x} y:${y} z:${z}`;
console.log(multiply3(2)(5)(7))

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y:${y} z:${z}`
        }
    }
}
console.log(multiply6(3)(4)(5))

//arguments 를 쓰면 입력한 값들을 순서대로 반환받을 수 있다.
//[Arguments] { '0': 4, '1': 5, '2': 6 }
const multiplyThree = function(x,y,z){
    console.log(arguments)
    return x * y * z;
};

console.log(multiplyThree(4, 5, 6))

const multiplyAll = function(...args){;
    return Object.values(args).reduce((a, b)=> a * b, 1)
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

(function(x, y){
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object);
