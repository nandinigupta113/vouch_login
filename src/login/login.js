/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import React from 'react'
import "./login.css";
import "antd/dist/antd.css";
import Loginimg from "../Images/loginImg.png";
import { UserOutlined } from "@ant-design/icons";
// import { toast } from "react-toastify";
import axios from "axios";
import { Input, Space, Button, Checkbox } from "antd";
const Login = () => {

  const [email,setEmail] = useState("");
  const [psswd,setPsswd] = useState(""); 
  const [emailerror,setEmailerror] = useState("");
  const [psswderror,setpsswderror] = useState("");
  const [emailerrortype,setEmailerrortype] = useState("");
  const [psswderrortype,setPsswderrortype] = useState("");
  const data = {
    email : email,
    password: psswd
  }
  
  const handlelogin = (e) =>{
    e.preventDefault();
    setEmailerrortype(validateEmail(email));
    setPsswderrortype(validatePassword(psswd));
    if(emailerrortype || psswderrortype){
      console.log("err");
    }
    else{
      axios.post("https://reqres.in/api/login",data)
      .then((res) => {
        console.log(res.data);
        if(res.data.token){
          // toast.error("Select any language first");
        }
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }


  
  const validateEmail= (value) => {
    let error;
    const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!value) {
      error = "Email Required";
      setEmailerror(true);
    } else if (!regex.test(value)) {
      error = "Invalid EmailId";
      setEmailerror(true);
    } else {
      setEmailerror(false);
    }
    return error;
  };

  const validatePassword = (value) => {
    let error;
    // const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    if (!value) {
      error = "Password Required";
      setpsswderror(true);
    }
    //  else if (!regex.test(value)) {
    //   error = "Password Invalid";
    //   setpsswderror(true);
    // } 
    else {
      setpsswderror(false);
    }
    return error;
  };

  return (
    <div className="Login">
      <div className="box1">
        <div className="inbox1">
          <div className="heading">
            <h1>Welcome Back</h1>
            <h2>Sub-title text goes here</h2>
          </div>
          <div className="inputs">
          <span className="error">{emailerrortype}</span>
            <Space direction="vertical" className="inputval">
              <Input
                status = {(emailerror === true)? "error" : " "}
                onChange={(e) => setEmail(e.target.value)}
                style={{ "bordeRadius": "0.2rem" }}
                placeholder="Email Address *"
                prefix={<UserOutlined className="site-form-item-icon" />}
              />
            </Space>
            <span className="error">{psswderrortype}</span>
            <Space direction="vertical" className="inputval">
              <Input.Password
                status = {(psswderror === true)? "error" : ""}
                onChange={(e) => setPsswd(e.target.value)}
                style={{ "borderRadius": "0.2rem" }}
                placeholder="Password *"
              />
            </Space>
            <Button onClick={(e) => handlelogin(e)}>Login</Button>
            <div className="lowerline">
              <Checkbox>
                <h4>Remember Password</h4>
              </Checkbox>
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

export default Login;
