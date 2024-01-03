import PostItem from "./PostItem";

const PostList = ({ posts }: any) => {

    return (
        <div>
            {
                posts &&
                posts?.map((post: any) => {
                    return (
                        <PostItem post={post} />
                    )
                })
            }
        </div>
    )
}

export default PostList;