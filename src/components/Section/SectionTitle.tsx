import {StFlexRow} from "styles/common";
import {StSectionLink, StSectionTitle} from "components/Section/style";

type Props = {
    title?: string;
    link?: {
        to: string;
        text: string;
    };
}
const SectionTitle = ({title, link}: Props) => {
    return (
        <StFlexRow $style={{justifyContent: 'space-between', marginBottom: '40px'}}>
            {title && <StSectionTitle>{title}</StSectionTitle>}
            {link && <StSectionLink to={link.to}>{link.text}</StSectionLink>}
        </StFlexRow>
    )
}

export default SectionTitle;
