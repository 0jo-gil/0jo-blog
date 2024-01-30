import styled from "@emotion/styled";
import { Link } from "gatsby";
import { ReactNode } from "react";


type Props = {
  active?: boolean;
  innerText?: string;
  category: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;


const CategoriesItem = ({  active = false, category, ...props }: Props) => {

    return (
        // <StyledLink
        //   active={active}
        //   onClick={() => onClick(category)}
        //   aria-label={`${category} 카테고리`}
        //   to={`/${encodeURI(category)}`}
        // >
        //     {category}
        // </StyledLink>

        <StCategoryButton {...props} active={active}>
          {category}
        </StCategoryButton>
    )
};

export default CategoriesItem;

const StCategoryButton = styled.button<{active: boolean}>`
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


