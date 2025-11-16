/**
 * Async theory
 */
// function longWork(){
//     const now = new Date();

//     /**
//      * milliseconds since epoch
//      * 1970년도 1월 1일 부터 지금 코드가 실행되는 순간까지의 시간을 
//      * 밀리초로 반환한다.
//      */

//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds + 2 * 1000;

//     while(new Date().getTime() < afterTwoSeconds){

//     }

//     console.log('완료');

// }

// // console.log('Hello');
// // longWork();

// // console.log('World');

// function longWork(){
//     setTimeout(()=>{
//         console.log('완료');
//     }, 2000)
// }

// console.log('Hello');
// longWork();
// console.log('World');

/**
 * Callback
 */

// function waitAndRun(){
//     setTimeout(()=>{
//         console.log('끝')
//     }, 2000)
// }

// waitAndRun();

// function waitAndRun2(){
//     setTimeout(
//         ()=>{
//             console.log('1번 콜백 끝');

//             setTimeout(()=>{
//                 console.log('2번 콜백 끝')
//                 setTimeout(()=>{
//                     console.log('3번 콜백 끝');
//                 }, 2000);
//             }, 2000)
//         },2000)
// }

// waitAndRun2();

/**
 * Promise
 */

// const timeoutPromise = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('완료');
//     }, 2000)
// });

// timeoutPromise.then((res)=>{
//     console.log('===then===')
//     console.log(res);
// });

const getPromise = (seconds)=> new Promise((resolve, reject) => {
     setTimeout(()=>{
        resolve('에러');

     }, seconds * 1000);

});

// getPromise(1)
//     .then((res)=> {
//         console.log(res);
//     })
//     .catch((res)=>{
//         console.log(res);
//     })
//     .finally(()=>{
//         console.log('==finally==');

//     });

Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(1)
]).then((res)=>{
    console.log(res);

});
