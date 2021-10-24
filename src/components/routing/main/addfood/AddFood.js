import { } from "antd";
import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import DividedLayout from "../../../common/DivivedLayout"
import Calendar from "./Calendar"
import LeftColumn from "../../../common/LeftColumn";
import RightColumn from "../../../common/RightColumn ";
import MealPlanDisplay from "./MealPlanDisplay";
import moment from "moment";



function AddFood() {

  const [selectedDate, setSelectedDate] = useState([]);


  const getCurrentDate = (date) => {
    const newDate = moment(date).format("YYYY-MM-DD");
    setSelectedDate(date);
  };

  return (
    <div className="add-food">
      <DividedLayout>
        <LeftColumn><Calendar getCurrentDate={getCurrentDate}></Calendar></LeftColumn>
        <RightColumn><MealPlanDisplay selectedDate={selectedDate} ></MealPlanDisplay></RightColumn>
      </DividedLayout>
    </div>
  );
}

export default AddFood;
