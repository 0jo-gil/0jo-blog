import {
  STYLE_TYPE,
  StPostItemContainer,
  StPostItemContent,
  StPostItemHashTag,
  StPostItemSummary,
  StPostItemThumbnail,
} from "components/Posts/style"
import { StContentTitle } from "styles/common"
import { Link } from "gatsby"
import { ReactLogoImg } from "../../assets/img"

type Props = {
  post: any
  variant?: "list" | "card"
}

const PostItem = ({ post, variant = "list" }: Props) => {
  const url = () => {
    return ReactLogoImg
  }

  if (!post) return null

  const { id, category, date, slug, summary, title } = post

  return (
    <Link to={`/posts/${slug}`}>
      <StPostItemContainer variant={variant} $style={STYLE_TYPE[variant]}>
        <StPostItemContent>
          <StContentTitle>{title?.title}</StContentTitle>
        </StPostItemContent>
        <StPostItemSummary>{summary}</StPostItemSummary>
        <StPostItemHashTag>
          {category?.map((category: string, index: number) => (
            <span key={index}>{category}</span>
          ))}
        </StPostItemHashTag>
        <div>{date}</div>
      </StPostItemContainer>
    </Link>
  )
}

const PostItemCard = ({ post }: Props) => {}

const PostItemList = ({ post }: Props) => {}

export default PostItem

PostItem.Card = PostItemCard
PostItem.List = PostItemList
