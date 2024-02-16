import styled from '@emotion/styled';
import { CSSProp, css } from 'styled-components';

export const StPostItemContainer = styled.div<{variant?: 'list' | 'card', $style: CSSProp}>`
  ${({$style}) => $style};
`;

// flex: 0.2;
export const StPostItemThumbnail = styled.div`
`;

// flex: 0.8;
export const StPostItemContent = styled.div`
`;

export const StPostItemHashTag = styled.div`
  font-size: 12px;
  color: rgb(0, 198, 142);
  margin-bottom: 10px;

  span {
    border: 1px solid rgb(0, 198, 142);
    padding: 3px 5px;
    margin-right: 10px;
  }
`;
 

export const StPostItemSummary = styled.p`
  font-size: 18px;
  margin-bottom: 3%;
  color: rgb(41, 41, 41);
`;



export const StPostTitleContainer = styled.div`

`;

export const StPostTemplateTitle = styled.h1`
  font-size: 38px;
  font-weight: bold;
`;

export const StPostPreviewContainer = styled.div`
  margin-top: 60px;

  div:first-child {
    flex: 0.2;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 170px;
    flex: 0.8;
  }
`;





export const STYLE_TYPE = {
  'list': css`
      width: 100%;
      display: flex;
      gap: 5%;
      padding: 40px 0;
      border-bottom: 1px solid #eaeaea;
  `,
  'card': css`
      div:first-child {
          width: 100%;
          height: 180px;
          overflow: hidden;
          margin-bottom: 2rem;

          img {
              width: 100%;
              height: 100%;
              object-fit: contain;
          }
      }

      div:nth-child(2) {
          width: 100%;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
      }
  `
}


export const ITEM_STYLE_TYPE = {
}