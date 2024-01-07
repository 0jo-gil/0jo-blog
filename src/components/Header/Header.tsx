import styled from "@emotion/styled";
import React from "react";
import { StFlexRow, StInnerContainer } from "styles/common";
import { StHeaderTitle } from "components/Header/style";
import { Link } from "gatsby";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Header: React.FC = () => {
    return (
        <StHeader>
            <StInnerContainer className="flex flex-row justify-between items-center">
                <Link to={'/'}>
                    <StHeaderTitle>0jo's dev blog</StHeaderTitle>
                </Link>


            </StInnerContainer>
        </StHeader>
    )
}

export default Header;

const StHeader = styled.header`
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: center;
`;
