---
title: "유틸리티 타입 (Utility Types)"
date: "2023-12-27"
category: ["TypeScript"]
summary: "TypeScript 유틸리티 타입에 대한 정리"
thumbnail: '../assets/react/logo.png'
slug: "typescript-utility-types"
---
## 유틸리티 타입 (Utility Types)
TypeScript를 사용하면서 실제 타입만 정의하고 확장성있는 타입 자체를 응용하는 과정에서 타입 정의를 위한 또 다른 타입을 정의하는 상황에 직면하곤 했다.

이러한 상황을 해결하기 위해 _**[유틸리티 타입](https://www.typescriptlang.org/ko/docs/handbook/utility-types.html)**_ 을 타입스크립트에서 제공한다.

> TypeScript는 일반적인 타입 변환을 쉽게 하기 위해 유틸리티 타입을 제공한다. 이러한 유틸리티는 전역으로 사용 가능하다.


---

### Partial&lt;T&gt;
Type의 모든 프로퍼티를 선택적으로 변경한 타입 생성


```
interface User {
	name: string;
    age: number;
}

function updateUser(user: User, updateUser: Partial<User>) {
	return { ...user, ...updateUser};
}

const userA = {
	name: 'name',
    age: 32
};

const userB = updateUser(userA, {
	age: 30
});
```

### Required&lt;T&gt;
Type의 모든 프로퍼티를 필수로 설정한 타입 생성

```
interface User {
	name?: string;
    age?: number;
}

const userA: User = { name: 'name' };
const userB: Required<User> = {
	name: 'name',
    age: 30
}
```

### Readonly&lt;T&gt;
Type의 모든 프로퍼티가 읽기 전용 (readonly)으로 설정한 타입 생성
생성된 타입의 프로퍼티는 재할당 불가
```
interface User {
	name: string;
}

const userA: Readonly<User> = { name: 'name' };
userA.name = 'name2'; // error
```

### Record&lt;Keys, Type&gt;
키를 속성으로, 타입을 속성값의 타입으로 설정한 타입 생성
타입의 프로퍼티를 다른 타입에 매핑시키는데 사용
```
type Key = 'name' | 'age';

type Record = Record<Key, string>;

/*
type Record = {
	name: string;
    age: string;
}
*/

const userA: Record<Key, string> = {
	name: 'name',
    age: '10'
}
```

### Pick&lt;Type, Keys&gt;
Type의 프로퍼티에서 Key의 집합 타입 생성
```
interface User {
	name: string;
    age: number;
    phone: string;
}
type Key = 'name' | 'phone';
type UserPick = Pick<User, Key>;
/*
type UserPick = {
	name: string;
    phone: string;
}
*/

const user: Pick<User, Key> = {
	name: 'name',
    phone: '010-0000-0000'
}
```

### Omit&lt;Type, Keys&gt;
Pick 과 반대로 Type의 해당 Key의 집합을 제외한 타입 생성
```
interface User {
	name: string;
    age: number;
    phone: string;
}

type Key = 'age' | 'phone';

type UserOmit = Omit<User, Key>;
/*
type UserOmit = {
	name: string;
}
*/

const user: Omit<User, Key> = {
	name: 'name'
}
```

### Exclude&lt;Type, ExcludedUnion&gt;

```
// type Type1 = 'b' | 'c'
type Type1 = Exclude<'a' | 'b' | 'c', 'a'>;

// type Type2 = 'c'
type Type2 = Exclude<'a' | 'b' | 'c', 'a', 'b'>;

// type Type3 = string | number
type Type3 = Exclude<string | number | (() => void), Function>;
```

### Extract&lt;Type, Union&gt;
Union에 할당할 수 있는 모든 멤버를 추출

```
type Type1 = string | number | object;
type Type2 = number | object;

type ExtractType = Extract<Type1, Type2>;
/*
type ExtractType = number | object;
*/

const reault: Extract<Type1, Type2> = 1;
```

### NonNullable&lt;Type&gt;
Type에서 null과 undefined 제외한 타입 생성

```
// Type1 = string | number;
type Type1 = NonNullable<string | number | undefined>;
// Type2 = string;
type Type2 = NonNullable<string | null>;

```

### Parameters&lt;Type&gt;
함수 타입 Type의 매개변수에 사용된 타입에서 튜플 타입 생성

```
function example(a: number, b: string): void {
	...
}

// type ExampleParams = [number, string]
type ExampleParams = Parameters<typeof example>;

```

### ConstructorParameters&lt;Type&gt;
생성자 함수의 매개변수 타입에서 튜플 타입 생성
```
class User {
	...
    constructor(name: string, age: number) {
    	...
    }
    ...
}

const user = new User('name', 30);

// UserType = [string, number]
type UserType = ConstructorParameters<typeof User>
```


### ReturnType&lt;Type&gt;
함수 Type의 반환 타입으로 구성된 타입 생성
```
function example(a: number): number {
	return a;
}

// Type = number;
type Type = ReturnType<typeof example>;
```

### InstanceType&lt;Type&gt;
생성자 함수의 인스턴스 타입으로 구성된 타입 생성

```
class User {
	...
    constructor(name: string, age: number) {
    	...
    }
    ...
}

// InstanceTypeUser = { name: string, age: number }
type InstanceTypeUser = InstanceType<typeof User>;

const user: InstanceTypeUser<typeof User> = {
	name: 'name',
    age: 30
}
```

### ThisParameterType&lt;Type&gt;
함수의 this 매개변수 타입 생성
함수 타입에 this 매개변수가 없을 경우 unknown 추출

```
interface User {
	name: string;
}

const user: User = {
	name: 'name'
}

function getUser(this: User): string {
	return this.name
}

// Type = User;
type Type = ThisParameterType<typeof getUser>;
```

### OmitThisParameter&lt;Type&gt;
Type에서 this를 제거한 타입 생성

```
interface User {
	name: string;
}

function getUser(this: User): string {
	return this.name;
}

const user = {
	name: 'name'
}


getUser.call(user); // 'name'

const userB = {
	name: false
}

getUser.call(userB); // Error ! 실제 정의한 타입 (string)과 일치하지 않기 때문에 타입 에러 발생
```

```
// this 매개변수 제거 타입 생성
// Type = (this: any) => string  !! 명시적 this 매개변수 타입을 제거했기 때문에 any타입
type Type = OmitThisParameter<typeof getUser>;

const getUserByRandom = OmitThisParameter<typeof getUser> = getUser;

getUserByRandom.call(userB); // false
```