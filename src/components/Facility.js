import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, AutoComplete } from "antd";

const Facility = () => {
  const { Option } = AutoComplete;
  const { TextArea } = Input;
  const [showFeed, setShowFeed] = useState(false);
  const [showFeedYes, setShowFeedYes] = useState("");

  const [result, setResult] = useState([]);
  const handleSearch = (value) => {
    let res = [];
    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        (domain) => `${value}@${domain}`
      );
    }
    setResult(res);
  };

  const handleShow = (value) => {
    setShowFeed(true);
    if (value == "yes") {
      setShowFeedYes("yes");
    } else {
      setShowFeedYes("no");
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
              <Input placeholder="Search for station" />
              <AutoComplete
                style={{ width: 200 }}
                onSearch={handleSearch}
                placeholder="input here"
              >
                {result.map((email) => (
                  <Option key={email} value={email}>
                    {email}
                  </Option>
                ))}
              </AutoComplete>
              <Button type="primary">Submit</Button>
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

      <div className="useful container">
        <h1>Did you find this page useful?</h1>
        <div className="yes-no">
          <Button
            type="primary"
            style={
              showFeedYes == "yes"
                ? { backgroundColor: "#6f002e", color: "white" }
                : {}
            }
            onClick={() => handleShow("yes")}
          >
            Yes
          </Button>
          <Button
            style={
              showFeedYes == "no"
                ? { backgroundColor: "#6f002e", color: "white" }
                : {}
            }
            type="primary"
            onClick={() => handleShow("no")}
          >
            No
          </Button>
        </div>

        {showFeed && (
          <div className="findmost">
            {showFeedYes == "yes" ? (
              <h3>
                "What did you find most useful?"
                <span>(Optional)</span>
              </h3>
            ) : (
              <h3>
                "What was it you were trying to do?"
                <span>(Optional)</span>
              </h3>
            )}
            <TextArea rows={6} />
            <Button type="primary">Send feedback</Button>
            <p>Your feedback will help us to improve this page.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Facility;
