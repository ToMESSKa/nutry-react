import React, { useState } from 'react';
import 'antd/dist/antd.css';
import {Form, Input, Select,} from 'antd';
const { Option } = Select;

function CredentialForm(props){




    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const formItemLayout = {
        labelCol: {
            xs: {span: 24,},
            sm: {span: 8,},},
        wrapperCol: {
            xs: {span: 24,},
            sm: {span: 16,},
        },
    };

    return (
        <div className="credentialForm">
            <h1>Begin your registration.</h1>
            <Form
                {...formItemLayout}
                labelCol={{span: 7,}}
                wrapperCol={{span: 13,}}
                layout="horizontal"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                initialValues={{email:props.userData.email, password:props.userData.password, confirm:props.userData.confirm}}>
                <Form.Item
                    name="email"
                    label="E-mail"

                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}>
                    <Input
                        name="email"
                        onChange={props.handleInput}/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                    hasFeedback>
                    <Input.Password
                        name="password"
                        onChange={props.handleInput}/>
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }

                                return Promise.reject(new Error('The two passwords that you entered do not match!'));
                            },
                        }),
                    ]}
                >
                    <Input.Password
                        name="confirm"
                        onChange={props.handleInput}/>
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Gender"
                    rules={[
                        {
                            required: true,
                            message: 'Please select gender!',
                        },
                    ]}
                >
                    <Select name="gender" placeholder="select your gender" onChange={props.handleSelectInput} >
                        <Option name="gender" value="0">Male</Option>
                        <Option name="gender" value="166">Female</Option>
                        <Option name="gender" value="83">Other</Option>
                    </Select>
                </Form.Item>

            </Form>
        </div>
    );
};

export default CredentialForm;