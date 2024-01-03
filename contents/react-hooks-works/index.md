---
title: "[React] React Hooks 동작 원리"
date: "2024-01-03"
category: "React"
summary: "리액트 훅의 동작 원리"
thumbnail: './logo.png'
slug: "react-hooks-works"
---

무심코 사용하던 React hook 동작 원리를 하나씩 자세하게 파헤쳐 보려고 한다.

React hook은 v16.8에서 추가된 기능이다.

현재 React를 사용하는 개발자라면 누구나 함수형 컴포넌트를 통해 개발을 하고 당연히 React에서 제공하는 훅을 사용할 것이다.

## 1. 클로저 (Closure)

### 클로저란?

Javascript 개발자라면 익숙할 개념 클로저에 대해 간단하게 살펴보자.

> 함수가 선언된 시점의 스코프에서 변수를 참조할 수 있는 자바스크립트의 특성

1. 컴파일 단계에서 변수, 함수 등이 메모리에 저장되고 이 과정에서 함수는 자신이 선언된 시점의 스코프를 기억한다.

2. 함수가 호출되면, 해당 함수 실행 컨텍스트 생성되고 이때 실행 컨텍스트에는 함수 스코프 체인, 함수 내부 변수, this 정보 등 포함

3. 함수 내부에서 외부 함수 변수를 참조하면 현재 함수 스코프 체인을 따라가 해당 변수를 찾는다. (함수 스코프 -> 외부함수 스코프 -> 전역 스코프 순)

4. 함수가 종료되어도 함수가 참조하고 있던 외부 변수가 다른 곳에서 사용되고 있다면, 그 변수는 메모리에서 해체 되지 않는다. 즉, 함수 종료 후에도 함수 실행 컨텍스트에 포함되었던 외부 변수에 접근할 수 있는 것이 클로저이다.

```
function outer() {
	const x = 1;
    const inner = () => {
    	console.log(x);
    }
    inner();
}

outer();
```

위 코드에서 outer 함수는 종료되었지만, outer 함수 내부에서 선언된 x 변수는 inner 함수에서 참고하고 있기 때문에 메모리에서 해제되지 않는다.

이후 inner 함수를 호출하면 자신이 선언되었던 시점의 스코프를 기억하고 있으므로 x에 접근하여 값을 출력할 수 있다.

_**함수가 선언된 스코프를 '기억'하고 그 스코프 변수에 접근할 수 있는 특성이 클로저이다.**_

### 클로저 활용 예시

#### 클로저를 사용하지 않는 경우

```
let count = 0;

function increase() {
	count++;
    console.log(count);
}

increase(); // 1
increase(); // 2

// 코드에서 count를 변경하면 예상치 못한 결과 출력
count = 100;
increase(); // 101
```

위 코드에서 count는 전역 변수로 increase 함수에서 사용되고 있고, 프로그램이 실행되는 도중 어떤 다른 코드에서 count가 변경이 되면 count값이 의도치 않게 변경될 수 있다.

#### 클로저를 사용하는 경우

```
function createCount() {
	let count = 0;

    return function increase() {
    	count++;
        console.log(count);
    }
}

const counter = createCount();

counter(); // 1
counter(); // 2
counter(); // 3

```

위 코드에서 createCount 함수는 increase 함수를 반환한다. increase 함수는 변수 count를 참조하고 있고 createCount 함수가 종료된 이후에도 count에 접근이 가능하다. 이렇게 선언된 count 변수는 외부에서 변경할 수 없다. 또한 이렇게 함수는 선언된 스코프 시점을 기억한다.

---

## 2. useState 구현

### 기본적인 형태

```
function useState(initialValue) {
	let _val = initialValue;

    function state() {
    	return _val;
    }

    function setState(newVal) {
    	_val = newVal;
    }

    return [state, setState]
}

const [getCount, setCount] = useState(0);

console.log(getCount()); // 0
setCount(1);
console.log(getCount()); // 1
```

위 코드는 useState의 가장 기본적인 형태를 구현했다. 함수 내부에 state와 setState 두 개의 내부함수가 있다. state는 \_val을 반환하고 setState는 업데이트를 위해 전달 된 newVal의 값으로 업데이트한다.

### 함수형 컴포넌트 (모듈)

```
const MyComp = (() => {
	let _val;

    return {
    	render(Component) {
        	const Comp = Component();

            Comp.render();
            return Comp
        },
        useState(initialValue) {
        	_val = _val || initialValue;

            function setState(newVal) {
            	_val = newVal;
            }

            return [_val, setState]
        }
    }
}

```

```
// 활용
const Component = () => {
	const [count, setCount] = MyComp.useState(0);

    return {
    	onClick: () => setCount(count + 1),
        render: () => console.log('render: ', {count})
    }
}
```

---

## 3. useEffect 구현

### 기본형태

```
function useEffect(callback, deps) {
	let _deps; // 이전 의존성 배열 저장

    const hasNoDeps = !deps; // 의존성 배열이 없는 경우
    const hasChangedDeps = _deps ? !deps.every((el, i) => el === _deps[i]) : true; // 의존성 배열이 변경된 경우

    if(hasNoDeps || hasChangedDeps) {
    	callback(); // 사이드 이펙트를 수행하는 함수 실행
        _deps = deps; // 의존성 배열 업데이트
    }
}
```

위 코드에서 useEffect는 첫번째 인자로 받은 콜백함수를 실행한다. 이 때, 의존성 배열이 없거나 이전에 저장한 의존성 배열과 다를 경우 콜백함수를 실행한다.

위와 같이 의존성 배열 값이 변경될 때만 사이드 이펙트를 수행하는데 이는 우리가 흔히 사용하는 react에서 제공하는 훅인 useEffect와 똑같은 기능을 수행한다고 볼 수 있다.

### 함수형 컴포넌트 (모듈)

```
const MyComp = () => {
	let _val, _deps;

    return {
    	render(Component) {
        	const Comp = Component();

            Comp.render();
            reurn Comp;
        },
        useEffect(callback, deps) {
        	const hasNoDeps = !deps;
            const hasChangedDeps = _deps ? !deps.every((el, i) => el === _deps[i]) : true;

            if(hasNoDeps || hasChangedDeps) {
            	callback();
                _deps = deps;
            }
        },
        useState(initialValue) {
        	_val = _val || initialValue;

            function setState(newVal) {
            	_val = newVal;
            }

            return [_val, setState]
        }
    }
}
```

```
// 활용
const Component = () => {
	const [count, setCount] = MyComp.useState(0);

    MyComp.useEffect(() => {
    	console.log('effect', count);
    }, [count])

    return {
    	onClick: () => setCount(count + 1),
        noop: () => setCount(count),
        render: () => console.log('render: ', {count})
    }
}

let App;

App = MyReact.render(Component)
// effect 0
// render: {count: 0}

App.onClick()
App = MyReact.render(Component)
// effect 1
// render: {count: 1}

App.noop()
App = MyReact.render(Component)
// useEffect가 실행되지 않음
// render {count: 1}

```

---

## 결론

단순히 '~~_React에서 사용하라고 했으니까 사용해야지_~~' 라고 생각하며 사용했던 다양한 기능이 미약하게나마 이해할 수 있었다.

리액트 훅은 컴포넌트의 최상단에서만 사용되어야 하는 이유를 조금은 이해할 수 있었다.

**호출의 일관성**: 리액트는 훅의 호출 순서를 기억하고 이를 통해 상태와 사이드 이펙트를 관리하는데 만약 훅이 조건문, 반복문, 함수 등에 의해 순서가 바뀐다면, 이전에 기억한 훅의 상태와 현재 훅의 상태를 매칭하지 못하기 때문에 예상치 못한 문제가 발생한다.

**상태 관리**: 위에서 살펴본 useState나 useEffect 같은 훅은 내부적으로 클로저를 이용하여 상태를 관리하는데 각 훅의 호출 순서에 따라 독립적인 상태를 생성하고 관리한다. 만약 훅의 호출 순서가 바뀌면 각 상태는 잘못된 위치에서 관리될 가능성이 있다.

**위 내용은 [링크](https://hewonjeong.github.io/deep-dive-how-do-react-hooks-really-work-ko/) 를 참조하였고 나름의 이해를 통해 정리한 내용입니다.**
