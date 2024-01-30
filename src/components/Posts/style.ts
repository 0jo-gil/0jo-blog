import styled from '@emotion/styled';
import { CSSProp, css } from 'styled-components';

export const StPostItemContainer = styled.div<{variant?: 'list' | 'card', $style: CSSProp}>`
  display: flex;
  gap: 5%;
  margin: 40px 0;
`;

export const StPostItemThumbnail = styled.div`
  flex: 0.2;
`;

export const StPostItemContent = styled.div`
  flex: 0.8;
`;

export const StPostItemHashTag = styled.div`
  font-size: 14px;
  color: rgb(0, 198, 142);
`;
 

export const StPostItemSummary = styled.p`
  font-size: 16px;
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

 
`;


export const STYLE_TYPE = {
  'list': css`
      width: 100%;
      display: flex;

      div:first-child {
          flex: 0.2;
      }

      div:nth-child(2) {
          flex: 0.8;
      }
  `,
  'card': css`

      div:first-child {
          width: 100%;
          height: 200px;
          overflow: hidden;
          margin-bottom: 2rem;

          img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
      }

      div:nth-child(2) {
          width: 100%;
      }
  `
}
