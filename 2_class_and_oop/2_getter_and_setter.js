class IdolModel{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    get nameAndYear(){
        return `${this.name} - ${this.year}`; 
    }

    set setName(name){
        this.name = name;
    }
}

const yujin = new IdolModel('안유진', 2003);
console.log(yujin);
console.log(yujin.nameAndYear)

yujin.setName = '장원영';
console.log(yujin);

class IdolModel2{
    #name;
    year;

    constructor(name, year){
        this.#name = name;
        this.year = year;
    }

    get nameAndYear(){
        return `${this.#name} - ${this.year}`; 
    }

    set name(name){
        this.#name = name;
    }
}

const yujin2 = new IdolModel2('안유진', 2003);
console.log(yujin2.nameAndYear);

yujin2.name = '방현우';
console.log(yujin.nameAndYear);

