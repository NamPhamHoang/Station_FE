import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const General = () => {
  const [showBuying, setShowBuying] = useState(false);

  const columns = [
    {
      title: "Service",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "	Information",
      dataIndex: "age",
      key: "age",
    },
  ];

  const data = [
    {
      key: "1",
      name: "Aber station customer services",
      age: "Contact our Customer Relations team directly via the customer webform at www.tfwrail.wales",
    },
    {
      key: "2",
      name: "Left luggage",
      age: 42,
    },
    {
      key: "3",
      name: "Lost property (at the station)",
      age: 42,
    },
    {
      key: "4",
      name: "British Transport Police",
      age: "0800 40 50 40",
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>General services information</p>
          {!showBuying ? <PlusOutlined /> : <MinusOutlined />}
        </div>

        {/* SHOW */}
        {showBuying && (
          <div className="box-show">
            <div className="left">
              <Table columns={columns} dataSource={data} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default General;
