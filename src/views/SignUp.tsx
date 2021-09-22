import React from "react";

import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Reg from "../components/registration/reg";
interface SignUpProps {}
const SignUp: React.FC<SignUpProps> = (props) => {
  return (
    <div>
      <Header />
      <Reg />
      <Footer />
    </div>
  );
};

export default SignUp;
