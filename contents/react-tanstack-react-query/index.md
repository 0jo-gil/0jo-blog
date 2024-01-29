---
title: "React Query 활용 방법"
date: "2024-01-05"
category: ["React"]
summary: "왜? 나는 React Query의 다양한 기능을 사용하지 않았는가?"
thumbnail: '../assets/react/logo.png'
slug: "react-tanstack-react-query"

---

React Query를 개발에 활용하면서 왜 지금까지 단순히 **useQuery**, **useMutation** 등 단편적인 기능만을 사용했을까.. 이러한 반성을 계기로 Reqct Query를 다양하게 활용할 수 있는 편리한 기능을 사용할 때 마다 추가적으로 기록하려고 한다.

## Query Invalidation
- invalidateQueries는 서버 데이터를 최신의 데이터 상태로 패치할 수 있는 가장 유용하고 편리한 기능이다.
- 글을 작성하거나 삭제한다면 실제 DB에 데이터 변동이 있을텐데 이러한 경우에 실시간으로 데이터 리스트를 최신화하여 클라이언트단에서 보여줘야 한다.
- 위와 같은 상황에서 `invalidateQueries()` 메서드를 활용할 수 있다.

**적용 사례**
```js
const useRequestCreateData = () => {
    const queryClient = useQueryClient();

    const {data} = useMutation(testData, {
        onSuccess(data) {
            queryClient.inValidateQueries({ queryKey: ['test'] })
        }
    })
    ...
}
```

위 코드에서 queryKey에 ["test"]을 넘겨주면 queryKey에 "test"를 포함하는 모든 쿼리가 무효화되어 refetch를 실행할 수 있다.


