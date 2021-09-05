import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/index";
import Detail from "./Details/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <Router>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default HomePage;
