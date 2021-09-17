import React from "react";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";
import {
  StyledBanner,
  StyledLogoBanner,
  StyledTitleBanner,
} from "../../styles/styles";

const Banner: React.FC = observer(() => {
  const regOn = () => {
    console.log(Store);

    return (
      <StyledBanner className="banner">
        <StyledLogoBanner className="logo__banner">
          You are in the profile
        </StyledLogoBanner>
        <StyledTitleBanner className="title">
          Authorization - {localStorage.getItem("username")?.toUpperCase()}
        </StyledTitleBanner>
      </StyledBanner>
    );
  };

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
  return (
    <StyledBanner className="banner">
      {localStorage.getItem("auth") ? regOn : regOff}
    </StyledBanner>
  );
});
export default Banner;
