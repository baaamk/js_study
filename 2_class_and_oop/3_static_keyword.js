/**
 * static keyword
 */
// IdolModel { name: '안유진', year: 2003 }
// 아이브
// 클래스 자체에 귀속된다. 인스턴스에 귀속되지 않는다.
// class IdolModel{
//     name;
//     year;
//     static gruopName = '아이브';

//     constructor(name, year){
//         this.name = name;
//         this.year = year;
//     }

//     static returnGruopName(){
//         return this.gruopName;
//     }
// }

// const yujin = new IdolModel('안유진', 2003);
// console.log(yujin);

// console.log(IdolModel.gruopName);
// console.log(IdolModel.returnGruopName());

/**
 * factory constructor
 */

class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static fromObjcet(objcet){
        return new IdolModel(
            objcet.name,
            objcet.year
        );
    }
}

const yuJin2 = IdolModel.fromObjcet({
    name: '안유진',
    year: 2003
});

console.log(yuJin2);
