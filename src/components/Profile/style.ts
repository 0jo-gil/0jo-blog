import styled from "@emotion/styled";

export const StProfileContainer = styled.div`
  display: flex;
  gap: 5%;
  padding: 5% 0;
`;

export const StProfileImgContainer = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
  }
`;

export const StProfileDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    font-size: 33px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
  }


  a {
    font-size: 30px;
  }
`;