---
title: "Recoil 을 사용하면서"
date: "2023-12-12"
category: "React"
summary: "React Recoil을 사용하면서 헷갈렸던 점"
thumbnail: './logo.png'
slug: "react-recoil-study"
---

React로 개발을 하면서 많은 상태 관리 라이브러리들이 있지만 Recoil을 직접적으로 도입하게 된 점과 직접 도입하면서 스스로 애매했던 상황에 대한 기록을 해보려고 한다.


### 왜 Recoil일까?
이미 많이 사용되고 있는 라이브러리 (Redux, MobX) 는 여전히 많이 사용되고 있고 굳이 새로운 라이브러리가 필요한가에 대한 고민을 했었다. 하지만 recoil은 react 전용 상태관리 라이브러리이기 때문에 react 내부 접근이 가능하다. (React 동시성 모드, Suspend 등)

또한 다른 라이브러리와 다르게 현저히 적은 코드양으로 작업이 가능하다는 장점이 아주 크게 다가왔다.



## Atom
> atom은 하나의 상태 단위이다. subscribe가 가능하여 atom이 업데이트되면 해당 state를 사용하는 컴포넌트는 업데이트 된 값을 반영하여 렌더링한다.

```
export const countState = {
	key: 'countState',
    default: 0
}
```

---
## Hook

#### useRecoilState
컴포넌트에서 atom을 읽고 쓰려면 useRecoilState 훅을 사용한다. (useState와 동일하게 사용 가능)
```
const Component = () => {
	const [count, setCount] = useRecoilState(countState);
    
    return (
    	<button onClick={() => {
        		setCount((prev) => prev + 1))
        	})
        />
    )
}
```

#### useRecoilValue
setter없이 atom의 값만 반환
```
const count = useRecoilValue(countState);
```


#### useSetRecoilState
setter 함수 반환

```
const setCount = useSetRecoilState(countState);
```

---
## Selector

사용하면서 가장 헷갈렸던 개념이기도 하다. selector는 state를 기반으로 데이터 계산하는 데 사용된다. 즉 최소한의 state를 atom으로 저장하고 계산해야하는 데이터는 필요할때마다 계산하거나 다른 atom 저장 필요없이 selector로 관리한다.

```
// 학생 정보 atom
const studentState = atom({
    key: 'studentState',
    default: [
        {
            name: 'Tom',
            grade: 'A'
        },
        {
            name: 'Jane',
            grade: 'B'
        }
    ]
})

// 학생 필터링
const studentFilterState = atom({
    key: 'studentFilterState',
    default: 'Tom'
})

// 필터링 목록
const filteredStudentState = selector({
    key: 'filteredStudentState',
    get: ({get}) => {
        const student = get(studentState)
        const filter = get(studentFilterState)

        return student.filter(item => item.name === filter)
    }
})
```

---

