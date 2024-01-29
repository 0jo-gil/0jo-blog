import * as React from "react"
import {graphql} from "gatsby"

import Layout from "components/Layout/Layout"

import PostsList from "components/Posts/PostList";
import Section from "components/Section/Section";
import Profile from "components/Profile/Profile";

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

// const Home = ({
//                   // location: {search, href},
//                   data: {
//                       allMarkdownRemark: {
//                           edges,
//                       }
//                   },
//               }: Props) => {
//
//     return (
//         <Layout
//             title='Home'
//         >
//             <Section>
//                 <Profile/>
//             </Section>
//
//             <Section>
//                 <Section.Title title={'Recent Posts'} link={{to: 'posts/list/1', text: 'more'}}/>
//
//                 <PostsList posts={edges}/>
//             </Section>
//         </Layout>
//     )
// }

// export default Home;

export const query = graphql`
  query HomeQuery {
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
