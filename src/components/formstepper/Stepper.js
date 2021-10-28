import { Steps, Button, message } from "antd";
import "./Stepper.css";
import { Row, Col } from "antd";
import UserForm from "./UserForm";
import ActivityForm from "./ActivityForm";
import GoalForm from "./GoalForm";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import React, { useState, useEffect } from "react";
import CredentialForm from "./CredentialForm";
import axios from "axios";

function Stepper () {
    const [current, setCurrent] = React.useState(0);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        confirm: "",
        birthdate: "",
        weight: "",
        height: "",
        gender: "",
        activity: "",
        goal: "",
    });

    const addUser = (userData) => {
        const username = userData.username;
        const email = userData.email;
        const password = userData.password;
        const confirm = userData.confirm;
        const birthdate = userData.birthdate;
        const weight = userData.weight;
        const height = userData.height;
        const gender = userData.gender;
        const activity = userData.activity;
        const goal = userData.goal;


        const userdb = {
            userName:username,
            email:email,
            password:password,
            confirm:confirm,
            birthdate:birthdate,
            weight:weight,
            height:height,
            gender: gender,
            activity: activity,
            goal: goal
        };
        axios.post("http://localhost:8080/addusertodatabase", userdb);
        console.log(userdb);
    };

    const handleInput = (event) =>{
        setUserData({ ...userData, [event.target.name]: event.target.value });
        console.log(event.target.value);
        console.log(event.target.name);
    };

    const handleSelectInput = (selected) =>{
        setUserData({ ...userData, gender: selected});
        console.log(userData.gender);
    };

    const handleDatePicker = (date, dateString) =>{
        setUserData({ ...userData, birthdate: dateString});
        console.log(userData.birthdate);
        console.log(dateString);}


    const { Step } = Steps;

    const steps = [
        {
            title: "Credentials",
            content: <CredentialForm handleInput={handleInput} handleSelectInput={handleSelectInput} userData={userData}/>,
        },
        {
            title: "User data",
            content: <UserForm handleInput={handleInput} handleDatePicker={handleDatePicker} userData={userData}/>,
        },
        {
            title: "Activity",
            content: <ActivityForm handleInput={handleInput} userData={userData}/>,
        },
        {
            title: "Goal",
            content: <GoalForm handleInput={handleInput} userData={userData}/>,
        },
    ];

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };



    return (
        <>
            <Steps current={current}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <div className="steps-content" style={{width: "100%"}}>{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Link to={{ pathname: "/login" }} >
                        <Button
                            type="primary"
                            onClick={() => {
                                addUser(userData);
                                message.success("Processing complete!");
                            }}
                        >
                            Register
                        </Button>
                    </Link>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Previous
                    </Button>
                )}
            </div>
        </>
    );
};

export default Stepper;