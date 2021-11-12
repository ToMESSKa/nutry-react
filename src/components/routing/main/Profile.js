import {Button, DatePicker, Form, Input, message, Select} from "antd";
import React, {useEffect, useState} from "react";
import {} from "react-router-dom";
import ImageUploader from "../../routing/main/ImageUploader"
import axios from "axios";
import {trackPromise, usePromiseTracker} from "react-promise-tracker";
const { Option } = Select;

function Profile({ children }) {
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    const [userProfileDetails, setUserProfileDetails] = useState({});

    useEffect( () => {
        getUserProfileDetails();
    },[]);

    const getUserProfileDetails = () => {
        const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
            axios.get(endpoint + "/getuserprofiledetails", config)
                .then((response) => {
                console.log(response.data)
                setUserProfileDetails(response.data);
            });
    };

    const updateUserDetails = () => {
        const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};

            axios.post(endpoint + "/updateuserdetails", userProfileDetails, config)
                .then((response) => {})
            console.log(userProfileDetails);
        };

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleInput = (event) =>{
        setUserProfileDetails({ ...userProfileDetails, [event.target.name]: event.target.value });
        console.log(event.target.value);
        console.log(event.target.name);
    };

    const handleGenderInput = (selected) =>{
        setUserProfileDetails({ ...userProfileDetails, gender: selected});
        console.log(userProfileDetails.gender);
    };

    const handleActivityInput = (selected) =>{
        setUserProfileDetails({ ...userProfileDetails, activity: selected});
        console.log(userProfileDetails.activity);
    };

    const handleGoalInput = (selected) =>{
        setUserProfileDetails({ ...userProfileDetails, goal: selected});
        console.log(userProfileDetails.goal);
    };



    return (

        <div className="profile">

            <Form>
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
                initialValues={{
                username: userProfileDetails.username,
                weight: userProfileDetails.weight,
                height: userProfileDetails.height,
                gender: userProfileDetails.gender,
                activity: userProfileDetails.activity,
                goal: userProfileDetails.goal
            }}>
                <ImageUploader></ImageUploader>
                {children}

                <Form.Item label="Nickname"
                           name="username"
                           rules={[{required: true, message: 'Please input your name!'}]}>
                    <Input
                        name="username"
                        onChange={handleInput}/>
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
                    <Select name="gender" placeholder="select your gender" onChange={handleGenderInput}>
                        <Option name="gender" value="0">Male</Option>
                        <Option name="gender" value="166">Female</Option>
                        <Option name="gender" value="83">Other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="activity"
                    label="Activity"
                    rules={[
                        {
                            required: true,
                            message: 'Please select activity!',
                        },
                    ]}
                >
                    <Select name="activity" placeholder="select your activity" onChange={handleActivityInput}>
                        <Option name="activity" value="1.1">Very Light</Option>
                        <Option name="activity" value="1.3">Light</Option>
                        <Option name="activity" value="1.6">Moderate</Option>
                        <Option name="activity" value="1.9">Heavy</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="goal"
                    label="goal"
                    rules={[
                        {
                            required: true,
                            message: 'Please select goal!',
                        },
                    ]}
                >
                    <Select name="goal" placeholder="select your goal" onChange={handleGoalInput}>
                        <Option name="goal" value="1">Maintenance</Option>
                        <Option name="goal" value="0.8">Fat Loss</Option>
                        <Option name="goal" value="0.65">Extreme Fat Loss</Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Weight"
                           name="weight"

                           rules={[{required: true, message: 'Please input your weight!'}]}>
                    <Input
                        style={{width: 100, float: "left"}}
                        name="weight"
                        maxLength="3"
                        suffix="kg"
                        onChange={handleInput}/>
                </Form.Item>
                <Form.Item label="Height"
                           name="height"

                           rules={[{required: true, message: 'Please input your height!'}]}>
                    <Input
                        style={{width: 100, float: "left"}}
                        name="height"
                        maxLength="3"
                        suffix="cm"
                        onChange={handleInput}/>
                </Form.Item>
                <Form.Item label=" " colon={false}>
                    <Button type="primary" htmlType="submit" onClick={() => {
                        updateUserDetails(userProfileDetails);
                        message.success("Processing complete!");
                    }}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Profile;
