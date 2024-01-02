const PostList = ({ posts }: any) => {
    console.log(posts)
    return (
        <div>
            {
                posts &&
                posts?.map((post: any) => {
                    return (
                        <div dangerouslySetInnerHTML={{
                            __html: post.node.html
                        }}></div>
                    )
                })
            }
        </div>
    )

}

export default PostList;