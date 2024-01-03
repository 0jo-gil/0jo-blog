import Layout from "components/Layout/Layout";
import PostList from "components/Posts/PostList";

type Props = {
    location: {
        search: string;
        href: string;
    };
    data: {
        // site: {
        //     siteMetadata: {
        //         title: string;
        //         description: string;
        //         siteUrl: string;
        //     };
        // };
        allMarkdownRemark: {
            edges: any[];
        };
        file: {
            publicURL: string;
        };
    };
}

const Posts = ({
    // location: { search, href },
    // data: {
    //     // site: {
    //     //     siteMetadata: { title, description },
    //     // },
    //     // allMarkdownRemark: { edges },
    //     // file: { publicURL },
    // },
}: Props) => {

    return (
        <Layout
            title="Posts"
            // url={href}
            // image={publicURL}
        >
            {/* <PostList posts={edges} /> */}
        </Layout>
    )

}

export default Posts;