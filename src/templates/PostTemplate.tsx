import {graphql} from "gatsby";
import Layout from "components/Layout/Layout";
import MarkdownPreview from '@uiw/react-markdown-preview';
import {StInnerContainer} from "styles/common";

const PostTemplate = ({data}: any) => {
    const post = data.markdownRemark

    console.log(post)

    return (
        <Layout>
            <StInnerContainer>
                <MarkdownPreview source={post.rawMarkdownBody} />
            </StInnerContainer>
        </Layout>
    )

}

export default PostTemplate;


export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        rawMarkdownBody
        html
    }
  }
`
