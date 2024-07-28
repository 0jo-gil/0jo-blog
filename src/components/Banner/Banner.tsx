import React from 'react';
import styled from "styled-components";

const Banner = ({selectedCategory}: {
    selectedCategory: {
        fieldValue: string;
        totalCount: number;
    }
}) => {
    console.log(selectedCategory);
    return (
        <StBanner>
            <h2>{selectedCategory.fieldValue}</h2>
            <p>{selectedCategory.totalCount}개의 포스팅</p>
        </StBanner>
    );
};

export default Banner;

const StBanner = styled.div``;
