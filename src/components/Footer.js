import React from "react";
import { Row, Col, Divider } from "antd";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={6}>
            <h2>Tickets & timetables</h2>
            <ul>
              <li>
                <a>Train timetables</a>
              </li>
              <li>
                <a>Ticket types</a>
              </li>
              <li>
                <a>Changes to train times</a>
              </li>
              <li>
                <a>Planned timetable changes</a>
              </li>
              <li>
                <a>Ticket alerts</a>
              </li>
              <li>
                <a>Railcards</a>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" span={6}>
            <h2>Places</h2>
            <ul>
              <li>
                <a>Trains to Birmingham</a>
              </li>
              <li>
                <a>Trains to Edinburgh</a>
              </li>
              <li>
                <a>Trains to Leeds</a>
              </li>
              <li>
                <a>Trains to Manchester</a>
              </li>
              <li>
                <a>Trains to Cardiff</a>
              </li>
              <li>
                <a>Trains to Newcastle</a>
              </li>
              <li>
                <a>Trains to Reading</a>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" span={6}>
            <h2>Places</h2>
            <ul>
              <li>
                <a>Things to do</a>
              </li>
              <li>
                <a>Destinations</a>
              </li>
              <li>
                <a>Weekend Upgrade</a>
              </li>
              <li>
                <a>Free prize draw</a>
              </li>
              <li>
                <a>Luggage delivery services</a>
              </li>
              <li>
                <a>Hotels</a>
              </li>
            </ul>
          </Col>
          <Col className="gutter-row" span={6}>
            <h2>Places</h2>
            <ul>
              <li>
                <a>Key business performance indicators</a>
              </li>
              <li>
                <a>British Transport Police</a>
              </li>
              <li>
                <a>Contact us</a>
              </li>
              <li>
                <a>Press</a>
              </li>
              <li>
                <a>Delay repay</a>
              </li>
              <li>
                <a>Mobile app</a>
              </li>
              <li>
                <a>CrossCountry Community Hub</a>
              </li>
              <li>
                <a>Charity</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
