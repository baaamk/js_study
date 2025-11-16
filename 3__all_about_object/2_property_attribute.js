/**
 * Property Attribute
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고 있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 갖고 있지 않지만 다른 값을 가져오거나
 *                    설정할 때 호출되는 함수로 구성되 프로퍼티 ex) getter setter
 */

const { TurkishLira } = require("lucide-react");

const yujin = {
    name: '안유진',
    year: 2003
};

console.log(Object.getOwnPropertyDescriptor(yujin, 'name'));

/**
 * 1) value - 실제 프로퍼티의 값
 * 2) writable - 값을 수정할 수 있는지 여부, false로 설정하면 프로퍼티 값을 수정할 수 없다.
 * 3) enumerable - 열거가 가능한지 여부. for...in 루프 등을 사용할 수 있으면 true 반환
 * 4) configurable - 프로퍼티 어트리뷰의 재정의가 가능한지 여부를  판단. false 일 경우 프로퍼티 삭제나 어트리뷰트 변경이 금지
 *                   단, writable이 true 인 경우 값 변경과 writable을 변경하는건 가능
 */

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear() - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear() - age;
    }
}

console.log(yujin2.age);

yujin2.age = 32;

console.log(yujin2.age);
console.log(yujin2.year);

Object.defineProperty(yujin2, 'height', {
    value: 172,
    writable: true,
    enumerable: true,
    configurable: true
})

console.log(yujin2);
