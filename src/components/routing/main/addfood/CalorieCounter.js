import React, { useState } from "react";

function CalorieCounter(props) {
  return (
    <div className="calorie-counter">
      <h1>{props.caloriesPassed} kcal</h1>
    </div>
  );
}

export default CalorieCounter;
