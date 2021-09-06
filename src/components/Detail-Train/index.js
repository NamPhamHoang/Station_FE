import React from "react";
import Buying from "./TrainStation";
import General from "./General";
import Information from "./Information";
import Facility from "./Facilities";
import Accesibility from "./Accesibility";
import Transport from "./Transport";

const Train = () => {
  return (
    <div className="Train">
      <Buying />
      <General />
      <Information />
      <Facility />
      <Accesibility />
      <Transport />
    </div>
  );
};

export default Train;
