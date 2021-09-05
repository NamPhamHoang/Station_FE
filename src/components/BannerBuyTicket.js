import React, { useState } from "react";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Form, Input, Button, Checkbox } from "antd";
import ShowTicket from "./ShowTicket";
import Facility from "./Facility";

const BuyTicket = () => {
  const [showTicket, setShowTicket] = useState(false);

  return (
    <>
      <div className="buy-ticket">
        <div className="buy-ticket__container container">
          <div className="text-banner">
            <h1>Stations</h1>
            <p>
              Get detailed information on the facilities available at stations
            </p>
          </div>
          {/* BUTTON BUY TICKET */}
          <div
            className="btn-buyticker"
            onClick={() => setShowTicket(!showTicket)}
          >
            <div
              className="box"
              style={
                showTicket
                  ? { backgroundColor: "rgb(111, 0, 46)", color: "white" }
                  : {}
              }
            >
              <p>
                <span>Buy tickets</span>{" "}
                {!showTicket ? <PlusOutlined /> : <MinusOutlined />}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* SHOW */}
      <ShowTicket showTicket={showTicket} />
      {/* Facility */}
      <Facility />
    </>
  );
};

export default BuyTicket;
