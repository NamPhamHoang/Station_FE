import React, { useEffect, useState } from "react";
import { getUsers, fetchAllStations, fetchDetailStation } from "./utils/api";
import "./App.css";
import Page from "./pages/index";
import "antd/dist/antd.css";
import "./styles/index.scss";
const App = () => {
  return (
    <div>
      <Page />
    </div>
  );
};
export default App;
