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
  fontSize: "18px",
  height: "75px",
};

const cardLabelContainer = {
  height: "22px",
};

const cardHeadingContainter = {
  padding: "10px",
}

function CardForChartBarSingle({ children, chartCardData }) {
  return (
    <div style={cardForBar}>
      <div style={cardHeadingContainter}>
        <h1>
          {chartCardData.icon} {Math.round(chartCardData.amount)} / {chartCardData.label==="WATER"?"3l":"100g"}
        </h1>
      </div>
      <div style={cardLabelContainer}>
        <p style={cardLabel}>{chartCardData.label}</p>
      </div>
      {children}
    </div>
  );
}

export default CardForChartBarSingle;
