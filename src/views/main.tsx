import React from "react";
import Header from "../components/header/header";
import Feed from "../components/feed/feed";
import Footer from "../components/footer/footer";
import Banner from "../components/banner/banner";

const Main: React.FC = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
      <Footer />
    </div>
  );
};
export default Main;
