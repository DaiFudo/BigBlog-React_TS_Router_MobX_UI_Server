import React from "react";
import { observer } from "mobx-react-lite";
import Store from "../../store/store";
import { useHistory } from "react-router-dom";
import {
  LinkRout,
  StyledHeader,
  StyledLogo,
  StyledWrapper,
} from "../../styles/styles";

const Header: React.FC = observer(() => {
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem("auth");
    localStorage.removeItem("username");
    localStorage.removeItem("email");

    history.push("/main");
  };

  const regOn = () => {
    return (
      <StyledWrapper>
        <LinkRout to="/">Home</LinkRout>
        <LinkRout to="/profile">Profile</LinkRout>
        <LinkRout onClick={logOut} to="/">
          Sign Out
        </LinkRout>
      </StyledWrapper>
    );
  };

  const regOff = () => {
    return (
      <StyledWrapper>
        <LinkRout to="/">Home</LinkRout>
        <LinkRout to="/login">SignIn</LinkRout>
        <LinkRout to="/reg">SignUp</LinkRout>
      </StyledWrapper>
    );
  };

  return (
    <div className="container">
      <StyledHeader>
        <StyledLogo component="a">REACT.JS</StyledLogo>
        <StyledWrapper>
          {localStorage.getItem("auth") ? regOn : regOff}
        </StyledWrapper>
      </StyledHeader>
    </div>
  );
});

export default Header;
