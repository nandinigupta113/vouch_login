/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./login.css";
import "antd/dist/antd.css";
import Loginimg from "../Images/loginImg.png";
import { UserOutlined } from "@ant-design/icons";
import { Input, Space, Button, Checkbox } from "antd";
const login = () => {
  return (
    <div className="Login">
      <div className="box1">
        <div className="inbox1">
          <div className="heading">
            <h1>Welcome Back</h1>
            <h2>Sub-title text goes here</h2>
          </div>
          <div className="inputs">
            <Space direction="vertical" className="inputval">
              <Input
                style={{"border-radius":"0.2rem"}}
                placeholder="Email Address *"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Space>
            <Space direction="vertical" className="inputval">
              <Input.Password  style={{"border-radius":"0.2rem"}}placeholder="Password *" />
            </Space>
            <Button>Login</Button>
            <div className="lowerline">
              <Checkbox><h4>Remember Password</h4></Checkbox>
              <p href="">Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <img src={Loginimg} />
      </div>
    </div>
  );
};

export default login;
