import {useMemo} from "react"
import {getRecentPosts} from "utils/index"

const usePost = (selectedCategory: {
    fieldValue: string
    totalCount: number
}, nodes: any) => {
    const getPostByCategory = useMemo(() => {
        if (selectedCategory.fieldValue === "전체") return nodes
        return nodes.filter(({frontmatter: {category}}: any) => {
            return category?.includes(selectedCategory.fieldValue)
        })
    }, [selectedCategory, nodes])

    const getRecentPostList = useMemo(() => {
        return getRecentPosts(nodes, 2)
    }, [nodes])

    return {
        postList: selectedCategory ? getPostByCategory : nodes,
        recentPostList: getRecentPostList,
    }
}

export default usePost
