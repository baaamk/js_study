/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
    console.log(numberOne);
}

// levelOne(); 호이스팅

function levelOne(){
    var numberOne = 40;
    console.log(numberOne);
}

// levelOne();

console.log(numberOne);

function levelOne() {
    var numberOne = 40; 

    function levelTwo(){
    
        var numberTwo = 99; 
        console.log(`levelTwo numberTwo : ${numberTwo}`);
        console.log(`levelTwo numberOne : ${numberOne}`);
    }

    levelTwo();
    console.log(`levelOne numberOne : ${numberOne}`);
}

levelOne();

/**
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어 낸다.
 */
