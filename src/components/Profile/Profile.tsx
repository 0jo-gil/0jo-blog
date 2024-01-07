import ProfileDesc from "components/Profile/ProfileDesc";
import ProfileImage from "components/Profile/ProfileImage";
import { StProfileContainer } from "./style";

const Profile = () => {
    return (
        <StProfileContainer>
            <ProfileImage />
            <ProfileDesc />
        </StProfileContainer>
    )
}

export default Profile;
