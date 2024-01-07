---
title: "useEffect vs useLayoutEffect"
date: "2024-01-07"
category: "React"
summary: "useEffect와 useLayoutEffect의 차이에 대해 아는가?"
slug: "react-use-effect-use-layout-effect"
---

## 시작하며

React에서 제공하는 Hook인 `useEffect`와 `useLayoutEffect`는 동일한 작업을 수행하지만 동작 시점에 차이가 있다. 
실제로 나 역시 개발을 할때 대부분 `useEffect`를 사용하지만 분명 `useLayoutEffect` 존재의 이유에 대한 궁금증이 생겼고 어떤 차이가 있는지 자세하게 기록하려고 한다.


## useEffect vs useLayoutEffect

> useEffect는 랜더링 이후 동작 vs useLayoutEffect는 랜더링 이전 동작

사실 위 한 문장이면 간단하게 설명이 끝났다..

근데 한가지 상황을 가정해보자.

만약 상태에 따라 버튼이 조건부 랜더링 된다고 생각했을때 `useEffect`를 사용하면 사용자가 깜빡임을 경험할 수 있다. 이를 방지하기 위해서 `useLayoutEffect`를 사용하여 개선하면 되지 않을까?

일단 자세히 하나씩 훅을 알아보기 전에 render와 paint에 대해 알아보자.

- render: DOM Tree를 생성하는 과정
- paint: 실제 스크린에 레이아웃을 그리는 과정

결국 위 두가지의 개념에서 순서를 따져보면 render는 paint전에 DOM Tree를 생성하고 paint는 생성된 DOM Tree를 스크린에 그리는 과정이다.


## useEffect

> 📄 render -> paint -> useEffect

`useEffect`는 paint가 끝난 이후 동작한다. `useEffect`를 사용하여 화면을 업데이트하면 사용자가 깜빡임을 경험할 수 있다.


## useLayoutEffect

> 📄 render -> useLayoutEffect -> paint

`useLayoutEffect`는 render가 끝난 이후 동작한다. `useLayoutEffect`를 사용하여 화면을 업데이트하면 사용자가 깜빡임을 경험하지 않는다.

React 공식문서에 따르면 `useLayoutEffect`는 동기적으로 동작한다고 설명하고 있다. 즉 성능에 영향을 줄 수 있다는 것이다. React 공식문서에서도 `useEffect`를 사용하는 것을 권장하고 있다.


## 마치며
두 훅의 차이점은 결국 실행이 되는 시점이다. 따라서 상황을 인지하고 사용하는 것이 중요하다.

