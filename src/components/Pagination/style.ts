import styled from "@emotion/styled";

export const StPaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type StPaginationButtonProps = {
    isActive?: boolean;
}
export const StPaginationButton = styled.button<StPaginationButtonProps>`
  width: 30px;
  height: 30px;
  border: 1px solid #ddd;
  border-radius: 50%;
  opacity: ${({isActive}) => isActive ? 1 : 0};
  cursor: pointer;
  margin: 0 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: rgb(0, 198, 142);
    color: white;
  }

`;
