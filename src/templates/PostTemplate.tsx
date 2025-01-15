import { graphql } from "gatsby"
import Layout from "components/Layout/Layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import MarkdownPreview from "@uiw/react-markdown-preview"
import { StInnerContainer } from "styles/common"
import {
  StPostItemHashTag,
  StPostPreviewContainer,
  StPostTemplateTitle,
  StPostTitleContainer,
} from "components/Posts/style"

const PostTemplate = ({ data }: any) => {
  const post = data.contentfulBlogPost

  const rawContent = documentToPlainTextString(JSON.parse(post.content.raw))
  return (
    <Layout>
      <StInnerContainer $style={{ padding: "80px 0" }}>
        <StPostTitleContainer>
          {/* <StPostItemHashTag>{post.category}</StPostItemHashTag> */}
          <StPostTemplateTitle>{post.title.title}</StPostTemplateTitle>
        </StPostTitleContainer>

        <StPostPreviewContainer>
          <MarkdownPreview
            source={rawContent}
            wrapperElement={{
              "data-color-mode": "light",
            }}
          />
        </StPostPreviewContainer>
      </StInnerContainer>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title {
        title
      }
      date(formatString: "MMMM Do, YYYY")
      content {
        raw
      }
      category
    }
  }
`
