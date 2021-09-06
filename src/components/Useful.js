import React, { useState, useEffect } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, AutoComplete } from "antd";

const UseFul = () => {
  const { TextArea } = Input;
  const [showFeed, setShowFeed] = useState(false);
  const [showFeedYes, setShowFeedYes] = useState("");

  const handleShow = (value) => {
    setShowFeed(true);
    if (value === "yes") {
      setShowFeedYes("yes");
    } else {
      setShowFeedYes("no");
    }
  };

  return (
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
  );
};

export default UseFul;
