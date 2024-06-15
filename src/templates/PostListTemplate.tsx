import {graphql} from "gatsby";
import {StInnerContainer} from "styles/common";
import PostList from "components/Posts/PostList";
import {SummaryProps} from "../pages";
import Layout from "components/Layout/Layout";
import Pagination from "components/Pagination/Pagination";
import PostItem from "components/Posts/PostItem";

type Props = {
    location: {
        search: string;
        href: string;
    };
    data: {
        allMarkdownRemark: {
            edges: SummaryProps[];
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
                                      edges,
                                      pageInfo
                                  }
                              }
}: Props) => {
    

    return (
        <Layout>
            <StInnerContainer>

                {/* posts={edges} */}
                <PostList >
                    {edges.map((post: any, index: number) => <PostItem key={index} variant="list" post={post} />)}
                </PostList>


                <div>
                    <Pagination currentPage={pageInfo.currentPage} pageCount={pageInfo.pageCount}
                                hasNextPage={pageInfo.hasNextPage} hasPreviousPage={pageInfo.hasPreviousPage}/>
                </div>
            </StInnerContainer>
        </Layout>
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
