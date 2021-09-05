import React from "react";
import { useEffect, useState } from "react";
import { getUsers } from "./utils/api";
import "./App.css";
import Page from "./pages/index";
import "antd/dist/antd.css";
import "./styles/index.scss";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data);
    });
  }, []);
  return (
    <div>
      <Page />
    </div>
  );
};
// {/* {JSON.stringify(users)} */}

export default App;
