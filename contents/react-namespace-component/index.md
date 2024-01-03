---
title: "Namespace Component"
date: "2023-12-14"
category: "React"
summary: "리액트 Namespace Component에 대해 알아보자."
thumbnail: './logo.png'
slug: "react-namespace-component"
---

개발중에 겪는 복잡한 컴포넌트의 관계에서 컴포넌트들간의 관계를 조금 더 응집도 있고 명확하게 표현하기 위해 Name Space 패턴을 사용한다.

### 사용이유
1. 코드 가독성 향상
   네임스페이스르르 활용하면 컴포넌트 간 관계를 명확하게 표현할 수 있다.
   예를 들어 ParentComponent.ChildComponentA와 같이 표현하면 ChildComponentA가 Parent Component에 속하는 하위 컴포넌트임을 분명하게 알 수 있다.


2. 컴포넌트 재사용성 향상
   네임스페이스 컴포넌트 패턴은 하위 컴포넌트를 독립적인 단위로 만들어, 필요에 따라 재사용할 수 있게 한다. 이를 통해 코드 중복을 줄이고, 유지 보수성을 향상시킬 수 있다.


3. 타입 안전성 보장
   타입스크립트 환경에서 각 컴포넌트 props에 대한 타입을 명시적으로 지정할 수 있다. 이를 통해 컴포넌트 간 인터페이스를 명확하게 보장하고, 코드의 안정성을 높일 수 있다. 또한, 타입 오류를 사전에 찾아낼 수 있어 버그를 줄일 수 있다.

4. 컴포넌트 구조의 일관성
   같은 패턴을 사용하면, 컴포넌트 구조의 일관성을 유지할 수 있다.


### 기본 구조

```
// 컴포넌트 Props 타입정의
interface IComponentProps {
	children?: React.ReactNode;
}

// 메인 컴포넌트와 하위 컴포넌트 타입 정의
const MainComponent: React.FC<IComponentProps> & {
	SubComponentA: React.FC<IComponentProps>;
    SubComponentB: React.FC<IComponentProps>;
} = ({children}) => <div>{children}</div>

// 하위 컴포넌트 정의
MainComponent.SubComponentA = ({children}) => <div>{children}</div>
MainComponent.SubComponentB = ({children}) => <div>{children}</div>

export default MainComponent;
```

> 위 코드에서 MainComponent는 SubComponentA와 SubComponentB라는 두 개의 하위 컴포넌트를 가지고 있다. 이러한 방식으로 함께 사용되는 컴포넌트들을 그룹화하면,  코드 가독성을 높이고 각 컴포넌트 관계를 명확하게 표현할 수 있다.


### 활용 방안
```
import React from 'react';

interface ISelectBoxProps {
  children?: React.ReactNode;
}

interface IOptionProps {
  value: string;
  children: React.ReactNode;
}

const SelectBox: React.FC<ISelectBoxProps> & {
  Option: React.FC<IOptionProps>;
} = ({ children }) => {
  return <select>{children}</select>;
};

SelectBox.Option = ({ children, value }) => {
  return <option value={value}>{children}</option>;
};

export default SelectBox;
```

```
import SelectBox from './SelectBox';

function SomeComponent() {
  return (
    <SelectBox>
      <SelectBox.Option value="value1">
        옵션 1
      </SelectBox.Option>
      <SelectBox.Option value="value2">
        옵션 2
      </SelectBox.Option>
    </SelectBox>
  );
}
```