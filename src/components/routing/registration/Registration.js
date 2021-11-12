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
                <div style={{height:"2rem"}}></div>
                <Row align={"middle"}>
                    <Col  offset={9}>
                        <Logo />
                    </Col>
                        <Col span={4}>
                            <Brand />
                        </Col>
                </Row>
                <div style={{ height: "4rem" }}></div>
                <Row>
                    <Col span={14} offset={5}>
                        <Row>
                            <Stepper />
                        </Row>
                    </Col>
                </Row>
                <div style={{height:"5rem"}}></div>
                <AppFooter />
            </Layout>
        </div>
    );
};

export default Registration;