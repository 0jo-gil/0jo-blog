import CategoriesUsage from "components/Categories/CategoriesUsage";
import PostItem from "components/Posts/PostItem";
import PostList from "components/Posts/PostList";
import Profile from "components/Profile/Profile";
import RecentPosts from "components/RecentPosts/RecentPosts";
import Section from "components/Section/Section";
import useCategory from "hooks/useCategory";
import usePost from "hooks/usePost";

const Home = ({ data, location: {pathname}}: any) => {
    const { allMarkdownRemark: {
        totalCount,
        nodes,
        group
    } } = data;

    const {selectedCategory, categoryList, onChangeCategory} = useCategory(group);

    const {postList, recentPostList} = usePost(selectedCategory, nodes);

    return (
        <Section>
            <Profile />

            {/* 최근 등록 포스트 */}
            <PostList variant={'horizon'}>
                {
                    recentPostList.map((post: any, index: number) => <PostItem key={index} variant="card" post={post} />)
                }
            </PostList>
            
            <CategoriesUsage categoryList={categoryList} onChange={onChangeCategory} />

            {/* 카테고리 별 포스트 */}
            <PostList variant="vertical">
                {
                    postList.map((post: any, index: number) => <PostItem key={index} variant="list" post={post} />)
                }
            </PostList>




        </Section>
    )
}

export default Home;