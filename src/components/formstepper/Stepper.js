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

function Stepper () {
    const [current, setCurrent] = React.useState(0);
    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: "",
        age: "",
        weight: "",
        height: "",
        gender: "",
        activity: "",
        goal: "",
        recommended: "",
    });


    const handleInput = (event) =>{
        setUserData({ ...userData, [event.target.name]: event.target.value });
        console.log(event.target.value);

    }

    const { Step } = Steps;

    const steps = [
        {
            title: "Credentials",
            content: <UserForm handleInput={handleInput} />,
        },
        {
            title: "User data",
            content: <UserForm handleInput={handleInput} />,
        },
        {
            title: "Activity",
            content: <ActivityForm handleInput={handleInput} />,
        },
        {
            title: "Goal",
            content: <GoalForm handleInput={handleInput} />,
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
            <div className="steps-content">{steps[current].content}</div>
            <div className="steps-action">
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Link to={{ pathname: "/" }} >
                        <Button
                            type="primary"
                            onClick={() => {
                                message.success("Processing complete!");
                                //props.calcRecommendedCal();
                            }}
                        >
                            Done
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
