import React from "react";

const cardForBar = {
  background: "white",
  borderRadius: "15px",
  width: "300px",
  height: "200px",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

};

const cardLabel = {
  fontSize: "22px",
  //height: "75px",
};

const cardLabelContainer = {
  //height: "22px",
};

const cardHeadingContainter = {

  fontSize: "30px",
  height: "50px",
  //padding: "10px",
}

function CardForChartBarSingle({ children, chartCardData }) {
  return (
    <div style={cardForBar}>
      <div style={cardHeadingContainter}>
        <p>
          {chartCardData.icon} {chartCardData.label}
        </p>
      </div>
      {children}
      <div style={cardLabelContainer}>
        <p style={cardLabel}>{Math.round(chartCardData.amount)}/{chartCardData.label==="WATER"?"3l": Math.round(chartCardData.recommended) + " g"}</p>
      </div>
      
    </div>
  );
}

export default CardForChartBarSingle;
