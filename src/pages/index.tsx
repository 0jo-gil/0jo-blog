import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "components/Layout/Layout"
import CategoriesUsage from "components/Categories/CategoriesUsage";

import queryString from "query-string";

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
  location: {search, href},
  data: {
    allMarkdownRemark: {
      edges,
    }
  },
}: Props) => {
  const parsedQuery = queryString.parse(search);
  const selectedCategory = 
    typeof parsedQuery.category !== 'string' || !parsedQuery.category
      ? 'All'
      : parsedQuery.category;

      console.log(edges, '!!!')

  return (
    <Layout
      title='Home'
    >
      <CategoriesUsage nodes={edges} />
    </Layout>
  )
}

export default Home;

// export const query = graphql`
//   query getPosts {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             category
//             title
//             date
//             summary
//           }
//         }
//       }
//     }
//   }
// `;

export const query = graphql`
  query getPosts($category: String) {
    allMarkdownRemark(filter: {frontmatter: {category: {eq: $category}}}) {
      edges {
        node {
          frontmatter {
            category
            title
            date
            summary
          }
        }
      }
    }
  }
`;