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
import CardForChartBarSingle from "../../../common/CardForChartBarSingle";
import ChartBarSingle from "../../../charts/ChartBarSingle";
import BarChartOneLine from "../../../charts/BarChartOneLine";
import ChartCardForBarOneLine from "../../../charts/ChartCardForBarOneLine";
import { GiWheat, GiGlassShot, GiBiceps } from "react-icons/gi";
import { ImDroplet } from "react-icons/im";
import { trackPromise } from 'react-promise-tracker';
import { usePromiseTracker } from "react-promise-tracker";
import Logo from "../../../logo/Logo"


function MealPlanDisplay(props) {
  const [addedFoods, setAddedFoods] = useState([]);
  const [userData, setUserData] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);
  const [chartCardData, setChartCardData] = useState({});
  const { promiseInProgress } = usePromiseTracker();

  useEffect(() => {
    getUserDetails();
    handleDateSelect();
    getAddedFoods();
  },[props.selectedDate]);

  useEffect(() => {
    getAddedFoods();
  },[props.addedFoods]);

  const getAddedFoods = () => {
    try {
      const date = { date: props.selectedDate };
      trackPromise(
      axios
        .post("http://localhost:8080/updatemealplan", date)
        .then((response) => {
          setAddedFoods(response.data.foods);
          countCalories(response);
          setChartCardData(response.data.macroNutrients);
        }));
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
          setChartCardData(response.data.macroNutrients);
        });
    } catch (err) {
      console.log(err);
    }
  }

  const changeAmountByButton = (event) => {

    console.log("change")
    const newAmount = {
      consumedFoodId: event.target.dataset.consumedfoodid,
      direction: event.target.innerText,
    };
    axios
      .post("http://localhost:8080/changeamountoffood", newAmount)
      .then((response) => {
        const date = { date: props.selectedDate };
        axios
          .post("http://localhost:8080/updatemealplan", date)
          .then((response) => {
            setAddedFoods(response.data.foods);
            countCalories(response);
            setChartCardData(response.data.macroNutrients);
          });
      });
  };

  const deleteFood = (event) => {
    const foodToDelete = {
      consumedFoodId: event.target.dataset.consumedfoodid,
    };
    axios
      .post("http://localhost:8080/deletefood", foodToDelete)
      .then((response) => {
        const date = { date: props.selectedDate };
        console.log(date);
        axios
          .post("http://localhost:8080/updatemealplan", date)
          .then((response) => {
            setAddedFoods(response.data.foods);
            setChartCardData(response.data.macroNutrients);
            countCalories(response);
          });
      });
  };

  const changeAmountInGramByTyping = (event, index) => {
    const newAmount = {
      consumedFoodId: event.target.dataset.consumedfoodid,
      amount: event.target.value,
    };
    axios
      .post("http://localhost:8080/changeamountoffoodtocustomvalue", newAmount)
      .then((response) => {
        const date = { date: props.selectedDate };
        axios
          .post("http://localhost:8080/updatemealplan", date)
          .then((response) => {
            setAddedFoods(response.data.foods);
            setChartCardData(response.data.macroNutrients);
            countCalories(response);
          });
      });
  };

  const macroNutrientsContainer = {
    display: "flex",
    gap: "50px",
    padding: "10px",
  };

  const roundedCorner = {
    borderRadius: "15px",
    height: "auto"
  };

  const caloricInformation = {
    borderRadius: "15px",
    height: "200px"

  };




  return (
    <div className = "food-display">
      
      <div className="caloric-information">
      <Card style={caloricInformation}>
        <Row>
          <Col span={16}>
          <CaloriesBar
          recommended={userData.recommended}
          cal={totalCalories}
        ></CaloriesBar>
        </Col>
        <Col span={8}>
        <div>
          Recommended calories: {Math.round(userData.recommended, 0)}{" "}kcal
        </div>
        </Col>
        
        <CalorieCounter
          recommended={Math.round(userData.recommended, 0)}
          addedFoodsList={addedFoods}
          caloriesPassed={Math.round(totalCalories,0)}>
          </CalorieCounter>
         </Row>      
         </Card>
         </div>

        <div className="macroNutrientsContainer">
            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["carbohydrate"],
                label: "CARBOHYDRATE",
                icon: <GiWheat />,
                color: "#FFBB28",
              }}>
              <BarChartOneLine
                data={{
                  color: "#FF8042",
                  amount: chartCardData["carbohydrate"],
                }}>
              </BarChartOneLine>
            </ChartCardForBarOneLine>

            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["protein"],
                label: "PROTEIN",
                icon: <GiBiceps />,
                color: "#00C49F",
              }}
            >
              <BarChartOneLine
                data={{ color: "#00C49F", amount: chartCardData["protein"] }}
              ></BarChartOneLine>
            </ChartCardForBarOneLine>

            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["fat"],
                label: "FAT",
                icon: <ImDroplet />,
                color: "#FFBB28",
              }}
            >
              <BarChartOneLine
                data={{ color: "#FFBB28", amount: chartCardData["fat"] }}
              ></BarChartOneLine>
            </ChartCardForBarOneLine>

            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["fat"],
                label: "WATER",
                icon: <GiGlassShot/>,
                color: "#FFBB28",
              }}
            >
              <BarChartOneLine
                data={{ color: "#0088FE", amount: chartCardData["fat"] }}
              ></BarChartOneLine>
            </ChartCardForBarOneLine>
          </div>
          

    <Card style={roundedCorner}>
    <div>
      <div className="column-titles" >
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
      </div>
      {(promiseInProgress === true) ?
           <Logo/>
            :
      <div className="food-table" >
          {addedFoods.map((food, index) => (
            <Row key ={food.foodConsumed[0].id} >
              <Col span={3}><img className="food-image" alt="broccoli" src={food.energy / 100 < 1 ?
                   broccoli: food.energy / 100 < 2.4 ? healthyfood : junkfood }></img></Col>
              <Col span={3}>{food.description}</Col>
              <Col span={1}>
                 <Button
                  onClick={(event) => {
                    changeAmountByButton(event);
                  }}
                  data-energy={food.energy}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  type="primary"
                  className="calorie-button-rigth"
                  shape="rectangle"
                  icon="-"
                  size="small"
                />
              </Col>
              <Col span={2}>
              <div key={`${Math.floor((Math.random() * 10000000000))}-min`}>
                 <input
                    size="4"
                    className="amount-selector"
                    data-consumedfoodid={food.foodConsumed[0].id}
                    onBlur={(event) =>{
                      changeAmountInGramByTyping(event);
                    }}
                    defaultValue={food.foodConsumed[0].amount}
                  />
                  </div>
              </Col>
              <Col span={1}>
                 <Button
                  onClick={(event) => {
                    changeAmountByButton(event);
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
                  deleteFood(event)
                  }}
                  data-consumedfoodid={food.foodConsumed[0].id}
                  className="ant-btn"
                  type="primary"
                >Delete</button>
              </Col>
            </Row>
          ))}
          </div>
    }
    </div>
    </Card>
  
    </div>
  );
}

export default MealPlanDisplay;
