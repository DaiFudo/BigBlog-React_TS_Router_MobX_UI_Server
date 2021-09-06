import React from "react";

import {
  LinkRout,
  StyledHeader,
  StyledLogo,
  StyledWrapper,
} from "../../styles/styles";
const Header: React.FC = () => {
  return (
    <div className="container">
      <StyledHeader className="header">
        <StyledLogo component="a" className="Logo">
          REACT.JS
        </StyledLogo>
        <StyledWrapper className="linksWrapper">
          <LinkRout to="/">Home</LinkRout>
          <LinkRout to="/login">Sign In</LinkRout>
          <LinkRout to="/reg">Sign up</LinkRout>
        </StyledWrapper>
      </StyledHeader>
    </div>
  );
};
export default Header;
