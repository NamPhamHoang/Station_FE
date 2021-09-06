import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const DetailStation = ({fare}) => {
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
      render: (text) => (
        text === "false" ? <CloseOutlined/> : <CheckOutlined/>
      )
    },
  ];

  const data = [
    {
      key: "1",
      name: "Ticket office opening hours",
      age: fare.TicketOffice,
    },
    {
      key: "2",
      name: "Self service ticket machines",
      age: fare.TicketMachine,
    },
    {
      key: "3",
      name: "Collection of pre-purchased tickets",
      age: fare.SmartcardValidator,
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
