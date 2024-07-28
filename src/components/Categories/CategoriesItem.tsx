import styled from "@emotion/styled";


type Props = {
    active?: boolean;
    innerText?: string;
    category: string;
    onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;


const CategoriesItem = ({active = false, category, ...props}: Props) => {

    return (
        <StCategoryButton {...props} active={active}>
            {/*{category}*/}
            <span>{category.fieldValue}</span>
            <StCategoryCount>{category.totalCount}</StCategoryCount>
        </StCategoryButton>
    )
};

export default CategoriesItem;

const StCategoryButton = styled.button<{ active: boolean }>`
  z-index: 9;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 1rem;
  font-size: 0.9rem;
  white-space: nowrap;

    //color: ${({active}) => (active ? 'rgb(0, 198, 142);' : "#eaeaea")};
    // border: 1px solid ${({active}) => (active ? 'rgb(0, 198, 142);' : "#eaeaea")};
  cursor: pointer;
`;


const StCategoryCount = styled.span`
  background-color: #eaeaea;
  padding: 0.2rem 0.5rem;
  border-radius: 0.5rem;
`;