import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Information = ({infor}) => {
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
      name: "Lounge",
      age: infor.lounge === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>First class information</p>
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

export default Information;
