import {
    StPostItemContainer,
    StPostItemContent,
    StPostItemHashTag,
    StPostItemSummary,
    StPostItemThumbnail
} from "components/Posts/style";
import {StContentTitle} from "styles/common";
import {Link} from "gatsby";
import { ReactLogoImg, TypeScriptLogoImg } from "../../assets/img";

const PostItem = ({post}: any) => {
    const url = () => {
        if(post.node.frontmatter.category === 'React') {
            return ReactLogoImg;
        } else if(post.node.frontmatter.category === 'TypeScript') {
            return TypeScriptLogoImg;

        }

        return ReactLogoImg;
    }

    return (
        <Link to={`/posts/${post.node.frontmatter.slug}`}>
            <StPostItemContainer >

                    <StPostItemThumbnail>
                        <img srcSet={url()} alt={post.node.frontmatter.title} />
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
