import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "./Login.css"
import {Form, Input, Button, Layout, Carousel, Card, Row, Col, Space, message} from 'antd';
import axios from "axios";
import AppFooter from "../../footer/AppFooter";
import Logo from "../../logo/Logo";
import Brand from "../../brand/Brand";
import {Link, useHistory} from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import AddFood from "../main/addfood/AddFood";



function Login() {
    let history = useHistory();
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });


    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const sendCredentials = () => {
        console.log(credentials);
        axios.post(`${endpoint}/signin`, credentials).then((response) => {
            console.log(credentials);
            localStorage.setItem("token", response.data.token);
            // localStorage.clear();
            console.log(response);
            console.log(localStorage.getItem("token"));
            history.push("/");
        })
    };

    const handleInputChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
        console.log(credentials);
        console.log(event.target.name);
        console.log(event.target.value);
    };

    return (
        <div className="landing">
            <Layout>
                <div style={{height:"2rem"}}></div>
                <Row>
                    <Logo />
                </Row>
                <Row>
                    <Brand />
                </Row>
                <div style={{height:"1rem"}}></div>
                <Row>
                    <Col span={14} offset={5}>
                        <Row>
                            <Col span={11}>
                                <Card>
                                    <Row>
                                        <Col span={22} offset={2} style={{height: 60}}>
                                            <h4 align="left" className="login-form-title">Calories and energy balance</h4>
                                        </Col>
                                    </Row>
                                    <Carousel autoplay>
                                        <Card style={{height: 300}}>
                                            <p>When we eat and drink, we put energy into our bodies. Our bodies use up that energy through everyday movement, which includes everything from breathing to running.</p>
                                        </Card>
                                        <Card style={{height: 300}}>
                                            <p>To maintain a stable weight, the energy we put into our bodies must be the same as the energy we use through normal bodily functions and physical activity.</p>
                                        </Card>
                                        <Card style={{height: 300}}>
                                            <p>An important part of a healthy diet is balancing the energy you put into your bodies with the energy you use. For example, the more physical activity we do, the more energy we use.
                                                If you consume too much energy on 1 day, do not worry. Just try to take in less energy on the following days.</p>
                                        </Card>
                                    </Carousel>
                                </Card>
                            </Col>
                            <Col span={2}>

                            </Col>
                            <Col span={11}>
                                <Card>
                                    <Row>
                                        <Col style={{height: 60}}>
                                            <h4 align="left" className="login-form-title">Please log in!</h4>
                                        </Col>
                                    </Row>

                                    <Form
                                        className="login-form"
                                        name="basic"
                                        initialValues={{ remember: true }}
                                        onFinish={onFinish}
                                        onFinishFailed={onFinishFailed}
                                        autoComplete="off"
                                        size="large"
                                    >
                                        <Form.Item
                                            name="email"
                                            onChange={handleInputChange}
                                            rules={[{ required: true, message: "Please input your Email!" }]}
                                        >
                                            <Input name="email" prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                                        </Form.Item>

                                        <Form.Item
                                            name="password"
                                            onChange={handleInputChange}
                                            rules={[{ required: true, message: "Please input your password!" }]}
                                        >
                                            <Input.Password name="password" prefix={<LockOutlined className="site-form-item-icon" />}
                                                            type="password"
                                                            placeholder="Password"/>
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit" className="login-form-button"
                                                    onClick={() => {
                                                        sendCredentials();
                                                        message.success("Processing complete!");
                                                    }}
                                                    >
                                                Log in
                                            </Button>
                                            Or <a href="/registration">register now!</a>
                                        </Form.Item>
                                    </Form>
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                </Row>
                <div style={{height:"5rem"}}></div>
                <AppFooter />
            </Layout>

        </div>
    );
}
export default Login;