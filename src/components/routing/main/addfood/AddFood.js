import { } from "antd";
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



function AddFood() {

  const [selectedDate, setSelectedDate] = useState([]);
  const [addedFoods, setAddedFoods] = useState([]);


  const getCurrentDate = (date) => {
    setSelectedDate(date);
  };


  const addFood = (foodData) => {

    const food2 = {
      fdcId: foodData.fdcId,
      description: foodData.description,
      energy: foodData.foodNutrients[3]["value"],
      amount: 100,
      date: selectedDate,
      foodNutrients: foodData.foodNutrients,
      foodConsumed: [{amount: 100,},
      ],
    };
    
    const date = { date: selectedDate };
    console.log(date);
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    axios
      .post("http://localhost:8080/addfoodtomealplan", food2, config)
      .then((response) => {
        axios
          .post("http://localhost:8080/updatemealplan", date)
          .then((response) => {
            setAddedFoods(response.data.foods);
          });
      });
  };

  return (
    <div className="add-food">
      <DividedLayout>
        <LeftColumn>
          <Calendar getCurrentDate={getCurrentDate}></Calendar>
          <SearchBar addedFoods={addedFoods} addFood={addFood} selectedDate={selectedDate}></SearchBar>
        </LeftColumn>
        <RightColumn>
          <MealPlanDisplay selectedDate={selectedDate} addedFoods={addedFoods}></MealPlanDisplay>
        </RightColumn>
      </DividedLayout>
      <Footer></Footer>
    </div>
    
  );
}

export default AddFood;
