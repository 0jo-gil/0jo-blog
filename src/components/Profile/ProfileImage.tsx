import {ProfileInfoImg} from "../../assets/img";
import {StProfileImgContainer} from "components/Profile/style";

const ProfileImage = () => {
    return (
        <StProfileImgContainer>
            <img srcSet={ProfileInfoImg} alt="profile 이미지"/>
        </StProfileImgContainer>
    )
}

export default ProfileImage;
