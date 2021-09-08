import React from "react";

import { LinkRout, StyledWrapper } from "../../styles/styles";
import Banner from "../banner/banner";
import Header from "../header/header";

const Profile: React.FC = () => {
  return (
    <>
      <Header />
      <Banner />
      <StyledWrapper>
        <span className="sup-message">Account authorization - access.</span>
        <div>
          <LinkRout to="/">Main feed</LinkRout>
        </div>
      </StyledWrapper>
    </>
  );
};
export default Profile;
