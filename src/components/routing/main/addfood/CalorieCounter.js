import React, { useState } from "react";

function CalorieCounter(props) {
  return (
    <div className="calorie-counter">
      <h1> {props.caloriesPassed} / {props.recommended} kcal ({Math.round((props.caloriesPassed/props.recommended)*100)}%)</h1>
    </div>
  );
}

export default CalorieCounter;
