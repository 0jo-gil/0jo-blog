import PostItem from "components/Posts/PostItem";
import PostList from "components/Posts/PostList";
import Profile from "components/Profile/Profile";
import Section from "components/Section/Section";
import useCategory from "hooks/useCategory";
import usePost from "hooks/usePost";
import PostListTemplate from "templates/PostListTemplate";
import {StFlexRow} from "styles/common";
import CategoriesUsage from "components/Categories/CategoriesUsage";

const Home = ({data, location: {pathname}}: any) => {
    const {
        allMarkdownRemark: {
            totalCount,
            nodes,
            group
        }
    } = data;


    const {selectedCategory, categoryList, onChangeCategory} = useCategory(group);
    const {postList, recentPostList} = usePost(selectedCategory, nodes);

    return (
        <Section>

            {/* 최근 등록 포스트 */}
            <div>
                <Section.Title title="최근 게시물" />
                <PostList variant={'horizon'}>
                    {
                        recentPostList.map((post: any, index: number) => <PostItem key={index} variant="card" post={post} />)
                    }
                </PostList>
            </div>
            
            <CategoriesUsage categoryList={categoryList} selectedCategory={selectedCategory} onChange={onChangeCategory} />

            {/* 카테고리 별 포스트 */}
            <StFlexRow $style={{gap: '2%'}}>
                <PostList variant="vertical">
                    {
                        postList.map((post: any, index: number) => <PostItem key={index} variant="list"
                                                                             post={post}/>)
                    }
                </PostList>

                <CategoriesUsage categoryList={categoryList} selectedCategory={selectedCategory}
                                 onChange={onChangeCategory}/>
            </StFlexRow>


            <Profile/>

        </Section>
    )
}

export default Home;