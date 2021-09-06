import React from "react";
import {
  StyledBox,
  MyButton,
  LinkRout,
  InputStyle,
  StyledFormApplication,
} from "../../styles/styles";
import onInputHandler from "../services/inputsHandler";
interface SignUpFormProps {}
interface ValueForm {
  nickname?: string;
  email?: string;
  password?: string;
}

const Reg: React.FC<ValueForm> = (props) => {
  return (
    <div>
      <StyledBox>
        <StyledFormApplication component="form" className="app-form">
          <span>Sign up</span>
          <LinkRout to="/login">Have an account?</LinkRout>

          <InputStyle
            value={props.nickname!}
            name="nickname"
            type="text"
            placeholder="Nickname"
          />
          <InputStyle name="email" type="text" placeholder="Email" />
          <InputStyle name="password" type="text" placeholder="Password" />
          <MyButton type="submit" className="btn">
            SignUp
          </MyButton>
        </StyledFormApplication>
      </StyledBox>
    </div>
  );
};
export default Reg;
