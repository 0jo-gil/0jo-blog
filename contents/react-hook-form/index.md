---
title: "React-Hook-Form 활용 방안"
date: "2024-01-14"
category: ["React"]
summary: "React-Hook-Form을 내 프로젝트에서 활용할 수 있는 방식에 대해 정리하자."
slug: "react-hook-form"
---

## React-Hook-Form을 사용하면서

react-native의 프로젝트를 react로 마이그레이션 하면서 프로젝트에서 form이 많이 사용되었다. 이러한 form 의 효율적인 관리를 위하여 react-hook-form을 적극 도입하여 기존에 validation form 상태 관리 등 모든 부분을 일일이 관리하고 있었지만 확장성 있게 관리해보려고 한다.

항상 라이브러리에 대한 기록은 오롯이 나를 위한 기록이다. 추후에 재사용을 할 때 활용방안에 대한 실수를 줄이고 더 나은 활용 방식에 대한 고안을 위해 기록한다.


### validate의 편리함

기존 프로젝트에서 모든 form의 필수요건, 조건 등에 관리를 validation 메소드를 통해 관리했다. 다양한 폼요소에 대한 관리 포인트가 늘어나면 조건이나 복잡도 역시 늘어나게 되었다. react-hook-form을 사용하면서 조금 더 직관적으로 파악할 수 있는 방식을 채택했다.

아래 예시는 현재 프로젝트에서 사용한 간단한 예시이다.

```tsx
const form = () => {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors }
	} = useForm({
		// 해당 폼 요소들의 default 값
		defaultValues: {
			id: '',
			password: '',
			rePassword: ''
	})
	
	// form onSubmit (data: 객체와 key value로 폼 요소 name이 key로 값이 value로 반환)
	const onSubmit = (data) => {
		console.log(data);
	}
	
	// formState error 객체 반환 (각 폼 요소에 설정한 조건에 대한 상태 반환)
	const onInvalid = (errors) => {
		console.log(errors)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit, onInvalid)}>
			<input type="text" name="id" {...register('id', {
				required: "아이디를 입력하세요.",
				minLength: {
					value: 5,
					message: "아이디는 최소 5자 이상 입니다."
				}
			})} />
			<input type="password" name="password" {...register('password', {
				required: "비밀번호를 입력해주세요.",
				...
			})} />
			<input type="password" name="rePassword" {...register('rePassword', {
				required: "비밀번호를 재입력해주세요.",
        minLength: {
            value: 5,
            message: '비밀번호는 5자 이상입니다.'
        },
        validate: (value) => value === getValues('password') || '비밀번호가 일치하지 않습니다.'
			})} />

			<button type="submit">제출</button>
		</form>
	)
}
```

위에서 활용한 `useForm`의 기능을 간단하게 정리하려고 한다.

1. **register**: (name: string, options?)
- 위 메소드는 해당 폼요소를 등록하고 유효성 검사 규칙을 적용할 수 있다.
- 첫번째 인자로 해당 요소 `name`, 두번째 인자로 `검사 옵션`전달

2. **handleSubmit**: ((data: Object, e?: Event), (errors: Object, e?: Event))
- 첫번째 인자는 form submit successful callback 함수 전달
- 두번째 인자는 form error callback 함수 전달

3. **getValues**: (payload?: string | string[])
- 메소드명에서 추측할 수 있듯이 해당 폼 name을 가진 values를 반환한다.
- 위에서 활용한 방안은 폼 요소에 validate에서 각 값을 비교하여 검증하는 방식으로 활용