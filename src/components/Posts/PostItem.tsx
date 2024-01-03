import {
    StPostItemContainer,
    StPostItemContent,
    StPostItemHashTag,
    StPostItemSummary,
    StPostItemThumbnail
} from "components/Posts/style";
import {StContentTitle} from "styles/common";
import {Link} from "gatsby";

const PostItem = ({post}: any) => {

    return (
        <Link to={`/posts/${post.node.frontmatter.slug}`}>
            <StPostItemContainer >

                    <StPostItemThumbnail>
                        <img srcSet={post.node.frontmatter?.thumbnail?.publicURL} alt={post.node.frontmatter.title} />
                    </StPostItemThumbnail>

                    <StPostItemContent>
                        <StPostItemHashTag># {post.node.frontmatter.category}</StPostItemHashTag>
                        <StContentTitle>{post.node.frontmatter.title}</StContentTitle>
                        <StPostItemSummary>{post.node.frontmatter.summary}</StPostItemSummary>
                        <div>{post.node.frontmatter.date}</div>
                    </StPostItemContent>

            </StPostItemContainer>
        </Link>
    )
}

export default PostItem;
