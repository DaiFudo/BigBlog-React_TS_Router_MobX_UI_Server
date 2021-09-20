import React from "react";

import { LinkRout, StyledWrapper } from "../../styles/styles";
import Header from "../header/header";
import Banner from "../banner/banner";
import Feed from "../feed/feed";
import Footer from "../footer/footer";
import Store from "../../store/store";
import { observer } from "mobx-react-lite";
const Profile: React.FC = observer(() => {
  return (
    <>
      <Header />
      <Banner />
      <Feed />
      <Footer />
    </>
  );
});

export default Profile;
