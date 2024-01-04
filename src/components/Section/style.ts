import styled from "@emotion/styled";
import {Link} from "gatsby";

export const StSectionTitle = styled.h2`
  font-size: 26px;
  color: #000;
  font-weight: bold;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80%;
    height: 3px;
    background-color: #000;
    position: absolute;
    bottom: -10px;
    left: 0;
  }
`;

export const StSectionLink = styled(Link)`
  font-size: 16px;
  color: #000;
  font-weight: bold;
 


`;
