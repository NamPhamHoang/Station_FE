import React, { useEffect, useState } from "react";
import Buying from "./TrainStation";
import General from "./General";
import Information from "./Information";
import Facility from "./Facilities";
import Accesibility from "./Accesibility";
import Transport from "./Transport";
import { detectStationProperties } from "../../utils/functions/detectStationProperties";
import { fetchDetailStation } from "../../utils/api";
import {
  useParams
} from "react-router-dom";
import { message } from "antd";
import { stationModel } from "../../utils/models/station-model";

const Train = ({ stations, setStation }) => {
  let detectStation = null;
  const { CrsCode } = useParams();
  const [currentStation, setCurrentStation] = useState(stationModel);
  useEffect(() => {
    fetchDetailStation(CrsCode)
    .then((data) => {
      if(data) {
        detectStation = detectStationProperties(data)
        setCurrentStation(detectStation)
      }
    })
    .catch((err) => {
      message.error("Failed to load")
    })
  }, [CrsCode])
  return (
    <div className="Train">
      <Buying fare={currentStation.fare}/>
      <General general={currentStation.generalServiceInform}/>
      <Information infor={currentStation.firstClassInformation}/>
      <Facility facility={currentStation.StationFacilities}/>
      <Accesibility accesibility={currentStation.Accessibility}/>
      <Transport transport={currentStation.Interchange}/>
    </div>
  );
};

export default Train;
