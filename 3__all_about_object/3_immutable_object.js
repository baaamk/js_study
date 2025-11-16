/**
 * Immutable Object
 */

const yujin = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

/**
 * Extensible(삭제는 가능, 추가는 불가능)
 */

console.log(Object.isExtensible(yujin));

yujin['position'] = 'vocal';

Object.preventExtensions(yujin);

console.log(Object.isExtensible(yujin));

yujin['groupName'] = '아이브';
//에러를 던지지 않음
console.log(yujin);

delete yujin['position'];
console.log(yujin);

/**
 * Seal configurable을 false로 고정하는 것과 효과 같다.
 */

const yujin2 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(Object.isSealed(yujin2));

Object.seal(yujin2);
console.log(Object.isSealed(yujin2));

yujin['groupName'] = '아이브';
//에러를 던지지 않음
console.log(yujin2);

delete yujin['position'];
console.log(yujin2);

Object.defineProperty(yujin2, 'name',{
    value: '방현우'
});
console.log(Object.getOwnPropertyDescriptor(yujin2, 'name'));
console.log(yujin2);

/**
 * Freezed
 * 
 * 읽기 외에 모든 기능을 불가능하게 만든다.
 */

const yujin3 = {
    name: '안유진',
    year: 2003,

    get age(){
        return new Date().getFullYear - this.year;
    },

    set age(age){
        this.year = new Date().getFullYear - age;
    }
}

console.log(Object.isFrozen(yujin3));

Object.freeze(yujin3);

yujin3['groupName'] = '아이브';
console.log(yujin3);
delete yujin3['name'];
console.log(yujin3);

// Object.defineProperty(yujin3, name, {
//     value:'방현우'
// }) -> 에러 난다.

console.log(Object.getOwnPropertyDescriptor(yujin3, 'name'));


const yujin4 ={
    name: '안유진',
    year: 2003,
    wonYoung: {
        name:'장원영',
        year: 2002
    }
};

Object.freeze(yujin4);

console.log(Object.isFrozen(yujin4));
console.log(Object.isFrozen(yujin4['wonYoung']));

//상위 오브젝트를 freeze, seal, Extensible 한다 해서 하위 오브젝트가 적용되지 않음.