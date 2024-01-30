import { useMemo } from "react"
import { getRecentPosts } from "utils/index"

const usePost = (selectedCategory: string, nodes: any) => {
    const getPostByCategory = useMemo(() => {
        return nodes.filter(({frontmatter: {category}}: any) => {
            return category.includes(selectedCategory)
        })
    }, [selectedCategory, nodes])

    const getRecentPostList = useMemo(() => {
        return getRecentPosts(nodes, 2);
    }, [nodes])
    
    return {
        postList: selectedCategory ? getPostByCategory : nodes,
        recentPostList: getRecentPostList
    }
}

export default usePost;