import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../views/main";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Home from "../components/home/home";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/reg" component={SignUp}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/home" component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
