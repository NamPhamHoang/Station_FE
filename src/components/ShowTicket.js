import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Select } from "antd";
import DetailJourney from "./Detail-journey";
const ShowTicket = ({ showTicket }) => {
  const [tab, setTab] = useState("");
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  const handleChangeValue = (value) => {
    if (value === "passenger") {
      setTab("passenger");
    } else if (value === "railcard") {
      setTab("railcard");
    } else if (value === "via") {
      setTab("via");
    } else if (value === "promo") {
      setTab("promo");
    }
  };
  return (
    <>
      {showTicket && (
        <div className="detail-buyticker">
          <div className="detail-buyticker__container container">
            <div className="box-left">
              <Form
                className="form-header"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item label="From" name="username">
                  <Input
                    style={{ marginLeft: "-43px" }}
                    placeholder="Search for station"
                  />
                </Form.Item>
                <Form.Item label="Going" name="username">
                  <Input style={{ width: "150px" }} />
                </Form.Item>{" "}
                <Form.Item label="To" name="username">
                  <Input
                    style={{ marginLeft: "-43px" }}
                    placeholder="Search for station"
                  />
                </Form.Item>
                <Form.Item label="Returning" name="password">
                  <Input style={{ width: "150px" }} />
                </Form.Item>
              </Form>
              {/* journey */}
              <div className="journey">
                <h3 className="h3-journey">Journey details</h3>
                <ul>
                  <li onClick={() => handleChangeValue("passenger")}>
                    Passengers <span>1</span>
                  </li>
                  <li onClick={() => handleChangeValue("railcard")}>
                    Railcards <span>1</span>
                  </li>
                  <li onClick={() => handleChangeValue("via")}>
                    Via / Avoid <span>None</span>
                  </li>
                  <li onClick={() => handleChangeValue("promo")}>
                    Promo <span>None</span>
                  </li>
                </ul>
              </div>
              {/* DETAIL JOURNEY */}
              <DetailJourney tab={tab} setTab={setTab} />
              {/* find-train */}
              <div className="find-train">
                <Button className="btn-findtrain" type="primary">
                  Find my train
                </Button>
                <div className="avoid">
                  <p>Avoid the queues when you buy online</p>
                  <Button type="primary">Season tickets</Button>
                </div>
              </div>
            </div>
            {/* BOX right */}
            <div className="box-right">
              <h3>Buy train tickets for any journey in Great Britain</h3>
              <h4>Your recent searches:</h4>
              <p>
                There have been no recent searches performed, your recently
                searched journeys will appear here.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowTicket;
