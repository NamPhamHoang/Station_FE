import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Transport = ({transport}) => {
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
      name: "Cycle storage availability",
      age: transport.CycleStorage.Spaces,
    },
    {
      key: "2",
      name: "Car park",
      age: transport.CarPark.Spaces,
    },
    {
      key: "3",
      name: "Taxi rank",
      age: transport.TaxiRank  ? transport.TaxiRank.note : ""
    },
    {
      key: "4",
      name: "Bus services",
      age: transport.RailReplacementServices ? transport.RailReplacementServices.note : ""
    },
  ];

  return (
    <div className="detail-station">
      <div className="detail-station__container container">
        <div className="buying" onClick={() => setShowBuying(!showBuying)}>
          <p>Transport links</p>
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

export default Transport;
