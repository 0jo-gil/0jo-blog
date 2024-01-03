import { graphql } from "gatsby";

const PostListTemplate = ({ data, pageContext }: any) => {
    const { category } = pageContext;

    console.log(data, '!!!')
    return (    
        <div>{category} 결과</div>
    )
}

export default PostListTemplate;

export const getPostListByCategory = graphql`
  query($category: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            category
          }
        }
      }
    }
  }
`;