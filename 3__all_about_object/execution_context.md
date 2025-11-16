<img width="2541" height="1363" alt="Image" src="https://github.com/user-attachments/assets/bf5c1962-582d-48a9-b86b-5adebcd3d779" />

# **Execution Context?**

* **Execution Context**는 실행하려는 JS 코드와 코드를 실행할 때 필요한 정보를 담고있는 특수한 환경이다. 코드 실행에 필요한 모든 데이터를 들고있는 환경이라고 생각하면 된다.

* **Execution Context**는 크게 두개로 나뉘어진다.

  * **Global Context** → 최상위 Execution Context다. 코드를 실행하면 무조건 생성되는 context로 웹에서의 window 객체나 nodeJS에서의 global 객체를 생성하고 들고있다.
  * **Function Context** → 함수가 실행될 때마다 함수별로 실행되는 context다. 함수 실행에 대한 모든 정보를 갖고있다.


# **Execution Context Stack**

## **Creation Phase**

* **Global Object를 생성한다.** window 또는 global 객체가 생성되고 함수에서는 arguments 객체가 생성된다.
* **this를 window 또는 global에 바인딩한다.**
* **변수와 함수를 Memory Heap에 배정하고 기본 값을 undefined로 저장한다.**

## **Execution Phase**

* **코드를 실행한다.**
* **필요하다면 새로운 Execution Context를 생성한다.**

```
function outer() {
  let a = 1;

  function inner() {
    console.log(a);
  }

  return inner;
}

const fn = outer();
fn(); // 1
```

```
outer EC
 ├─ EnvironmentRecord: { a: 1 }
 └─ OuterReference: Global

inner EC
 ├─ EnvironmentRecord: { }
 └─ OuterReference: outer의 EnvironmentRecord
 ```
 