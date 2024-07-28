import {graphql} from "gatsby";
import {SummaryProps} from "../pages";
import PostList from "components/Posts/PostList";
import PostItem from "components/Posts/PostItem";
import Pagination from "components/Pagination/Pagination";

type Props = {
    data: {
        allMarkdownRemark: {
            nodes: SummaryProps[];
            pageInfo: {
                perPage: number;
                currentPage: number;
                hasNextPage: boolean;
                hasPreviousPage: boolean;
                itemCount: number;
                pageCount: number;
                totalCount: number;
            }
        };
    };
    context: {
        limit: number;
        skip: number;
        numPages: number;
        currentPage: number;
    }
};

const PostListTemplate = ({
                              data: {
                                  allMarkdownRemark: {
                                      nodes, pageInfo
                                  }
                              }
                          }: Props) => {

    return (
        <>
            <PostList variant={'vertical'}>
                {
                    nodes.map((post: any, index: number) =>
                        <PostItem key={index}
                                  variant="list"
                                  post={post}/>)
                }
            </PostList>

            <div>
                <Pagination currentPage={pageInfo.currentPage} pageCount={pageInfo.pageCount}
                            hasNextPage={pageInfo.hasNextPage} hasPreviousPage={pageInfo.hasPreviousPage}/>
            </div>
        </>
    )
}

export default PostListTemplate;

export const query = graphql`
    query blogListQuery($skip: Int!) {
        allMarkdownRemark(
            sort: {frontmatter: {date: DESC}}
            limit: 5
            skip: $skip
        ) {
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
            pageInfo {
              perPage
              currentPage
              hasNextPage
              hasPreviousPage
              itemCount
              pageCount
              totalCount
            }
        }
    }
`;
