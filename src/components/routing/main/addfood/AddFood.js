import { } from "antd";
import React from "react";
import {} from "react-router-dom";
import DividedLayout from "../../../common/DivivedLayout"
import Calendar from "./Calendar"
import LeftColumn from "../../../common/LeftColumn";
import RightColumn from "../../../common/RightColumn ";
import FoodDisplay from "./MealPlanDisplay";

function AddFood() {



  return (
    <div className="add-food">
      <DividedLayout>
        <LeftColumn><Calendar></Calendar></LeftColumn>
        <RightColumn><FoodDisplay></FoodDisplay></RightColumn>
      </DividedLayout>
    </div>
  );
}

export default AddFood;
