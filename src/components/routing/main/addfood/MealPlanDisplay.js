import {Card, Space, Col, Row, Button, Divider} from "antd";
import React, { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
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
import CustomNutrients from "./CustomNutrients";
import LoadLogo from "../../../logo/LoadLogo";
import BarChartAntDesign from "../../../charts/BarChartAntDesign";



function MealPlanDisplay(props) {
  const endpoint = process.env.REACT_APP_API_ENDPOINT;
  const [addedFoods, setAddedFoods] = useState([]);
  const [userData, setUserData] = useState({});
  const [totalCalories, setTotalCalories] = useState(0);
  const [chartCardData, setChartCardData] = useState({});
  const { promiseInProgress } = usePromiseTracker();
  const [selectedNutrients, setSelectedNutrients] = useState([]);
  const [defaultCheckedValues, setDefaultCheckedValues] = useState();
  const [checkedValues, setCheckedValues] = React.useState(defaultCheckedValues);

  useEffect(() => {
    getUserDetails();
    handleDateSelect();
    getAddedFoods();
    getSelectedNutrients();
  },[props.selectedDate]);

  useEffect(() => {
    getAddedFoods();
  },[props.addedFoods]);

  useEffect(() => {
    updateCheckedNutrients();
  },[]);

  let history = useHistory();


  const getAddedFoods = () => {
      const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    try {
      const date = { date: props.selectedDate };
      trackPromise(
      axios
        .post(endpoint + "/updatemealplan", date, config)
        .then((response) => {
          setAddedFoods(response.data.foods);
          countCalories(response);
          setChartCardData(response.data.macroNutrients);
          getSelectedNutrients()
        }).catch((error) => {
          switch (error.response.status) {
              case 403:
                  console.log("ERROR 403 response")
              default:
                  break}
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const getUserDetails = () => {
    try {
      axios.get(endpoint + "/getuserdata").then((response) => {
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

  // function timeout(delay) {
  //     return new Promise( res => setTimeout(res, delay) );
  // }

  const handleDateSelect = () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const newDate = { date: moment(props.selectedDate).format("YYYY-MM-DD") };
    try {
      axios
        .post(endpoint + "/updatemealplan", newDate, config)
        .then((response) => {
          setAddedFoods(response.data.foods);
          countCalories(response);
          setChartCardData(response.data.macroNutrients);
          getSelectedNutrients()
        }).catch(async (error) => {
          switch (error.response.status) {
              case 403:
                  alert("Not authenticated, please log in!\n" + "ERROR " + error.response.status);
                  // await timeout(1000);
                  // history.push("/login");
                  // window.location.reload(false);
                  break
              // case 500:
              //     alert("Oops! Something went wrong!\n Please come back later!" +  "ERROR " + error.response.status);
              //     break
              default:
                  break
          }
      });
    } catch (err) {
      console.log(err);
    }
  }

  const changeAmountByButton = (event) => {
      const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const newAmount = {
      consumedFoodId: event.target.dataset.consumedfoodid,
      direction: event.target.innerText,
    };
    axios
      .post(endpoint + "/changeamountoffood", newAmount)
      .then((response) => {
        const date = { date: props.selectedDate };
        axios
          .post(endpoint + "/updatemealplan", date, config)
          .then((response) => {
            setAddedFoods(response.data.foods);
            countCalories(response);
            setChartCardData(response.data.macroNutrients);
            getSelectedNutrients()
          }).catch((error) => {
            switch (error.response.status) {
                case 403:
                    console.log("ERROR 403 response")
                default:
                    break}
        });
      });
  };

  const deleteFood = (event) => {
      const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const foodToDelete = {
      consumedFoodId: event.target.dataset.consumedfoodid,
    };
    axios
      .post(endpoint + "/deletefood", foodToDelete)
      .then((response) => {
        const date = { date: props.selectedDate };
        axios
          .post(endpoint + "/updatemealplan", date, config)
          .then((response) => {
            setAddedFoods(response.data.foods);
            setChartCardData(response.data.macroNutrients);
            countCalories(response);
            getSelectedNutrients()
          }).catch((error) => {
            switch (error.response.status) {
                case 403:
                    console.log("ERROR 403 response")
                default:
                    break}
        });
      });
  };




  const changeAmountInGramByTyping = (event, index) => {
    const newAmount = {
      consumedFoodId: event.target.dataset.consumedfoodid,
      amount: event.target.value,
    };
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    axios
      .post(endpoint + "/changeamountoffoodtocustomvalue", newAmount)
      .then((response) => {
        const date = { date: props.selectedDate };
        axios
          .post(endpoint + "/updatemealplan", date, config)
          .then((response) => {
            setAddedFoods(response.data.foods);
            setChartCardData(response.data.macroNutrients);
            countCalories(response);
            getSelectedNutrients();
          }).catch((error) => {
            switch (error.response.status) {
                case 403:
                    console.log("ERROR 403 response")
                default:
                    break}
        });
      });
  };


  const getSelectedNutrients = () =>{
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const date = { date: props.selectedDate };
    axios
      .post(endpoint + "/getselectednutrients", date, config)
      .then((response) => {
        setSelectedNutrients(response.data);
      })
    }

  

  const selectCustomNutrients = () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    let selected = []
    for (let nutrient of checkedValues){
      let dict = {};
      dict["nutrientID"] = nutrient;
      selected.push(dict)
    }
    const selectedNutrientList ={selectedNutrientList : selected};
    const date = { date: props.selectedDate }
    try {
      axios
        .post(endpoint + "/select-custom-nutrient", selectedNutrientList, config)
        .then((response) => {
          axios
            .post(endpoint + "/getselectednutrients", date, config)
            .then((response) => {
              setSelectedNutrients(response.data)
            })}
        )} catch (err) {
      console.log(err);
    }
  }



  const updateCheckedNutrients = () => {
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
    const date = { date: props.selectedDate }
    axios
      .post(endpoint + "/getselectednutrients", date, config)
      .then((response) => {
        const newCheckedValues = [];
          for (let nutrient of response.data){
            newCheckedValues.push("" + nutrient.nutrientID)
          }
          setCheckedValues(newCheckedValues);
          })
        }

  function onChange(checkedValues) {
    setCheckedValues(checkedValues)
  }

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
    borderRadius: "15px"
  };

  const loadLogo = {
      borderRadius: "15px",
      height:"64px"
  };

  const loadLogoAddFood = {
    borderRadius: "15px",
    height: "200px"

  };




  return (
    <Row>
    <Col span={18}>
    <div className = "food-display">
      
      <div className="caloric-information">
      <Card style={caloricInformation}>
      {(promiseInProgress === true) ?
      <div style={loadLogo}><LoadLogo/></div>
            :(<div>
        <Row>
          <Col span={24}>
          <CaloriesBar
          recommended={userData.recommended}
          cal={totalCalories}
        ></CaloriesBar>
        </Col>
            </Row>
            {/*<Divider orientation={"left"}><Divider/>*/}
        <Row justify={"space-between"}>
           <Col flex="50%" >
        <div >
            <h1>Recommended calories: {Math.round(userData.recommended, 0)}{" "}kcal</h1>
        </div>
           </Col>
            <Col flex="auto" style={{justifyItems:"right"}}>
                <CalorieCounter
          recommended={Math.round(userData.recommended, 0)}
          addedFoodsList={addedFoods}
          caloriesPassed={Math.round(totalCalories,0)}>
          </CalorieCounter>
            </Col>
        </Row>
          </div>)}
         </Card>
         </div>

        <Row className="macroNutrientsContainer" gutter={[10,20]} >
            <Col flex="25%">
            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["carbohydrate"],
                label: "CARBOHYDRATE",
                icon: <GiWheat />,
                color: "#FFBB28",
              }}>
              <BarChartAntDesign
                data={{color: "#FF8042", amount: chartCardData["carbohydrate"], recommended:100,
                }}>
              </BarChartAntDesign>
            </ChartCardForBarOneLine>
            </Col>
            <Col flex="25%">
            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["protein"],
                label: "PROTEIN",
                icon: <GiBiceps />,
                color: "#00C49F",
              }}
            >
              <BarChartAntDesign
                data={{ color: "#00C49F", amount: chartCardData["protein"], recommended:100, }}
              ></BarChartAntDesign>
            </ChartCardForBarOneLine>
            </Col>
        <Col flex="25%">
            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["fat"],
                label: "FAT",
                icon: <ImDroplet />,
                color: "#FFBB28",
              }}
            >
              <BarChartAntDesign
                data={{ color: "#FFBB28", amount: chartCardData["fat"], recommended:100, }}
              ></BarChartAntDesign>
            </ChartCardForBarOneLine>
        </Col>

        <Col flex="25%">
            <ChartCardForBarOneLine
              chartCardData={{
                amount: chartCardData["fat"],
                label: "WATER",
                icon: <GiGlassShot/>,
                color: "#FFBB28",
              }}
            >
              <BarChartAntDesign
                data={{ color: "#0088FE", amount: chartCardData["fat"], recommended:100, }}
              ></BarChartAntDesign>
            </ChartCardForBarOneLine>
        </Col>
          </Row>
          

    <Card style={roundedCorner}>
    <div>
      <div className="column-titles" >
      <Row>
      <Col span={3}><b>Calorie density</b></Col>
      <Col span={3}><b>Description</b></Col>
      <Col span={1}></Col>
      <Col span={2}><b>Amount</b></Col>
      <Col span={1}></Col>
      <Col span={3}><b>Unit</b></Col>
      <Col span={3}><b>Energy</b></Col>
      <Col span={3}><b></b></Col>
      </Row>
      </div>
      {(promiseInProgress === true) ?
          <div style={loadLogoAddFood}><LoadLogo/></div>
            :
      <div className="food-table" >
          {addedFoods.map((food, index) => (
            <Row key ={food.foodConsumed[0].id} >
              <Col span={3}><img className="food-image" alt="broccoli" src={food.energy / 100 < 1 ?
                   broccoli: food.energy / 100 < 2.4 ? healthyfood : junkfood }
              ></img></Col>
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
    </Col>
    <Col span={6} >
      <CustomNutrients updateCheckedNutrients={updateCheckedNutrients} checkedValues={checkedValues} selectedNutrients={selectedNutrients} onChange={onChange} selectCustomNutrients={selectCustomNutrients} getSelectedNutrients={getSelectedNutrients}>
      </CustomNutrients>
    </Col>
    </Row>
  );
}

export default MealPlanDisplay;
