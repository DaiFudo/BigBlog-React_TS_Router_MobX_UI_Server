import React, { useState } from "react";
import axios from "axios";
import {
  StyledBox,
  MyButton,
  LinkRout,
  InputStyle,
  StyledFormApplication,
} from "../../styles/styles";

interface ValueForm {
  email?: string;
  password?: string;
}

const Login: React.FC<ValueForm> = () => {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const Handler = async (e: any) => {
    e.preventDefault();
    if ((email && password) !== "") {
      const data = { email, password };

      axios
        .get("http://localhost:3000/api/users", {})
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Введите все данные.");
    }
  };

  return (
    <div>
      <StyledBox className="container">
        <StyledFormApplication
          onSubmit={Handler}
          component="form"
          className="app-form"
        >
          <span>Login</span>
          <LinkRout to="/reg">Need an account?</LinkRout>
          <InputStyle
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="text"
            placeholder="Email"
          />
          <InputStyle
            onChange={(e) => setpassword(e.target.value)}
            name="password"
            type="text"
            placeholder="Password"
          />
          <MyButton type="submit" className="btn">
            SignIn
          </MyButton>
        </StyledFormApplication>
      </StyledBox>
    </div>
  );
};
export default Login;
