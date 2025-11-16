/**
 * this 키워드가 어떤걸 가르키냐는 세가지만 기억하면 된다.
 * 
 * 1) 일반 함수 호출일땐 this가 최상위 객체를 가리킨다.
 * 2) 메서드로 호출할땐 호출된 객체를 가리킨다.
 * 3) new 키워드를 사용해서 객체를 생성했을 땐 객체를 가리킨다.
 */

const { Zap } = require("lucide-react");

/**
 * 1) apply()
 * 2) call()
 * 3) bind()
 */

function returnName(){
    return this.name;
}

console.log(returnName());

const yujin3 = {
    name: '안유진'
}

console.log(returnName.call(yujin3));
console.log(returnName.apply(yujin3));

/**
 * 1) call -> 컴마를 기반으로 아규먼트를 순서대로 넘겨주고
 * 2) apply -> 아규먼트를 리스트로 입력해야 한다.
 */
function multiply(x,y,z){
    return `${this.name} / 결과값 : ${x * y * z}`;

}

console.log(multiply.call(yujin3, 3, 4, 5));
console.log(multiply.apply(yujin3, [3, 4, 5]));

/**
 * bind() 바로 함수 실행 x
 */

const laterFuc = multiply.bind(yujin3, 3, 4, 5);
console.log(laterFuc);

console.log(laterFuc());

