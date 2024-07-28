import Profile from "components/Profile/Profile";
import Section from "components/Section/Section";
import {StFlexRow} from "styles/common";
import PostListTemplate from "../../templates/PostListTemplate";
import CategoriesUsage from "components/Categories/CategoriesUsage";
import useCategory from "hooks/useCategory";
import Banner from "components/Banner/Banner";

const Home = ({data, pageContext}: any) => {

    const {categoryList, selectedCategory, onChangeCategory} = useCategory(data.allMarkdownRemark.group);

    return (
        <Section>
            <Banner selectedCategory={selectedCategory}/>
            {/* 카테고리 별 포스트 */}
            <StFlexRow $style={{gap: '2%'}}>
                {/*<PostList variant="vertical">*/}
                {/*    {*/}
                {/*        postList.map((post: any, index: number) => <PostItem key={index} variant="list"*/}
                {/*                                                             post={post}/>)*/}
                {/*    }*/}
                {/*</PostList>*/}
                <PostListTemplate data={data} context={pageContext}/>

                <CategoriesUsage categoryList={categoryList} selectedCategory={selectedCategory}
                                 onChange={onChangeCategory}/>
            </StFlexRow>


            <Profile/>

        </Section>
    )
}

export default Home;