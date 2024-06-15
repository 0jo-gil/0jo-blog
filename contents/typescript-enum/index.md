---
title: "TypeScript Enum(이넘)"
date: "2024-04-14"
category: ["TypeScript"]
summary: "TypeScript Enum 다양한 활용법과 개념에 대한 정리"
thumbnail: '../assets/react/logo.png'
slug: "typescript-enum"
---

## Enum(이넘) 이란?
기존에 Java 프로그래밍을 해본 사람이라면 Enum(이넘)이 익숙할 것이라고 생각한다. JavaScript에는 이넘이 없지만 TypeScript에서는 이넘을 지원한다. 

이넘은 특정 값의 집합을 의미하는 데이터 타입이다. 상수 집합이라고도 표현한다.

---

## 왜 사용하지?
예를 들어 어느 식당에 메뉴판이 있다고 가정해보자. 아래 코드는 해당 식당에서 계산한 식사 값을 반환한다.

```typescript
function calculatePrice() {
	return 10000 + 50000;
}
```

위 코드에서 10000원? 5000원? 어떤 메뉴가 어떤 가격을 의미하는지 알 수 없다. 이런 경우 이넘을 사용하면 가독성이 높아진다.

```typescript
enum Menu {
	CHIKEN = 10000,
	PIZZA = 50000,
}
```

위와 같이 여러 개의 상수를 하나의 단위로 묶으면 이넘이 된다. 비슷한 성격이나 같은 범주에 있는 상수를 하나로 묶는다면 더 큰 단위에 상수로 묶어서 사용하는 것이 이넘의 역할이다.

---

## 숫자형 이넘
이넘에 선언된 속성은 기본적으로 숫자 값으로 초기화된다. 만약 초기화하지 않으면 0부터 시작하여 1씩 증가한다.

```typescript
enum Menu {
	CHIKEN, // 0
	PIZZA, // 1
}

console.log(Menu.CHIKEN); // 0
```
속성 값이 숫자로 지정되는 이유는 타입스크립트 규칙때문이다. 이넘을 자바스크립트로 컴파일한 결과는 아래와 같다.

```javascript
var Menu;
(function (Menu) {
	Menu[Menu["CHIKEN"] = 0] = "CHIKEN";
	Menu[Menu["PIZZA"] = 1] = "PIZZA";
})(Menu || (Menu = {}));
```

컴파일 결과 코드가 조금은 생소하게 느껴질 수 도 있지만, [] 안에 객체의 속성에서 각 숫자값을 할당하는데 이는 자바스크립트 동작에 따라 할당 연산자의 할당 값 0만남는다.

또한 기본적으로 이넘은 0부터 시작하지만, 다른 숫자로 시작하고 싶다면 초기화를 통해 설정할 수 있다.

---

## 문자형 이넘
문자형 이넘이란 속성 값에 문자열을 연결한 이넘을 의미한다. 숫자형 인머과 다르게 모든 속성 값을 다 문자열로 지정해준다.

```typescript
enum Menu {
	CHIKEN = 'CHIKEN',
	PIZZA = 'PIZZA',
}
```

이전 숫자열 이넘으로 관리하는 것 보다 문자열로 관리하는 것이 조금 더 명시적으로 관리할 수 있다.

---

## 이넘의 특징

### 1. 혼합 이넘
이넘은 숫자형과 문자형을 혼합하여 사용할 수 있다.

```typescript
enum Menu {
	CHIKEN = 'CHIKEN',
	PIZZA = 50000,
}
```
위와 같이 혼합형으로 사용해도 코드상의 문제는 없지만 이넘 값은 일관된 하나의 데이터 타입으로 관리하는 것이 좋다.

### 2. 이넘 속성 값 정의
이넘의 속성은 고정 값 뿐만아니라 다양한 형태의 값을 할당할 수 있다.

```typescript
enum Menu {
	CHIKEN, // 0
	PIZZA, // 1
	NOODLE = CHIKEN + PIZZA, // 1
	RICE = 'rice'.length, // 4
}
```

먼저 선언된 이넘의 속성 활용이 가능함과 동시에 연산자를 사용하여 계산한 값을 속성 값으로 활용할 수 있다.

### 3. const 이넘
const 이넘은 선언할 때 const를 붙인 이넘을 의미한다.

```typescript
const enum Menu {
	CHIKEN = 'CHIKEN',
	PIZZA = 'PIZZA',
}
```

근데 왜 const 이넘을 사용할까? const 이넘은 컴파일 결과 코드를 보면 이넘을 사용한 모든 곳에 이넘 값이 직접 할당된다. 이는 컴파일 결과 코드의 크기를 줄이고 성능을 향상시킬 수 있다.

const 이넘은 일반 이넘을 변환했을 때와 다르게 객체 코드가 생성되지 않고 직접 값이 할당되기 때문에 성능이 향상된다.

