import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {
  Form,
  Input,
  Radio,
  InputNumber
} from 'antd';

function UserForm(props){
  
  // this.handleInputChange = this.handleInputChange.bind(this);

  

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <div className="userform">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item label="Name" 
                    name="username"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input 
              name="username"
              onChange={props.handleInput}/>
        </Form.Item>
        <Form.Item label="Age" 
                    name="age"
                    rules={[{ required: true, message: 'Please input your age!' }]}>
          <Input
              style={{ width: 60 }}
              name="age"
              maxLength="2"
              onChange={props.handleInput}/>{" "}years
        </Form.Item>
        <Form.Item label="Weight" 
                    name="weight"
                    rules={[{ required: true, message: 'Please input your weight!' }]}>
          <Input
              style={{ width: 60 }}
              name="weight"
              maxLength="3"
              onChange={props.handleInput}/>{" "}kg
        </Form.Item>
        <Form.Item label="Height" 
                    name="height"
                    rules={[{ required: true, message: 'Please input your height!' }]}>
          <Input
              style={{ width: 60 }}
              name="height"
              maxLength="3"
              onChange={props.handleInput}/>{" "}cm
        </Form.Item>
        <Form.Item label="Gender" name="gender"
                    rules={[{ required: true, message: 'Please choose your gender!' }]}>
          <Radio.Group 
              name="gender"
              onChange={props.handleInput}>
            <Radio.Button value="166">Women</Radio.Button>
            <Radio.Button value="0">Men</Radio.Button>
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UserForm;