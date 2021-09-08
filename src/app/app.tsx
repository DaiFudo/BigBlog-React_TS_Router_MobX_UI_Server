import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";

import Main from "../views/main";
import SignUp from "../views/SignUp";
import SignIn from "../views/SignIn";
import Profile from "../components/profile/profile";

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact></Route>
          <Route path="/reg" component={SignUp}></Route>
          <Route path="/login" component={SignIn}></Route>
          <Route path="/profile" component={Profile}></Route>
        </Switch>
      </Router>
    </>
  );
};
export default App;
