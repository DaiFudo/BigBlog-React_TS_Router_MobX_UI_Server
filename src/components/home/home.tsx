import React from "react";

import { StyledBox, LinkRout, StyledWrapper } from "../../styles/styles";

const Home: React.FC = () => {
  return (
    <StyledBox>
      <StyledWrapper>
        <span className="sup-message">Авторизация подтверждена.</span>
        <div>
          <LinkRout to="/">Выход</LinkRout>
        </div>
      </StyledWrapper>
    </StyledBox>
  );
};
export default Home;
