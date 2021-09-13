import React, { useState } from "react";
import axios from "axios";
import Store from "../../store/store";
import { observer } from "mobx-react";
import { toJS } from "mobx";

import {
  StyledBox,
  MyButton,
  LinkRout,
  InputStyle,
  StyledFormApplication,
} from "../../styles/styles";
import { useHistory } from "react-router-dom";

interface ValueForm {
  email?: string;
  password?: string;
}

const Login: React.FC<ValueForm> = observer(() => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const Handler = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    if ((email && password) !== "") {
      const data = { email, password };

      axios
        .post("http://localhost:3000/api/users/login", {
          user: data,
        })

        .then(function (response) {
          console.log(response.data.user);
          const t = response.data.user.token;
          localStorage.setItem("auth", t);
          Store.setUser(response.data.user);
          history.push("/profile");
        })
        .catch(function (error) {
          console.log(error);
          alert("Введите все данные.");
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
            onChange={(e) => setPassword(e.target.value)}
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
});
export default Login;
