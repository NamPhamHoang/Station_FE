import React from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const DetailStation = () => {
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
      name: "Ticket office opening hours",
      age: 32,
    },
    {
      key: "2",
      name: "Self service ticket machines",
      age: 42,
    },
    {
      key: "3",
      name: "Collection of pre-purchased tickets",
      age: 42,
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>Buying tickets and collecting them</p>
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

export default DetailStation;
