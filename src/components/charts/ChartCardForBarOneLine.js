import React, { PureComponent } from "react";
import BarChartOneLine from "./BarChartOneLine";
//import { GiFlour } from 'react-icons/gi';

const cardForBar = {
    background: "white",
    width: "300px",
    height: "100px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

function ChartCardForBar({children, chartCardData}) {
  return (
    <div style={cardForBar}>
      <div>
      <h1>{chartCardData.icon} {Math.round(chartCardData.amount)} g</h1>
      </div>
      <div>
        <p>{chartCardData.label}</p>
      </div>
      {children}
    </div>
  );
}

export default ChartCardForBar;
