import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home/index";
import Detail from "./Details/index";

const HomePage = ({ stations, setStation }) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home stations={stations} setStation={setStation} />
        </Route>
        <Route exact path="/detail/:CrsCode">
          <Detail stations={stations} setStation={setStation} />
        </Route>
      </Switch>
    </Router>
  );
};

export default HomePage;
