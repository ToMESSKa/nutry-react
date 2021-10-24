import {Card, Space, Col, Row, Button } from "antd";
import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import axios from "axios";
import broccoli from '../../../../static/broccoli.png';
import healthyfood from '../../../../static/healthyfood.png';
import junkfood from '../../../../static/junkfood.png';
import "../../../../static/css/MealPlanDisplay.css";

function MealPlanDisplay() {
  const [addedFoods, setAddedFoods] = useState([]);

  useEffect(() => {
    getAddedFoods();
  }, []);



  const getAddedFoods = () => {
    try {
      const date = { date: "2021-09-01" };
      axios
        .post("http://localhost:8080/updatemealplan", date)
        .then((response) => {
          setAddedFoods(response.data.foods);
          console.log(response.data.foods);
        });
    } catch (err) {
      console.log(err);
    }
  };


  return (
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
            // <Card key ={food.foodConsumed[0].id} className="food-card">
            //   <Space direction="vertical">
            //     <div style={{fontSize:"0.7rem"}}>
            //   {food.description}
            //   </div>
            //   <div>
            //     Energy: {Math.round((food.energy * food.foodConsumed[0].amount) / 100,0)} kcal{" "}
            //   </div>
            //   </Space>
            // </Card>
          ))}
    </div>
  );
}

export default MealPlanDisplay;
