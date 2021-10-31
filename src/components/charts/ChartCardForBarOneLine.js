import React, { PureComponent } from "react";
import BarChartOneLine from "./BarChartOneLine";
//import { GiFlour } from 'react-icons/gi';
import {Card, Space, Col, Row, Button } from "antd";
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Logo from "../../components/logo/Logo"

const cardForBar = {
    background: "white",
    width: "300px",
    height: "100px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
  };


function ChartCardForBar({children, chartCardData}) {
  const { promiseInProgress } = usePromiseTracker();
  return (
    
    <div style={cardForBar}>
      {(promiseInProgress === true) ?
           <Logo/>
            :
            <div>
      <h4>{chartCardData.icon} {Math.round(chartCardData.amount)} g </h4>
      <div>{chartCardData.label}</div>
      {children}
      </div>
      }
    </div>
     
  );
}

export default ChartCardForBar;
