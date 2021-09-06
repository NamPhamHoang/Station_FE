import React, { useEffect, useState } from "react";
import Buying from "./TrainStation";
import General from "./General";
import Information from "./Information";
import Facility from "./Facilities";
import Accesibility from "./Accesibility";
import Transport from "./Transport";
import { detectStationProperties } from "../../utils/functions/detectStationProperties";
import { fetchDetailStation } from "../../utils/api";
import { useParams } from "react-router-dom";
import { message, Spin, Alert } from "antd";
import { stationModel } from "../../utils/models/station-model";

const Train = () => {
  let detectStation = null;
  const { CrsCode } = useParams();
  const [currentStation, setCurrentStation] = useState(stationModel);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchDetailStation(CrsCode)
      .then((data) => {
        if (data) {
          detectStation = detectStationProperties(data);
          setCurrentStation(detectStation);
          setLoading(false);
        }
      })
      .catch((err) => {
        message.error("Failed to load");
      });
  }, [CrsCode]);
  return (
    <>
      {loading ? (
        <Spin tip="Loading..." spinning={loading}>
          <Alert
            message="Loading"
            description="Loading for detail station"
            type="info"
          />
        </Spin>
      ) : (
        <div className="Train">
          <Buying fare={currentStation.fare} />
          <General general={currentStation.generalServiceInform} />
          <Information infor={currentStation.firstClassInformation} />
          <Facility facility={currentStation.StationFacilities} />
          <Accesibility accesibility={currentStation.Accessibility} />
          <Transport transport={currentStation.Interchange} />
        </div>
      )}
    </>
  );
};

export default Train;
