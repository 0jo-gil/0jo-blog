import React from 'react';
import styled from "styled-components";

const Banner = ({selectedCategory}: {
    selectedCategory: {
        fieldValue: string;
        totalCount: number;
    }
}) => {
    return (
        <StBanner>
            {
                selectedCategory.fieldValue === '전체'
                    ? <h2>Archive's</h2>
                    : <>
                        <h2>{selectedCategory.fieldValue}</h2>
                        <p>{selectedCategory.totalCount}개의 포스팅</p>
                    </>
            }

        </StBanner>
    );
};

export default Banner;

const StBanner = styled.div`
    width: 100%;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    p {
        font-size: 1.1rem;
        color: #aaa;
    }
`;
