import React from "react";
import {StInnerContainer} from "styles/common";
import SectionTitle from "components/Section/SectionTitle";

type Props = {
    children?: React.ReactNode;
}

const Section = ({children}: Props) => {

    return (
        <StInnerContainer>
            {children}
        </StInnerContainer>
    )
}
export default Section;

Section.Title = SectionTitle;
