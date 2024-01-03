import styled from "@emotion/styled";
import { Link } from "gatsby";
import { ReactNode } from "react";


type Props = {
  active?: boolean;
  innerText?: string;
  category: string;
};

type GatsbyLinkProps = {
  to: string;
  active: boolean;
  children: ReactNode;
};

const CategoriesItem = ({  active = false, category }: Props) => {

    return (
        <StyledLink
            active={active}
            aria-label={`${category} 카테고리`}
            to={`/posts/${encodeURI(category)}`}
        >
            {category}
        </StyledLink>
    )
};

export default CategoriesItem;

const StyledLink = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<{ active: boolean }>`
  z-index: 9;
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.9rem;
  white-space: nowrap;

  border-radius: 1rem;
  transform: scale(${({ active }) => (active ? 1.15 : 1)});
  cursor: pointer;
  transition: all 0.1s ease-out;

  &:not(:first-of-type) {
    margin-left: 1rem;
  }
`;

