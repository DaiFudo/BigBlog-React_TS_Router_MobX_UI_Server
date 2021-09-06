import React from "react";

import {
  StyledBanner,
  StyledLogoBanner,
  StyledTitleBanner,
} from "../../styles/styles";
const Banner: React.FC = () => {
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
export default Banner;
