import React, { useState } from "react";
import {
  PlusOutlined,
  MinusOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Form, Input, Button, Checkbox, Select, Space } from "antd";

const DetailJourney = ({ tab, setTab }) => {
  const { Option } = Select;

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };

  return (
    <div className="journey-detail">
      {/* passenger */}
      {tab === "passenger" ? (
        <div className="journey-detail__passenger">
          <div className="adult">
            <p>
              Adults <br />
              aged 16+
            </p>
            <div className="selection">
              <PlusOutlined />
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <MinusOutlined />
            </div>
          </div>
          <div className="children">
            <p>
              Children <br />
              aged 5 - 15
            </p>
            <div className="selection">
              <PlusOutlined />
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                  Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
              <MinusOutlined />
            </div>
          </div>
        </div>
      ) : tab === "railcard" ? (
        <div className="journey-detail__railcard">
          <Form
            name="dynamic_form_nest_item"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.List name="users">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, fieldKey, ...restField }) => (
                    <Space
                      key={key}
                      style={{ display: "flex", marginBottom: 8 }}
                      align="baseline"
                    >
                      <Form.Item className="railcard1">
                        <p>Railcard</p>
                        <Select
                          defaultValue="lucy"
                          style={{ width: 200 }}
                          onChange={handleChange}
                        >
                          <Option value="jack">Jack</Option>
                          <Option value="lucy">Lucy</Option>
                          <Option value="disabled" disabled>
                            Disabled
                          </Option>
                          <Option value="Yiminghe">yiminghe</Option>
                        </Select>
                      </Form.Item>

                      <Form.Item className="railcard2">
                        <p>Quantity</p>
                        <Form.Item className="selection">
                          <PlusOutlined />
                          <Select
                            defaultValue="lucy"
                            style={{ width: 120 }}
                            onChange={handleChange}
                          >
                            <Option value="jack">Jack</Option>
                            <Option value="lucy">Lucy</Option>
                            <Option value="disabled" disabled>
                              Disabled
                            </Option>
                            <Option value="Yiminghe">yiminghe</Option>
                          </Select>
                          <MinusOutlined />
                        </Form.Item>
                      </Form.Item>

                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <a onClick={() => add()} block>
                      Add another railcard
                    </a>
                  </Form.Item>
                </>
              )}
            </Form.List>
          </Form>
        </div>
      ) : tab === "via" ? (
        <div className="journey-detail__via">
          <div className="box-top">
            <p>No preference</p>
            <p>Via</p>
            <p>Avoid</p>
          </div>

          <div className="selection">
            <Input placeholder="Search for station" />
          </div>

          <div className="box-bottom">
            <p>Services</p>
            <div className="box">
              <p>Any route</p>
              <p>Direct routes only</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="journey-detail__promo">
          <div className="promo">
            <p>Promotion code</p>
            <div className="selection">
              <Input placeholder="e.g.AA1234" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailJourney;
