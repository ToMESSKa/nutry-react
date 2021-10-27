import React, { PureComponent } from "react";
import BarChartOneLine from "./BarChartOneLine";
//import { GiFlour } from 'react-icons/gi';
import {Card, Space, Col, Row, Button } from "antd";

const cardForBar = {
    background: "white",
    width: "380px",
    height: "100px",
    padding: "5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "15px",
  };


function ChartCardForBar({children, chartCardData}) {
  return (
    <div style={cardForBar}>
      <h4>{chartCardData.icon} {Math.round(chartCardData.amount)} g </h4>
      <div>{chartCardData.label}</div>
      {children}
    </div>
     
  );
}

export default ChartCardForBar;
