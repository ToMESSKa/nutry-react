import React, { PureComponent } from "react";
import BarChartOneLine from "./BarChartOneLine";
//import { GiFlour } from 'react-icons/gi';
import {Card, Space, Col, Row, Button } from "antd";
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Logo from "../../components/logo/Logo"
import LoadLogo from "../logo/LoadLogo";

const cardForBar = {
    background: "white",
    minWidth: "150px",
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
           <LoadLogo/>
            :
            <div style={{width:"85%"}}>
      <h4>{chartCardData.icon} {Math.round(chartCardData.amount)} g </h4>
      <div>{chartCardData.label}</div>
      {children}
      </div>
      }
    </div>
     
  );
}

export default ChartCardForBar;
