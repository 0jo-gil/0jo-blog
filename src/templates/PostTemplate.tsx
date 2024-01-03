import {graphql} from "gatsby";
import Layout from "components/Layout/Layout";
import MarkdownPreview from '@uiw/react-markdown-preview';
import {StInnerContainer} from "styles/common";
import {
    StPostItemHashTag,
    StPostPreviewContainer,
    StPostTemplateTitle,
    StPostTitleContainer
} from "components/Posts/style";

const PostTemplate = ({data}: any) => {
    const post = data.markdownRemark

    return (
        <Layout>
            <StInnerContainer $style={{padding: '80px 0'}}>
                <StPostTitleContainer>
                    <StPostItemHashTag>{post.frontmatter.category}</StPostItemHashTag>
                    <StPostTemplateTitle>{post.frontmatter.title}</StPostTemplateTitle>
                </StPostTitleContainer>

                <StPostPreviewContainer>
                    <MarkdownPreview
                        source={post.rawMarkdownBody}
                        wrapperElement={{
                            "data-color-mode": "light",
                        }}
                    />
                </StPostPreviewContainer>
            </StInnerContainer>
        </Layout>
    )

}

export default PostTemplate;


export const query = graphql`
  query($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
        rawMarkdownBody
        frontmatter {
            title
            date
            category
            slug
        }
    }
  }
`
