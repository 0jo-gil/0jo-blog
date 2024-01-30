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
import { ReactLogoImg } from "../../assets/img";


type Props = {
    post: any;
    variant?: 'list' | 'card';
}

const PostItem = ({post, variant = 'list'}: Props) => {
    const url = () => {
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
                        <StContentTitle>{title}</StContentTitle>
                        <StPostItemSummary>{summary}</StPostItemSummary>
                        <StPostItemHashTag>
                            {category.map((category: string, index: number) => <span key={index}>{category}</span>)}
                        </StPostItemHashTag>
                        <div>{date}</div>
                    </StPostItemContent>

            </StPostItemContainer>
        </Link>
    )
}

const PostItemCard = ({post}: Props) => {
    

}

const PostItemList = ({post}: Props) => {
    
}

export default PostItem;

PostItem.Card = PostItemCard;
PostItem.List = PostItemList;
