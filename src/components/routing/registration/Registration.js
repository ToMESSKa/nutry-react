import Logo from "../../logo/Logo";
import Brand from "../../brand/Brand";
import React from "react";
import {Form, Input, Button, Layout, Carousel, Card, Row, Col, Space} from 'antd';
import Stepper from "../../formstepper/Stepper";
import AppFooter from "../../footer/AppFooter";


function Registration() {
    return (
        <div className="registration">
            <Layout>
                <Row style={{height:140}}>

                    <Col span={6} offset={6}>
                        <Logo />
                    </Col>

                    <Space align="center" direction="horizontal">
                        <Col span={4}>
                            <Brand />
                        </Col>
                    </Space>
                </Row>
                <div style={{ height: "4rem" }}></div>
                <Row>
                    <Col span={14} offset={5}>
                        <Row>
                            <Stepper />
                        </Row>
                    </Col>
                </Row>
                <AppFooter />
            </Layout>
        </div>
    );
};

export default Registration;