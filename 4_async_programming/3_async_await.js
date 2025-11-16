/**
 * Async / Await _> Promise 만 가능하다!!
 * reject는 try-catch를 해야됨.
 */

const getPromise = (seconds)=> new Promise((resolve, reject) => {
     setTimeout(()=>{
        resolve('완료');

     }, seconds * 1000);
});

async function runner() {
    const result1 = await getPromise(1);
    console.log(result1);
}
runner();

console.log('실행 끝');
