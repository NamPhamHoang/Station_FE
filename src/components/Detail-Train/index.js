import React from "react";
import Buying from "./TrainStation";
import General from "./General";
import Information from "./Information";
import Facility from "./Facilities";
import Accesibility from "./Accesibility";
import Transport from "./Transport";
import { detectStationProperties } from "../../utils/functions/detectStationProperties";

const Train = ({ stations, setStation }) => {
  let detectStation = null;
  if(stations) {
    detectStation = detectStationProperties(stations)
  }
  return (
    <div className="Train">
      <Buying fare={detectStation.fare}/>
      <General general={detectStation.generalServiceInform}/>
      <Information infor={detectStation.firstClassInformation}/>
      <Facility facility={detectStation.StationFacilities}/>
      <Accesibility accesibility={detectStation.Accessibility}/>
      <Transport transport={detectStation.Interchange}/>
    </div>
  );
};

export default Train;
