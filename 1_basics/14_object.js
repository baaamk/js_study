/**
 * Objcet / 객체
 */

// key : value pair
let yujin = {
    name: '안유진',
    group: '아이브',
    dance: function(){
        return `${this.name}이 춤을 춥니다.`
    }
};

console.log(yujin);
console.log(yujin.name);
console.log(yujin['name']);

const key  = 'name';

console.log(yujin[key]);

console.log(yujin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance: function(){
        return `${this.name}이 춤을 춥니다.`
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '방현우';
console.log(yuJin2);

yuJin2['englishName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['englishName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브'
}

console.log(wonYoung);

// wonYoung ={}; 안된다.

/**
 * 모든 키 값 다 가져오기
 */
console.log(Object.keys(wonYoung));

/**
 * 모든 벨류 값 다 가져오기
 */
console.log(Object.values(wonYoung));


const name = '안유진';

const yujin3 = {
    // name: name 아래거랑 동일하다.
    name
};

console.log(yujin3)