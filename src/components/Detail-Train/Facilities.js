import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Facility = () => {
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
      name: "Seating area",
      age: "Contact our Customer Relations team directly via the customer webform at www.tfwrail.wales",
    },
    {
      key: "2",
      name: "Waiting rooms",
      age: 42,
    },
    {
      key: "3",
      name: "Trolleys",
      age: 42,
    },
    {
      key: "4",
      name: "Refreshment facilities",
      age: "0800 40 50 40",
    },
    {
      key: "5",
      name: "Toilets",
      age: 42,
    },
    {
      key: "6",
      name: "Baby changing",
      age: 42,
    },
    {
      key: "7",
      name: "Pay phone",
      age: 42,
    },
    {
      key: "8",
      name: "Public Wi-Fi",
      age: 42,
    },
    {
      key: "9",
      name: "Post box",
      age: 42,
    },
    {
      key: "10",
      name: "Tourist information office",
      age: 42,
    },
    {
      key: "11",
      name: "Cashpoint",
      age: 42,
    },
    {
      key: "12",
      name: "Bureau de change",
      age: 42,
    },
    {
      key: "13",
      name: "Shops",
      age: 42,
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>Station facilities</p>
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

export default Facility;
