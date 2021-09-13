import React from "react";
import { toJS } from "mobx";

import { LinkRout, StyledWrapper } from "../../styles/styles";
import Header from "../header/header";
import Banner from "../banner/banner";
import Feed from "../feed/feed";
import Footer from "../footer/footer";
import Store from "../../store/store";
import { observer } from "mobx-react-lite";
const Profile: React.FC = observer(() => {
  console.log(toJS(Store));
  return (
    <>
      <Header />
      <Banner />
      <Feed />
      <StyledWrapper>
        <span className="sup-message">
          Account {Store?.username} authorization - access.
        </span>
        <div>
          <LinkRout to="/">Main feed</LinkRout>
        </div>
      </StyledWrapper>
      <Footer />
    </>
  );
});

export default Profile;
