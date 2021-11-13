import { Card, Col, Row, Button } from "antd";
import axios from "axios";
import {React, useSatate, useEffect} from "react";
import CardForCharts from "../../../common/CardForCharts";


function AddWater(props) {
    const endpoint = process.env.REACT_APP_API_ENDPOINT;
    //const [waterConsumed, setWaterConsumed] = useState({})

    const getWaterConsumed = () => {
        //console.log("Added foods at water: " + props.addedFoods);

    }

    useEffect(() => {
       getWaterConsumed();
    }, [])
    const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};

    /* const changeAmountByButton = (event) => {
        axios.get(endpoint + "/addwater", config)
        .then((response) => { console.log(response.data) 

             const food2 = {
              fdcId: response.data.fdcId,
              description: response.data.description,
              energy: response.data.foodNutrients[3]["value"],
              amount: 100,
              date: props.date,
              foodNutrients: response.data.foodNutrients,
              foodConsumed: [{amount: 100,},
              ],
            };
            
            const date = { date: props.date };
            console.log(date);
        
            const config = {headers: {Authorization:`Bearer ${localStorage.getItem("token")}`}};
            axios
              .post(endpoint + "/addfoodtomealplan", food2, config)
              .then((response) => {
                console.log(response)
                axios
                  .post(endpoint + "/updatemealplan", date, config)
                  .then((response) => {

                    setAddedFoods(response.data.foods);
                  }).catch((error) => {
                  switch (error.response.status) {
                    case 403:
                      console.log("ERROR 403 response")
                    default:
                      break}
                });
              }).catch((error) => {
              switch (error.response.status) {
                case 403:
                  console.log("ERROR 403 response")
                default:
                  break}
            }); 

          })} */
          
      
    

    return (
        <div className="add-water">
            <Card cardData={{label: ""}} align="middle">

                <h1>Water Consumption</h1>
                <Row >
                    

                <Col span={4}>
                 <Button
                  onClick={(event) => {
                    
                  }}
                  type="primary"
                  className="calorie-button-rigth"
                  shape="rectangle"
                  icon="-"
                  size="small"
                />
              </Col>
              <Col span={5}>
              <div >
                 <input
                    size="4"
                    className="amount-selector"
                    
                    onBlur={(event) =>{
/*                       changeAmountInGramByTyping(event);
 */                    }}
                    defaultValue={"1"}
                  />
                  </div>
              </Col>
              <Col span={4}>
                 <Button
                  onClick={
                     props.addWater
                   }
                  type="primary"
                  className="calorie-button-rigth"
                  shape="rectangle"
                  icon="+"
                  size="small"
                />
                </Col>
                </Row>

            </Card>
        
        </div>
    );
  }

  export default AddWater;