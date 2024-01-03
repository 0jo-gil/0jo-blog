import Layout from "components/Layout/Layout";
import PostList from "components/Posts/PostList";

type Props = {
    location: {
        search: string;
        href: string;
    };
    data: {

        allMarkdownRemark: {
            edges: any[];
        };
        file: {
            publicURL: string;
        };
    };
}

const Posts = ({
 
}: Props) => {

    return (
        <Layout
            title="Posts"
  
        >
            {/* <PostList posts={edges} /> */}
        </Layout>
    )

}

export default Posts;