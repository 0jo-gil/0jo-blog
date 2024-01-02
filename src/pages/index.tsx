import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

type Props = {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        siteUrl: string;
      };
    };
    allMarkdownRemark: {
      edges: any[];
    };
    file: {
      childImageSharp: { gatsbyImageData: any };
      publicURL: string;
    };
  };
};

const Home = ({
  data: {
    site: {
      siteMetadata: { title, description, siteUrl },
    },
    allMarkdownRemark: { edges: posts },
    file: {
      childImageSharp: { gatsbyImageData },
      publicURL,
    },
  },
}: Props) => (
  <Layout
    title='Home'
    description={description}
    url={siteUrl}
    image={publicURL}>
    <Introduction image={gatsbyImageData} />
    <PostList posts={posts} isFeatured />
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default Home
