import CategoriesUsage from "components/Categories/CategoriesUsage";
import Profile from "components/Profile/Profile";
import Section from "components/Section/Section";
import useCategory from "hooks/useCategory";

const Home = ({ data, location: {pathname}}: any) => {
    const { allMarkdownRemark: {
        edges,
        group
    } } = data;


    const {categoryList} = useCategory(group);

    return (
        <div>
            <Section>
                <Profile />

                <CategoriesUsage categoryList={categoryList} />

            </Section>

        </div>
    )
}

export default Home;