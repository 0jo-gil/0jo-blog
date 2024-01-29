import { useMemo } from "react";

const useCategory = (group: any) => {
    const sortedGroupByCount = useMemo(() => {
        return group.sort((a: any, b: any) => {
            return b.totalCount - a.totalCount;
        })
    }, [group])

    const getCategoryList = (key: string) => (array: any) => array.map((item: any) => item[key])

    return {
        categoryList: getCategoryList('fieldValue')(sortedGroupByCount)
    }
}

export default useCategory;