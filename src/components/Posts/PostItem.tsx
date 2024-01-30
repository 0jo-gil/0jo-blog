import {
    STYLE_TYPE,
    StPostItemContainer,
    StPostItemContent,
    StPostItemHashTag,
    StPostItemSummary,
    StPostItemThumbnail
} from "components/Posts/style";
import {StContentTitle} from "styles/common";
import {Link} from "gatsby";
import { JavaScriptLogoImg, ReactLogoImg, TypeScriptLogoImg } from "../../assets/img";


type Props = {
    post: any;
    variant?: 'list' | 'card';
}

const PostItem = ({post, variant = 'list'}: Props) => {
    const url = () => {
        // if(post.node.frontmatter.category === 'React') {
        //     return ReactLogoImg;
        // } else if(post.node.frontmatter.category === 'TypeScript') {
        //     return TypeScriptLogoImg;
        // } else if (post.node.frontmatter.category === 'JavaScript') {
        //     return JavaScriptLogoImg;
        // }

        return ReactLogoImg;
    }

    const {
        frontmatter: {
            category,
            date,
            slug,
            summary,
            title
        },
        id
    } = post
    return (
        <Link to={`/posts/${slug}`}>
            <StPostItemContainer variant={variant} $style={STYLE_TYPE[variant]}>
                    <StPostItemThumbnail>
                        <img srcSet={url()} alt={`${title} 이미지`} />
                    </StPostItemThumbnail>

                    <StPostItemContent>
                        <StPostItemHashTag># {category[0]}</StPostItemHashTag>
                        <StContentTitle>{title}</StContentTitle>
                        <StPostItemSummary>{summary}</StPostItemSummary>
                        <div>{date}</div>
                    </StPostItemContent>

            </StPostItemContainer>
        </Link>
    )
}

export default PostItem;
