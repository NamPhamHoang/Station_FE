import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const General = ({general}) => {
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
      age: general.CustomerService,
    },
    {
      key: "2",
      name: "Left luggage",
      age: general.LeftLuggage === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "3",
      name: "Lost property (at the station)",
      age: general.LostProperty === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "4",
      name: "British Transport Police",
      age: general.Contact
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
