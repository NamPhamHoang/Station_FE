import React, { useEffect, useState } from "react";
import { getUsers, fetchAllStations, fetchDetailStation } from "./utils/api";
import "./App.css";
import Page from "./pages/index";
import "antd/dist/antd.css";
import "./styles/index.scss";
const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // fetchAllStations.then(data => {
    //   setUsers(data)
    // })
    fetchDetailStation("BGD").then((data) => {
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
