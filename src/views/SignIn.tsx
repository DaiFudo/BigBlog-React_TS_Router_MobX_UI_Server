import React from "react";
import Login from "../components/login/login";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

const SignIn: React.FC = () => {
  return (
    <div>
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default SignIn;
