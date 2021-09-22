import React from "react";
import { StyledFooter } from "../../styles/styles";

const Footer = () => {
  return (
    <StyledFooter className="container">
      <div className="logo">React.JS</div>
      <div className="attribution">
        © 2021. An interactive learning project from
        <a href="https://wilix.ru/">Wilix</a>. Code licensed under MIT.
      </div>
    </StyledFooter>
  );
};
export default Footer;
