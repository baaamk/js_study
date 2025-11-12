const yuJin = {
    name: '안유진',
    year: 2003,
    group: '아이브'
}

for(let key in yuJin){
    console.log(key);
}

const iveMembersArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

for(let key in iveMembersArray){
    console.log(key);
    console.log(`${key}:${iveMembersArray[key]}`)
}

/**
 * for...of
 */

for(let value of iveMembersArray){
    console.log(value);
}