/**
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

//push
console.log(iveMembers.push('방현우'));
console.log(iveMembers);

//pop() 마지막 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

//shift() 처음 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() 처음 넣기
console.log(iveMembers.unshift('안유진'))
console.log(iveMembers);

//splice(index, 개수)
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

//concat() 원래 array 변경 x
console.log(iveMembers.concat('방현우'));
console.log(iveMembers);

//slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator
// 리스트 [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ]
// [ [ '안유진', '가을', '레이', '장원영', '리즈', '이서' ] ]
let iveMembers2 = [
    ...iveMembers,
]
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
]
console.log(iveMembers3);


let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

// console.log([
//     ...iveMembers,
// ] === iveMembers); => false

//join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순
iveMembers.sort();
console.log(iveMembers);
console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3
];

//a, b르 비교했을 때
//1) a를 b 보다 나중에 정렬하려면 0보다 큰 숫자를 반환
//2) a를 b 보다 먼저 정렬하려면 0보다 작은 숫자를 반환
//3) 원래 순서를 그대로두려면 0을 반환
numbers.sort((a,b)=>{
    return a > b ? 1 : -1;
})

console.log(numbers);

// function sort(arr, compare) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       // 두 값을 비교
//       const result = compare(arr[i], arr[j]);

//       // 🔥 여기!! 이 조건 때문에 양수면 "뒤로" 감
//       if (result > 0) {
//         // a를 뒤로 보내기 위해 둘의 자리를 바꿈
//         const temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//       // result <= 0이면 아무것도 안 함 (순서 유지)
//     }
//   }
// }

numbers.sort((a,b)=>{
    return a > b ? -1 : 1;
})
console.log(numbers);

//map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) =>{
    if(x === '안유진'){
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));
console.log(iveMembers);

//filter()
numbers = [1, 8, 7, 6, 3];
console.log(numbers.filter((x)=>true));

console.log(numbers.filter((x) => x % 2 === 0));

//find() 맨 첫 값만.
console.log(numbers.find((x) => x % 2 === 0));

//findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce((p, n) => p + n, 0));

// reduce() 퀴즈
// reduce() 함수를 이용해서 iveMembers 변수에 있는 모든 스트링 값들의 길이를 더해서 반환하라.
// 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
console.log(iveMembers.reduce((p, n) => p + n.length, 0));
