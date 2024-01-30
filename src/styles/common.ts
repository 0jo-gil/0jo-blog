import styled from '@emotion/styled';
import React from "react";

type StyleProps = {
    $style?: React.CSSProperties;
}

export const StInnerContainer = styled.div<StyleProps>`
  width: 1080px;
  margin: 0 auto;
  ${({$style}) => $style}
`;

export const StFlexRow = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  list-style: none;
  ${({$style}) => $style}
`;


export const StContentTitle = styled.h2`
  font-size: 22px;
  color: #000;
  font-weight: bold;
  margin-bottom: 2%;
`;

