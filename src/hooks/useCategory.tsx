import {useCallback, useMemo, useState} from "react";

const useCategory = (group: any) => {
    const [selectedCategory, setSelectedCategory] = useState<{
        fieldValue: string;
        totalCount: number;
    }>(
        {
            fieldValue: '전체',
            totalCount: 0
        }
    );

    const sortedGroupByCount = useMemo(() => {
        return group.sort((a: any, b: any) => {
            return b.totalCount - a.totalCount;
        })
    }, [group])

    // const getCategoryList = (key: string) => (array: any) => array.map((item: any) => item[key]);

    const getCategoryList = (array: { fieldValue: string, totalCount: number }[]) => {
        const totalCount = array.reduce((acc, cur) => acc + cur.totalCount, 0);

        return [
            {
                fieldValue: '전체',
                totalCount: totalCount
            },
            ...array
        ]
    }

    const onChangeCategory = useCallback((category: { fieldValue: string, totalCount: number }) => {
        setSelectedCategory(category);
    }, [selectedCategory])


    // const resultCategory = getCategoryList('fieldValue')(sortedGroupByCount)
    // resultCategory.unshift('ALL');

    return {
        selectedCategory,
        categoryList: getCategoryList(sortedGroupByCount),
        onChangeCategory
    }
}

export default useCategory;