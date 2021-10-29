import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Radio,
  InputNumber,
    DatePicker
} from 'antd';
import "./UserForm.css"

function UserForm(props){

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
      <div className="userform">
        <h1>Please fill out your following data.</h1>
        <Form
            labelCol={{
              span: 5,
            }}
            wrapperCol={{
              span: 14, offset: 0
            }}
            layout="horizontal"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            initialValues={{username:props.userData.username, age:props.userData.age, weight:props.userData.weight, height:props.userData.height}}>
          <Form.Item label="Nickname"
                     name="username"
                     rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input
                name="username"
                onChange={props.handleInput}/>
          </Form.Item>
            <Form.Item label="Date of birth"
                       name="birthdate"
                       rules={[{ required: true}]}>
                <DatePicker style={{ width: 200, float: "left"}}
                            name="birthdate"
                            allowClear="false"
                            onChange={props.handleDatePicker}
                            >
                </DatePicker>
            </Form.Item>

          <Form.Item label="Weight"
                     name="weight"

                     rules={[{ required: true, message: 'Please input your weight!' }]}>
            <Input
                style={{ width: 100, float: "left" }}
                name="weight"
                maxLength="3"
                suffix="kg"
                onChange={props.handleInput}/>
          </Form.Item>
          <Form.Item label="Height"
                     name="height"

                     rules={[{ required: true, message: 'Please input your height!' }]}>
            <Input
                style={{ width: 100, float: "left" }}
                name="height"
                maxLength="3"
                suffix="cm"
                onChange={props.handleInput}/>
          </Form.Item>
        </Form>
      </div>
  );
};

export default UserForm;