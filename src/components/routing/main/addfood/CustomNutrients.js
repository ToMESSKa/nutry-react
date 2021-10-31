import {Card } from "antd";
import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import DividedLayout from "../../../common/DivivedLayout"
import Calendar from "./Calendar"
import LeftColumn from "../../../common/LeftColumn";
import RightColumn from "../../../common/RightColumn ";
import MealPlanDisplay from "./MealPlanDisplay";
import SearchBar from "./SearchBar";
import axios from "axios";
import { Footer } from "antd/lib/layout/layout";



function CustomNutrients() {

  return (
    <div className = "custom-nutrients">
    <Card>
      Custom nutrients
    </Card>
    </div>
  );
}

export default CustomNutrients;
