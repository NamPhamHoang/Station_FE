import React, { useState, useEffect } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, AutoComplete, Spin, Alert } from "antd";
import { getUsers, fetchAllStations, fetchDetailStation } from "../utils/api";
import UseFul from "./Useful";
import { useHistory } from "react-router";

const Facility = ({ stations, setStation }) => {
  const [code, setCode] = useState([]);
  const [selectCode, setSelectCode] = useState("");
  const history = useHistory();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllStations().then((data) => {
      setCode(data);
      setLoading(false)
    });
  }, []);

  const onSelect = (value) => {
    code.filter((item) => {
      if (item.value === value) {
        setSelectCode(item.CrsCode);
      }
    });
  };

  const onSubmitStation = () => {
    if (selectCode !== "") {
      fetchDetailStation(selectCode).then((data) => {
        setStation(data);
        history.push("/detail");
      });
    }
  };

  return (
    <>
      <div className="falicity">
        <div className="falicity__container container">
          <div className="left">
            <h2>What facilities do the stations have?</h2>
            <p>
              Whether you want information about where you'll start or finish
              your journey, or where you'll change trains, you can get details
              of what's available at a particular station by entering the
              station name in the box below.
            </p>
            <div className="search">
              <p>Station search by name, location</p>
              <Spin 
                spinning={loading}  
                style={{
                  width: 200,
                }}>
              </Spin>
              <AutoComplete
                disabled={loading}
                style={{
                  width: 200,
                }}
                options={code}
                placeholder="Search for station"
                filterOption={(inputValue, option) =>
                  option.value
                    .toUpperCase()
                    .indexOf(inputValue.toUpperCase()) !== -1
                }
                onSelect={onSelect}
              />
              <Button type="primary" onClick={onSubmitStation}>
                Submit
              </Button>
              <a>Show A-Z list of all stations</a>
            </div>
          </div>

          <div className="right">
            <h1>Related content</h1>
            <ul>
              <li>A-Z of stations</li>
              <li>Special offers</li>
              <li>Route Map</li>
            </ul>
          </div>
        </div>
      </div>
      {/* USEFUL */}
      <UseFul />
    </>
  );
};

export default Facility;
