import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/index";
import Detail from "./Details/index";

const HomePage = ({ stations, setStation }) => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home stations={stations} setStation={setStation} />
        </Route>
        <Route path="/detail">
          <Detail stations={stations} setStation={setStation} />
        </Route>
      </Switch>
    </Router>
  );
};

export default HomePage;
