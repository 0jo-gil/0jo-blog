import RecentPostItem from "./RecentPostItem";

const RecentPosts = ({posts}: any) => {
    // TODO : PostItem variant로 스타일 분기 필요 (현재 recentPost 컴포넌트로 테스트)
    return (
        <div>
            {
                posts.map((post: any) => 
                    <RecentPostItem key={post.id} post={post} />
                )
            }
        </div>
    )

}

export default RecentPosts;