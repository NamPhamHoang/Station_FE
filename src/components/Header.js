import React, { useState } from "react";
import { HomeOutlined, RightOutlined, MenuOutlined } from "@ant-design/icons";
import { Drawer, Button } from "antd";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="header">
      <div className="header-container ">
        <div className="main-header ">
          <ul className="main-header__ul container">
            <HomeOutlined />
            <li>Tickets</li>
            <li>Travel updates</li>
            <li>Stations & destinations</li>
            <li>Special offers</li>
            <li>On-board</li>
            <li>Customer service</li>
            <li>Last minute tickets</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="sub-header ">
          <ul className="sub-header__ul container">
            <li>Route map</li>
            <li>Our routes</li>
            <li>Destinations</li>
            <li>Things to do</li>
            <li>Hotels</li>
            <li>Airports</li>
          </ul>
        </div>
        {/* RESPONSIVE */}
        <div className="menu-res">
          <div className="max-icon" onClick={showDrawer}>
            <MenuOutlined />
            <span>Menu</span>
          </div>
          <div className="img-country">
            <span>Sign in</span> <span>/</span> <span>Register</span>
          </div>
          <Drawer
            title="Menu"
            placement="right"
            onClose={onClose}
            visible={visible}
          >
            <p>Tickets</p>
            <p>Travel updates</p>
            <p>Stations & destinations</p>
            <p>Special offers</p>
            <p>On-board</p>
            <p>Customer service</p>
            <p>Last minute tickets</p>
            <p>Blog</p>
          </Drawer>
        </div>

        <div className="breadcrumb__wrapper">
          <ul className="breadcrumb__wrapper__ul container">
            <li>
              Home <RightOutlined />
            </li>
            <li>
              Stations & destinations <RightOutlined />
            </li>
            <li>Stations </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
