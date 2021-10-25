import Logo from "../../logo/Logo";
import Brand from "../../brand/Brand";
import React from "react";
import { Form, Input, Button, Layout, Carousel, Card, Row, Col } from 'antd';


function Registration() {
    return (
        <div className="registration">
            <Layout>
                <Row>
                    <Col span={6} offset={6}>
                        <Logo />
                    </Col>
                    <Col span={4} class="logo-brand">
                        <Brand />
                    </Col>
                </Row>
                <Row>
                    <Col span={14} offset={5}>
                        <Row>
                        </Row>
                    </Col>
                </Row>
            </Layout>
        </div>
    );
};

export default Registration;