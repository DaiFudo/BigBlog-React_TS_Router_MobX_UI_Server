import React from "react";
import {
  StyledBox,
  MyButton,
  LinkRout,
  InputStyle,
  StyledFormApplication,
} from "../../styles/styles";

const Login: React.FC = () => {
  return (
    <div>
      <StyledBox className="container">
        <StyledFormApplication component="form" className="app-form">
          <span>Login</span>
          <LinkRout to="/reg">Need an account?</LinkRout>
          <InputStyle name="nickname" type="text" placeholder="Nickname" />
          <InputStyle name="email" type="text" placeholder="Email" />
          <InputStyle name="password" type="text" placeholder="Password" />
          <MyButton type="submit" className="btn">
            SignIn
          </MyButton>
        </StyledFormApplication>
      </StyledBox>
    </div>
  );
};
export default Login;
