import React, { useEffect, useState } from "react";
import { getUsers, fetchAllStations, fetchDetailStation } from "./utils/api";
import "./App.css";
import Page from "./pages/index";
import "antd/dist/antd.css";
import "./styles/index.scss";
const App = () => {
  const [stations, setStation] = useState([]);

  return (
    <div>
      <Page stations={stations} setStation={setStation} />
    </div>
  );
};
export default App;
