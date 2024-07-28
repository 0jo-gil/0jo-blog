import React, {PropsWithChildren} from "react";
import CategoriesItem from "./CategoriesItem";
import styled from "styled-components";

const Categories = ({children}: PropsWithChildren) => {
    return (
        <StCategoriesContainer>
            <h2>카테고리</h2>
            {children}
        </StCategoriesContainer>
    )
}

export default Categories;

Categories.Item = CategoriesItem;

const StCategoriesContainer = styled.div`
  //display: flex;
  //gap: 1rem;
  //margin-top: 60px;
  position: sticky;
  top: 0;
  height: fit-content;
  padding: 10px;
  border: 1px solid #aaa;
  flex: 0.3;

  h2 {
    font-size: 16px;
    color: #aaa;
    margin-bottom: 3rem;
  }
`;