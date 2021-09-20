import React from "react";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";
import { useHistory } from "react-router-dom";

import {
  StyledBanner,
  StyledLogoBanner,
  StyledTitleBanner,
} from "../../styles/styles";

const Banner: React.FC = observer(() => {
  const regOn = () => {
    if (!localStorage.getItem("auth")) {
      history.push("/");
    }
    return (
      <StyledBanner className="banner">
        <StyledLogoBanner className="logo__banner">
          You are in the profile 😘
        </StyledLogoBanner>
        <StyledTitleBanner className="title">
          Authorization - {localStorage.getItem("username")?.toUpperCase()}
        </StyledTitleBanner>
      </StyledBanner>
    );
  };
  const history = useHistory();
  const regOff = () => {
    return (
      <div>
        <StyledBanner className="banner">
          <StyledLogoBanner className="logo__banner">REACT.JS</StyledLogoBanner>
          <StyledTitleBanner className="title">
            A place to share your React knowledge.
          </StyledTitleBanner>
        </StyledBanner>
      </div>
    );
  };

  if (window.location.href === "http://localhost:3001/") {
    return <StyledBanner className="banner">{regOff}</StyledBanner>;
  }
  return <StyledBanner className="banner">{regOn}</StyledBanner>;
  /* return (
    <StyledBanner className="banner">
      {localStorage.getItem("auth") ? regOn : regOff}
    </StyledBanner>
  ); */
});
export default Banner;
