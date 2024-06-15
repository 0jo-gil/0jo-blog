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


// , limit: 5
export const query = graphql`
  query Home {
     allMarkdownRemark(sort: {
      frontmatter: {date: DESC}} 
      limit: 5
    ) {
      totalCount
      nodes {
        frontmatter {
          title
          summary
          date(formatString: "YYYY.MM.DD")
          slug
          category
        }
        id
      }
      group(field: {frontmatter: {category: SELECT}}) {
        fieldValue
        totalCount
      }
    }
    site {
      siteMetadata {
        title
        siteUrl
        description
        author
      }
    }
  }
`;

export {default} from '../views/Home';
export {Head} from '../views/Home'; 