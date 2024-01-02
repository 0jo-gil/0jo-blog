import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import PostList from "components/Posts/PostList"
import Layout from "components/Layout/Layout"

type Props = {
  data: {

    allMarkdownRemark: {
      edges: any[];
    };

  };
};


const Home = ({
  data: {
    allMarkdownRemark: { edges: posts },
  },
}: Props) => {

  console.log(posts)
  return (
    <Layout
      title='Home'
    >
      {/* <Introduction image={gatsbyImageData} /> */}
      <PostList posts={posts} isFeatured />
    </Layout>
  )
}

// export const Head = () => <Seo title="Home" />

export default Home;

export const query = graphql`
  query getPost {
    allMarkdownRemark {
      edges {
        node {
          html
        }
      }
    }
  }
`;