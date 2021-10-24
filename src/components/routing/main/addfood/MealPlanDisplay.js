import {Card, Space, Col, Row, Button } from "antd";
import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import axios from "axios";
import broccoli from '../../../../static/broccoli.png';
import healthyfood from '../../../../static/healthyfood.png';
import junkfood from '../../../../static/junkfood.png';
import "../../../../static/css/MealPlanDisplay.css";
import CaloriesBar from "./CaloriesBar";
import CalorieCounter from "./CalorieCounter";
import moment from "moment";


function MealPlanDisplay(props) {
  const [addedFoods, setAddedFoods] = useState([]);
  const [userData, setUserData] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    // getAddedFoods();
    // getUserDetails();
    handleDateSelect();
  },[props.selectedDate]);



  const getAddedFoods = () => {
    try {
      const date = { date: props.selectedDate };
      axios
        .post("http://localhost:8080/updatemealplan", date)
        .then((response) => {
          setAddedFoods(response.data.foods);
          countCalories(response);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetails = () => {
    try {
      axios.get("http://localhost:8080/getuserdata").then((response) => {
        console.log(response.data)
        setUserData(response.data);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const countCalories = (response) => {
    const totalCalories = response.data.foods.reduce(
      (total, food) =>
        (total = total + (food.energy * food.foodConsumed[0].amount) / 100),
      0
    );
    setTotalCalories(totalCalories);
  };

  const handleDateSelect = () => {
    console.log(props.selectedDate);
    const newDate = { date: moment(props.selectedDate).format("YYYY-MM-DD") };
    try {
      axios
        .post("http://localhost:8080/updatemealplan", newDate)
        .then((response) => {
          setAddedFoods(response.data.foods);
          countCalories(response);
          // setChartCardData(response.data.macroNutrients);
        });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className = "food-display">
      <div>
          <h1>
          Recommended calories: {Math.round(userData.recommended, 0)}{" "}kcal
          </h1>
        </div>
        <CaloriesBar
          recommended={userData.recommended}
          cal={totalCalories}
        ></CaloriesBar>
        <CalorieCounter
          addedFoodsList={addedFoods}
          caloriesPassed={Math.round(totalCalories,0)}
        ></CalorieCounter>
    <div>
      <Row>
      <Col span={3}><b>calorie density</b></Col>
      <Col span={3}><b>description</b></Col>
      <Col span={1}></Col>
      <Col span={2}><b>amount</b></Col>
      <Col span={1}></Col>
      <Col span={3}><b>unit</b></Col>
      <Col span={3}><b>energy</b></Col>
      <Col span={3}><b></b></Col>
      </Row>
          {addedFoods.map((food, index) => (
            <Row key ={food.foodConsumed[0].id} >
              <Col span={3}><img className="food-image" alt="broccoli" src={food.energy / 100 < 1 ?
                   broccoli: food.energy / 100 < 2.4 ? healthyfood : junkfood }></img></Col>
              <Col span={3}>{food.description}</Col>
              <Col span={1}>
                 <Button
                  onClick={(event) => {
                  }}
                  data-energy={food.energy}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  type="primary"
                  className="calorie-button-rigth"
                  shape="rectangle"
                  icon="+"
                  size="small"
                />
                </Col>
              <Col span={2}> <input
                    size="4"
                    className="amount-selector"
                    data-consumedfoodid={food.foodConsumed[0].id}
                    onBlur={(event) =>{}}
                    defaultValue={food.foodConsumed[0].amount}
                  /></Col>
              <Col span={1}>
                 <Button
                  onClick={(event) => {
                  }}
                  data-energy={food.energy}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  type="primary"
                  className="calorie-button-rigth"
                  shape="rectangle"
                  icon="+"
                  size="small"
                />
                </Col>
              <Col span={3}>g</Col>
              <Col span={3}>{Math.round((food.energy * food.foodConsumed[0].amount) / 100,0)} kcal</Col>
              <Col span={3}>
              <button id={food.foodConsumed[0].id}
                  onClick={(event) => {
                  }}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  className="ant-btn"
                >
                  Delete
                </button>
              </Col>
            </Row>
          ))}
    </div>
    </div>
  );
}

export default MealPlanDisplay;
