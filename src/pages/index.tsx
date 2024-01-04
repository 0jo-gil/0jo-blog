import * as React from "react"
import {graphql, Link} from "gatsby"

import Layout from "components/Layout/Layout"
import CategoriesUsage from "components/Categories/CategoriesUsage";

import PostsList from "components/Posts/PostList";
import {StInnerContainer} from "styles/common";

type Props = {
    location: {
        search: string;
        href: string;
    };
    data: {
        allMarkdownRemark: {
            edges: SummaryProps[];
        };
    };
};

export type SummaryProps = {

    nodes: {
        categories: string[];
        title: string;
        date: string;
        summary: string;
    }
}

declare module "react" {
    interface IntrinsicAttributes {

        nodes?: SummaryProps[];
    }
}

const Home = ({
                  // location: {search, href},
                  data: {
                      allMarkdownRemark: {
                          edges,
                      }
                  },
              }: Props) => {

    return (
        <Layout
            title='Home'
        >
            <StInnerContainer>
                <CategoriesUsage nodes={edges}/>
                <PostsList posts={edges}/>

                <div>
                    <Link to={'/posts/list/1'}>더보기</Link>
                </div>
            </StInnerContainer>
        </Layout>
    )
}

export default Home;

export const query = graphql`
  query getPosts {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}, limit: 5) {
      edges {
        node {
          frontmatter {
            summary
            title
            date
            category
            slug
            thumbnail {
              childImageSharp {
                gatsbyImageData
              }
              publicURL
            }
          }
        }
      }
    }
  }
`;
