import Logo from "../../logo/Logo";
import Brand from "../../brand/Brand";
import React from "react";
import {Form, Input, Button, Layout, Carousel, Card, Row, Col, Space} from 'antd';
import Stepper from "../../formstepper/Stepper";


function Registration() {
    return (
        <div className="registration">
            <Layout>
                <Row>
                    <Col span={6} offset={6}>
                        <Logo />
                    </Col>
                        <Space align="end">
                            <Col span={4}>
                                <Brand />
                            </Col>
                        </Space>
                </Row>
                <Row>
                    <Col span={14} offset={5}>
                        <Row>
                            <Stepper />
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default Registration;