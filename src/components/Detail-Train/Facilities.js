import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Facility = ({facility}) => {
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
      age: facility.SeatedArea === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "2",
      name: "Waiting rooms",
      age: facility.WaitingRoom === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "3",
      name: "Trolleys",
      age: facility.Trolleys === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "4",
      name: "Refreshment facilities",
      age: facility.Refreshment === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "5",
      name: "Toilets",
      age: facility.Toilets === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "6",
      name: "Baby changing",
      age: facility.BabyChange === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "7",
      name: "Pay phone",
      age: facility.Telephones === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "8",
      name: "Public Wi-Fi",
      age: facility.WiFi === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "9",
      name: "Post box",
      age: facility.PostBox === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "10",
      name: "Tourist information office",
      age: facility.TouristInformation === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "11",
      name: "Cashpoint",
      age: facility.Cashpoint === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "12",
      name: "Bureau de change",
      age: facility.BureauDeChange === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "13",
      name: "Shops",
      age: facility.Shops === "false" ? <CloseOutlined/> : <CheckOutlined/>,
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
