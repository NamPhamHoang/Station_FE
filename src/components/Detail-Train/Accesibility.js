import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Accesibility = () => {
  const [showBuying, setShowBuying] = useState(false);

  const columns = [
    {
      title: "Facility",
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
      name: "Helpline",
      age: "Contact our Customer Relations team directly via the customer webform at www.tfwrail.wales",
    },
    {
      key: "2",
      name: "Customer help points",
      age: 42,
    },
    {
      key: "3",
      name: "Staff help",
      age: 42,
    },
    {
      key: "4",
      name: "Accessible ticket machines",
      age: "0800 40 50 40",
    },
    {
      key: "5",
      name: "Accessible ticket office counter",
      age: 42,
    },
    {
      key: "6",
      name: "Induction loop",
      age: 42,
    },
    {
      key: "7",
      name: "Ramp for train access",
      age: 42,
    },
    {
      key: "8",
      name: "Accessible taxis",
      age: 42,
    },
    {
      key: "9",
      name: "Accessible public pay phones",
      age: 42,
    },
    {
      key: "10",
      name: "National key toilets",
      age: 42,
    },
    {
      key: "11",
      name: "Step free access coverage",
      age: 42,
    },
    {
      key: "12",
      name: "Impaired mobility set down",
      age: 42,
    },
    {
      key: "13",
      name: "Disabled parking",
      age: 42,
    },
    {
      key: "14",
      name: "Wheelchairs",
      age: 42,
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>Accesibility</p>
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

export default Accesibility;
