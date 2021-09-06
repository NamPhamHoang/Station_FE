import React from "react";
import {
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Table, Tag, Space } from "antd";
import { useState } from "react/cjs/react.development";

const Accesibility = ({accesibility}) => {
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
      age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "2",
      name: "Customer help points",
      age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "3",
      name: "Staff help",
      age: accesibility.StaffHelpAvailable === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "4",
      name: "Accessible ticket machines",
      age: accesibility.AccessibleTicketMachines === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "5",
      name: "Accessible ticket office counter",
      age: accesibility.HeightAdjustedTicketOfficeCounter === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "6",
      name: "Induction loop",
      age: accesibility.InductionLoop === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "7",
      name: "Ramp for train access",
      age: accesibility.RampForTrainAccess === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "8",
      name: "Accessible taxis",
      age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>
    },
    {
      key: "9",
      name: "Accessible public pay phones",
      age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    {
      key: "10",
      name: "National key toilets",
      age:accesibility.NationalKeyToilets === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    // {
    //   key: "11",
    //   name: "Step free access coverage",
    //   age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    // },
    {
      key: "12",
      name: "Impaired mobility set down",
      age: accesibility.ImpairedMobilitySetDown === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    },
    // {
    //   key: "13",
    //   name: "Disabled parking",
    //   age: accesibility.Helpline === "false" ? <CloseOutlined/> : <CheckOutlined/>,
    // },
    {
      key: "14",
      name: "Wheelchairs",
      age: accesibility.WheelchairsAvailable === "false" ? <CloseOutlined/> : <CheckOutlined/>,
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
