const PostList = ({ posts }: any) => {

    return (
        <div>
            {
                posts &&
                posts?.map((post: any) => {
                    return (
                        <div>
                            <div>{post.node.frontmatter.title}</div>
                            <div>{post.node.frontmatter.summary}</div>
                            <div>{post.node.frontmatter.date}</div>
                            <div>{post.node.frontmatter.category}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PostList;