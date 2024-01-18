import { StFlexRow } from "styles/common";
import { StProfileDescContainer } from "./style";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ProfileDesc = () => {
    return (
        <StProfileDescContainer>
            <h2>@0jo</h2>
            <p>나는 성장을 꾸준히 하고 있는가?</p>

            <StFlexRow $style={{ gap: '10px' }}>
                <li>
                    <a href="https://github.com/0jo-gil" target="_blank"><FaGithub /></a>
                </li>

                <li>
                    <a href="mailto:0joofficial@gmail.com"><MdEmail /></a>
                </li>
            </StFlexRow>
        </StProfileDescContainer>
    )
}

export default ProfileDesc;
