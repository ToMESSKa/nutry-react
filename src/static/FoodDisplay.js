import CalorieCounter from "./CalorieCounter";
import CaloriesBar from "./CaloriesBar";
import { Button, Card, Input, Space } from "antd";
import DetailedNutrients from "./DetailedNutrients";
import broccoli from '../../broccoli.png';
import healthyfood from '../../healthyfood.png';
import junkfood from '../../junkfood.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from "react";

function FoodDisplay(props) {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    props.getCurrentDate(startDate);
    console.log(startDate);
  }, []);


  return (
    <div className="food-display">
      <Card className="food-display-card" bordered={false}>
        <div>
          <h1>
            Recommended calories: {Math.round(props.userData.recommended, 0)}{" "}
            kcal
          </h1>
        </div>
        <CaloriesBar
          recommended={props.userData.recommended}
          cal={props.calories}
        ></CaloriesBar>
        <CalorieCounter
          addedFoodsList={props.addedFoods}
          caloriesPassed={Math.round(props.calories,0)}
        ></CalorieCounter>
        
        <div>
          <div>
          <DatePicker selected={startDate}
           onSelect={(date) => {
            setStartDate(date);
            props.handleDateSelect(date)}}/>
          </div>
          {props.addedFoods.map((food, index) => (
            <Card key ={food.foodConsumed[0].id} className="food-card">
              <Space direction="vertical">
                <div style={{fontSize:"0.7rem"}}>
              {food.description}
              </div>
                <div>
                <img className="food-image" alt="broccoli" src={food.energy / 100 < 1 ?
                   broccoli: food.energy / 100 < 2.4 ? healthyfood : junkfood }></img>
                </div>
              <div>
                Energy: {Math.round((food.energy * food.foodConsumed[0].amount) / 100,0)} kcal{" "}
              </div>
              <div className="amount-selector-component" style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                
                <Button
                  onClick={(event) => {
                    props.changeAmountByButton(event);
                  }}
                  data-energy={food.energy}
                  className="calorie-button-left"
                  data-consumedfoodid={food.foodConsumed[0].id}
                  type="primary"
                  shape="circle"
                  icon="-"
                />
                <div key={`${Math.floor((Math.random() * 10000000000))}-min`} style={{padding:"10px"}}>
                  <input
                    size="4"
                    className="amount-selector"
                    data-consumedfoodid={food.foodConsumed[0].id}
                    onBlur={(event) =>
                      props.changeAmountInGramByTyping(event, index)
                    }
                    defaultValue={food.foodConsumed[0].amount}
                  />{" "}
                  g
                </div>
                <Button
                  onClick={(event) => {
                    props.changeAmountByButton(event);
                  }}
                  data-energy={food.energy}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  type="primary"
                  className="calorie-button-rigth"
                  shape="circle"
                  icon="+"
                
                />
                
              </div>
              <div style={{justifyContent:"center", alignItems:"center", display:"flex"}}>
                <button id={food.foodConsumed[0].id}
                  onClick={(event) => {
                    props.deleteFood(event);
                  }}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  className="ant-btn"
                >
                  Delete
                </button>
              </div>
              </Space>
            </Card>
          ))}
        </div>
      </Card>
      {/* <DetailedNutrients addedFoods={props.addedFoods}></DetailedNutrients> */}
    </div>
  );
}

export default FoodDisplay;
