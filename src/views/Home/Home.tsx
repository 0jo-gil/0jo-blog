import CategoriesUsage from "components/Categories/CategoriesUsage";
import Profile from "components/Profile/Profile";
import RecentPosts from "components/RecentPosts/RecentPosts";
import Section from "components/Section/Section";
import useCategory from "hooks/useCategory";
import { getRecentPosts } from "utils/index";

const Home = ({ data, location: {pathname}}: any) => {
    const { allMarkdownRemark: {
        totalCount,
        nodes,
        group
    } } = data;

    const getRecent= getRecentPosts(nodes, 5);
    const {categoryList} = useCategory(group);

    return (
        <Section>
            <Profile />

            <RecentPosts posts={getRecent} />

            <CategoriesUsage categoryList={categoryList} />

        </Section>
    )
}

export default Home;