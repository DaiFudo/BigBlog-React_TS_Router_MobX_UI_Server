import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  StyledBox,
  MyButton,
  LinkRout,
  InputStyle,
  StyledFormApplication,
} from "../../styles/styles";

interface ValueForm {
  nickname?: string;
  email?: string;
  password?: string;
}

const Reg: React.FC<ValueForm> = () => {
  //hook useState take reg date and send him.
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const Handler = async (e: any) => {
    e.preventDefault();
    if ((username && email && password) !== "") {
      const data = { username, email, password };
      axios
        .post("http://localhost:3000/api/users", {
          user: data,
        })
        .then(function (response) {
          const t = response.data.user.token;
          localStorage.setItem("auth", t);
          localStorage.setItem("email", email);
          localStorage.setItem("username", response.data.user.username);
          history.push("/profile");
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
      <StyledBox>
        <StyledFormApplication
          onSubmit={Handler}
          component="form"
          className="app-form"
        >
          <span>Sign up</span>
          <LinkRout to="/login">Have an account?</LinkRout>

          <InputStyle
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            type="text"
            placeholder="Username"
          />
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
            SignUp
          </MyButton>
        </StyledFormApplication>
      </StyledBox>
    </div>
  );
};
export default Reg;
